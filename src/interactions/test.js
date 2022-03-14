const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    execute(interaction) {

        // Don't judge me for this command, it's a very useful tester with low latency :P
        interaction.reply('Pong!');

        // console.log(interaction.commandId); // [Interaction commandID]
    }
}