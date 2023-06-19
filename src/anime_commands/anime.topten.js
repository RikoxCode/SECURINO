module.exports = async function ({ anime, interaction, EmbedBuilder }) {
    let temp = [];

    await anime.forEach((anime) => {
        let descriptionArr = anime.synopsis.split(" ");
        let descriptionStr = "";
        for (let i = 0; i <= 10; i++) {
        descriptionStr += " " + descriptionArr[i];
        }
        descriptionStr += "... \u200B" + anime.url;
        temp.push({ name: anime.title, value: descriptionStr });
    });

    

    embed = new EmbedBuilder()
        .setColor("Yellow")
        .setTitle(`Anime Search`)
        .setDescription(`This is an list of the current top ten Animes of Mal.com`)
        .addFields(temp)
        .setTimestamp();

    console.log(authorName);
    interaction.client.users.send(interaction.user.id, { embeds: [embed] });
    interaction.reply("Look in your DMs!");
};
