const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks a user from the server'),
	run: async ({ interaction }) => {
		// Check if the user has the necessary permissions to kick members
		if (!interaction.member.permissions.has("KICK_MEMBERS")) {
			return interaction.reply({
				content: "You don't have the permissions to use this command.",
				ephemeral: true
			});
		}

		// Get the mentioned user from the command's options
		const user = interaction.options.getMember("user");

		// Check if a user was mentioned
		if (!user) {
			return interaction.reply({
				content: "Please mention the user you want to kick.",
				ephemeral: true
			});
		}

		// Kick the user
		try {
			await user.kick();
			return interaction.reply(`${user.user.tag} has been kicked from the server.`);
		} catch (error) {
			console.error("Error occurred while kicking a user:", error);
			return interaction.reply({
				content: "An error occurred while trying to kick the user.",
				ephemeral: true
			});
		}
	},
	modOnly: true
};
