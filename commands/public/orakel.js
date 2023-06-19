const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
		.setName('orakel')
		.setDescription('Replies with an answer')
        .addStringOption((option) =>
          option
            .setName("your-question")
            .setDescription(
              "Replies with an answer"
            )
            .setRequired(true)
        ),
	run: async ({ interaction }) => {
        const { EmbedBuilder } = require('discord.js')
        const config = require('../../src/orakel/orakel.answers.json')
        const author = interaction.user;
        let answers = config.orakel.answers
        let response
    
        console.log("Orakel command executing")
    
        let request = interaction.options.getString('your-question')
    
        if (response != undefined) {
        response = undefined;
        }
    
        do {
        response = answers[Math.floor(Math.random(0, answers.length / 10) * 10)]
        } while (
        response === undefined ||
        Math.floor(Math.random() * 100) <= response.probability
        );
        const embed = new EmbedBuilder()
            .setColor(response.color)
            .setDescription(`<@${author.id}> hat das Orakel beschworen`)
            .addFields({ name: "Frage", value: request })
            .addFields(response)
            .setTimestamp()
    
        interaction.reply({ embeds: [embed] });
    }
};
  