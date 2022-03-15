const { MessageEmbed } = require("discord.js");

module.exports = async function (
	repoLink,
	color,
	repoName,
	avatarUrl,
	description
) {
	const repoEmbed = new MessageEmbed()
		.setColor(color)
		.setTitle(repoName)
		.setURL(repoLink)
		.setThumbnail(avatarUrl)
		.setDescription(description);
	return repoEmbed;
};
