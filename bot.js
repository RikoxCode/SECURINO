const requiredModules = ['dotenv', 'discord.js', 'djs-commander', 'node:path', 'fs', 'colors', 'express'];
const missingModules = [];

requiredModules.forEach(moduleName => {
  const startTime = performance.now();
  try {
    require.resolve(moduleName);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`✅ Module is installed: ${moduleName} (${executionTime.toFixed(2)} ms)`);
  } catch (error) {
    missingModules.push(moduleName);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`⛔️ Module isn't installed: ${moduleName} (${executionTime.toFixed(2)} ms)`);
  }
});

const colors = require('colors')

if (missingModules.length === 0) {
  require('dotenv').config()
  const { Client, IntentsBitField, Colors } = require('discord.js');
  const { CommandHandler } = require('djs-commander')
  const path = require('node:path/win32')
  const fs = require('fs')

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
} else {
  console.log(colors.bgRed(`\n\n⚠️  Not all Node_Modules are installed! Modules that not installed: ${missingModules.length}`))
  console.log(colors.bgRed(`⚠️  Please execute 'npm i ${missingModules[0]}'`))
}