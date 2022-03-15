const fetch = require("node-fetch");

module.exports = async function (apiLink) {
	const repoInfo = await fetch(apiLink).then((response) => response.json());
	const repoLink = await repoInfo.html_url;
	return repoLink;
};
