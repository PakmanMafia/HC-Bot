const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gh')
        .setDescription('Replies with GitHub information')
        .addSubcommand(subcommand =>
            subcommand
                .setName('release')
                .setDescription('Replies with the latest release'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('repo')
                .setDescription('Replies with the public repository link'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('author')
                .setDescription(`Replies with the author's GH`)),
    execute(interaction) {

        // Don't judge me for this command, it's a very useful tester with low latency :P
        interaction.reply('Pong!');

        // console.log(interaction.commandId); // [Interaction commandID]
    }
}