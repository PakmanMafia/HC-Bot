const fetch = require("node-fetch");

module.exports = async function (apiLink) {
	const repoInfo = await fetch(apiLink).then((response) => response.json());
	const avatarUrl = await repoInfo.owner.avatar_url;
	return avatarUrl;
};
