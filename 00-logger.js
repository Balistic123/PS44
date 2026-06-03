// Minimal on-screen logger for PS4 browser (no devtools).
(function () {
    const logEl = document.getElementById('log');
    const statusEl = document.getElementById('status');

    window.ps4log = function (msg) {
        const line = document.createElement('div');
        line.textContent = `[${performance.now().toFixed(1)}ms] ${msg}`;
        if (logEl) logEl.appendChild(line);
    };

    window.ps4status = function (msg, color) {
        if (!statusEl) return;
        statusEl.textContent = msg;
        if (color) statusEl.style.color = color;
    };

    window.ps4mem = function () {
        if (performance.memory) {
            ps4log(
                `memory: used=${(performance.memory.usedJSHeapSize / 1048576).toFixed(1)}MB` +
                ` total=${(performance.memory.totalJSHeapSize / 1048576).toFixed(1)}MB` +
                ` limit=${(performance.memory.jsHeapSizeLimit / 1048576).toFixed(1)}MB`
            );
        } else {
            ps4log('performance.memory unavailable on this engine');
        }
    };
})();
