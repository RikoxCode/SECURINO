const { SlashCommandBuilder, MessageEmbed, MessageMentions } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kill")
    .setDescription("Dieser Befehl tötet deinen Gegner!")
    .addUserOption((option) =>
      option
        .setName("spieler")
        .setDescription("Der zu tötende Spieler")
        .setRequired(true)
    ),
  run: async ({ interaction }) => {

    const { EmbedBuilder } = require('discord.js')

    const author = interaction.user;
    const enemy = interaction.options.getUser("spieler");

    // Erstellen der Embedded-Nachricht
    const embed = new EmbedBuilder()
      .setColor("#ff0000")
      .setTitle("Kill-Bericht")
      .setDescription(`${author} hat ${enemy} gekillt`)
      .setTimestamp();

    // Erwähnen der Benutzer in der Embedded-Nachricht
    embed.setDescription(`${author} hat ${enemy.toString()} gekillt`);

    // Senden der Embedded-Nachricht als Antwort
    interaction.reply({ embeds: [embed] });
  },
};
