const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
      .setName('your_command_name')
      .setDescription('command_description'),
    run: async ({ interaction }) => {
        
    }
}