const raf = requestAnimationFrame.bind(selfWindow);
const caf = cancelAnimationFrame.bind(selfWindow);
acid.raf = raf;
acid.caf = caf;
