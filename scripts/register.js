const fs = require('fs');
const path = require('path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('../settings.json');

const commands = [];
const commandFiles = fs.readdirSync(path.resolve('./src/', 'interactions/')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require('../src/interactions/'+`${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );
    } catch (error) {
        console.error(error);
    }
})();