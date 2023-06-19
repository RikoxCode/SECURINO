const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Ban an user from the discord server'),
	run: async ({interaction}) => {}
}