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
    const gifLink = require('../../src/giflink.json')

    const author = interaction.user;
    const enemy = interaction.options.getUser("spieler");

    // Erstellen der Embedded-Nachricht
    let gif;
    do {
      gif =
        gifLink.kill[Math.floor(Math.random(0, gifLink.kill.length / 10) * 10)];
    } while (gif === undefined);
    
    const embed = new EmbedBuilder()
      .setColor("#0099ff")
      .setDescription(`p`)
      .setImage(gif.value)
      .setTimestamp();

    // Erwähnen der Benutzer in der Embedded-Nachricht
    embed.setDescription(`${author} hat ${enemy.toString()} gekillt`);

    // Senden der Embedded-Nachricht als Antwort
    interaction.reply({ embeds: [embed] });
  },
};
