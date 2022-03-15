const fetch = require("node-fetch");

module.exports = async function (apiLink) {
	const repoInfo = await fetch(apiLink).then((response) => response.json());
	const repoName = await repoInfo.full_name;
	return repoName;
};
