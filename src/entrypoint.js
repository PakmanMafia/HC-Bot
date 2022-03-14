const fs = require('node:fs');
const path = require('node:path');
const { Client, Intents, Collection, Interaction } = require('discord.js');
const {token} = require('../settings.json');

const client = new Client({
    intents:[
        Intents.FLAGS.GUILDS
    ]
});

client.commands = new Collection();
const commandFiles = fs.readdirSync(path.resolve('./src/', 'interactions/')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require('../src/interactions/'+`${file}`);
    client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({content: 'There was an error executing this command', ephemeral: true});
    }
});


client.once('ready', () => {
    console.log("Ready!")
})

client.login(token);