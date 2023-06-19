const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user from the Discord server'),
  run: async ({ interaction }) => {
    // Check if the user has the necessary permissions to ban members
    if (!interaction.member.permissions.has('BAN_MEMBERS')) {
      return interaction.reply({
        content: "You don't have the permissions to use this command.",
        ephemeral: true
      });
    }

    // Get the mentioned user from the command's options
    const user = interaction.options.getMember('user');

    // Check if a user was mentioned
    if (!user) {
      return interaction.reply({
        content: "Please mention the user you want to ban.",
        ephemeral: true
      });
    }

    // Ban the user
    try {
      await user.ban();
      return interaction.reply(`${user.user.tag} has been banned from the server.`);
    } catch (error) {
      console.error("Error occurred while banning a user:", error);
      return interaction.reply({
        content: "An error occurred while trying to ban the user.",
        ephemeral: true
      });
    }
  }
};
