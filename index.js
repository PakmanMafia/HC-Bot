const { Client, Intents } = require('discord.js');
const {token} = require('./config.json');

const client = new Client({
    intents:[
        Intents.FLAGS.GUILDS
    ]
});

client.once('ready', () => {
        
})

client.login(token);