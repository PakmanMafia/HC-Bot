const { MessageEmbed } = require("discord.js");

module.exports = async function (
	repoLink,
	color,
	repoName,
	rokaThumbnail,
	description,
	authorName,
	avatarUrl,
	authorLink
) {
	const repoEmbed = new MessageEmbed()
		.setColor(color)
		.setTitle(repoName)
		.setURL(repoLink)
		.setThumbnail(rokaThumbnail)
		.setDescription(description)
		.setAuthor({
			name: `${authorName}`,
			iconURL: `${avatarUrl}`,
			url: `${authorLink}`,
		});
	return repoEmbed;
};
