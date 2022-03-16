const { SlashCommandBuilder } = require("@discordjs/builders");
const { exec } = require("child_process");
const apiLink = "https://api.github.com/repos/Soucouyant/HC-Bot";

module.exports = {
	data: new SlashCommandBuilder()
		.setName("gh")
		.setDescription("Replies with GitHub information")
		.addSubcommand((subcommand) =>
			subcommand
				.setName("release")
				.setDescription("Replies with the latest release")
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName("repo")
				.setDescription("Replies with the public repository link")
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName("author")
				.setDescription(`Replies with the author's GH`)
		),
	async execute(interaction) {
		switch (interaction.options.getSubcommand()) {
			case "release":
				break;
			case "repo":
				// Requirements
				const repoLinkFind = require("../REST-requests/request-repoLink");
				const repoNameFind = require("../REST-requests/request-repoName");
				const colorGen = require("../embeds/functions/randomColor");
				const embed = require("../embeds/gh-repoEmbed");
				const getAvatarUrl = require("../REST-requests/request-authorAvatar");
				const getRepoDescription = require("../REST-requests/request-repoDescription");
				const getAuthorName = require("../REST-requests/request-authorName");
				const getAuthorLink = require("../REST-requests/request-authorLink");
				const rokaThumbnail =
					"https://cdn.discordapp.com/attachments/704672484368187432/953392094020501544/AACB1C6C-5475-4230-B12E-A6862F8E91C6.jpg";

				// Invoking Functions
				const repoName = await repoNameFind(apiLink);
				const repoLink = await repoLinkFind(apiLink);
				const avatarUrl = await getAvatarUrl(apiLink);
				const repoDescription = await getRepoDescription(apiLink);
				const authorName = await getAuthorName(apiLink);
				const authorLink = await getAuthorLink(apiLink);
				const color = await colorGen();
				const repoEmbed = await embed(
					repoLink,
					color,
					repoName,
					rokaThumbnail,
					repoDescription,
					authorName,
					avatarUrl,
					authorLink
				);

				// Return
				interaction.reply({ embeds: [repoEmbed] });

				break;
			case "author":
				exec(
					"node ./src/REST-requests/author.js",
					(error, stdout, stderr) => {
						if (error) {
							console.log(`error: ${error.message}`);
							return;
						}
						if (stderr) {
							console.log(`stderr: ${stderr}`);
							return;
						}
						interaction.reply(stdout);
					}
				);
				break;
			default:
				interaction.reply("error");
		}
	},
};
