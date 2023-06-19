const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anime')
		.setDescription('Replies with an anime'),
	run: async ({interaction}) => {}
}