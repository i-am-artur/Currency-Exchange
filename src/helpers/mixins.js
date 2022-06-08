export function removeSpaces(str) {
	return str?.replaceAll(' ', '');
}

export function round(number, decimals) {
	return +(Math.round(number + `e+${decimals}`) + `e-${decimals}`);
}

export function random(min, max) {
	const maxUpperLimit = 1;

	return Math.floor(Math.random() * (max - min + maxUpperLimit) + min);
}
