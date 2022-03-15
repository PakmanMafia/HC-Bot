module.exports = async function () {
	const randomBetween = (min, max) =>
		min + Math.floor(Math.random() * (max - min + 1));
	const r = randomBetween(0, 255);
	const g = randomBetween(0, 255);
	const b = randomBetween(0, 255);
	const rgbColor = [r, g, b];
	return rgbColor;
};
