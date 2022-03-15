const fetch = require("node-fetch");

module.exports = async function (apiLink) {
	const repoInfo = await fetch(apiLink).then((response) => response.json());
	const description = await repoInfo.description;
	const empty = "unconfigured";
	if (description === null) {
		return empty;
	} else {
		return description;
	}
};
