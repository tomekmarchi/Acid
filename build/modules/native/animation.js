var raf=requestAnimationFrame,
	caf=cancelAnimationFrame;
$.caf = (i) => { //cancel animation frame
	return caf(i);
};
$.raf = (i) => { //cancel animation frame
	return raf(i);
};
