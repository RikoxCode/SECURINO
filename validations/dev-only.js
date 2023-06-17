module.exports = (interaction, commandObj) => {
    if(commandObj.devOnly){
        if(interaction.member.id !== '1234'){
            interaction.reply('This command is only for developers!')
            return true
        }
    }
}