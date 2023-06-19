require("dotenv").config();

const isModerator = (interaction) => {
  return interaction.member.roles.cache.has(process.env.MOD_ROLE_ID);
};

module.exports = (interaction, commandObj) => {
  if (commandObj.modOnly && !isModerator(interaction)) {
    interaction.reply("This command is only for Moderators!");
    return true;
  }
};
