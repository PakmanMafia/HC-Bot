const fetch = require("node-fetch");

module.exports = async function (apiLink) {
	const repoInfo = await fetch(apiLink).then((response) => response.json());
	const authorName = await repoInfo.owner.login;
	return authorName;
};
