require("dotenv").config();

const isDeveloper = (interaction) => {
  return interaction.member.roles.cache.has(process.env.DEV_ROLE_ID);
};

module.exports = (interaction, commandObj) => {
  if (commandObj.devOnly && !isDeveloper(interaction)) {
    interaction.reply("This command is only for developers!");
    return true;
  }
};
