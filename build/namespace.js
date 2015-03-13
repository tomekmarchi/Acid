//export acid to global check for attribute avoid
var avoid = (_global.acidAvoid)? _global.acidAvoid : avoid;

if (avoid) {
	_global[avoid] = $;
} else {
	_global.$ = $;
}