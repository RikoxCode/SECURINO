module.exports = async function ({ anime, interaction, EmbedBuilder }) {
  genres = anime.genres.name;

  embed = new EmbedBuilder()
    .setColor("Blue")
    .setTitle(`${anime.title}`)
    .setDescription(`${anime.synopsis}`)
    .addFields(
      { name: "\u200B", value: "\u200B" },
      { name: "Raiting", value: `${anime.score}`, inline: true },
      {
        name: "Episoden",
        value: `The anime has ${anime.episodes} episode(s)`,
        inline: true,
      },
      { name: "Status", value: `${anime.status}`, inline: true }
    )
    .addFields({ name: "Genres", value: `${genres}` })
    .setImage(`${anime.images.jpg.large_image_url}`)
    .setTimestamp();

  interaction.client.users.send(interaction.user.id, { embeds: [embed] });
  interaction.reply("Look in your DMs!");
};
