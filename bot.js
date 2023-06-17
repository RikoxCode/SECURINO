require('dotenv').config()
const { Client, IntentsBitField } = require('discord.js');
const { CommandHandler } = require('djs-commander')
const path = require('node:path/win32')

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMembers,
  ],
});

new CommandHandler({
  client,  
  commandsPath: path.join(__dirname, 'commands'),
  eventsPath: path.join(__dirname, 'events'),
  validationsPath: path.join(__dirname, 'validations'),
  testServer: `${process.env.GUILD_ID}`,
})

client.login(process.env.TOKEN);