const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('insult')
		.setDescription('If you wanna insult a person, you can use this command'),
	run: async ({ interaction }) => {		

        // Get all guild members
        const guild = interaction.guild;
        const members = guild.members.cache;
    
        const playerList = members.map((member) => member.user.tag);

        console.log(playerList)

        // Get the mentioned user from the command's options
		const user = interaction.options.getMember("user");

        if(!user){
            interaction.reply({
                content: "Please mention the user you want to insult.",
				ephemeral: true
            })
        }

                

	},
	modOnly: true
};
