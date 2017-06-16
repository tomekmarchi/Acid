const raf = requestAnimationFrame.bind(selfWindow);
const caf = cancelAnimationFrame.bind(selfWindow);
$.raf = raf;
$.caf = caf;
