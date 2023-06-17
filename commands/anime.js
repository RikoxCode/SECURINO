const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('anime')
		.setDescription('Replies with an anime'),
	run: async ({interaction}) => {
    const { getRandom, getSearch, getTopTen } = require("../src/API-query.js");
    const subcommand = args.shift().toLowerCase();
    const authorName = message.author;
    
    let request;
    let anime;
    let genres = "";
  
  
    console.log("animes command executing")
  
    try {
      interaction.args.forEach((letter) => {
        if (letter === interaction.args[0]) return;
        request += letter + " ";
      });
    
      switch (subcommand) {
        case "search":
          anime = await getSearch({ query: query });
          break;
    
        case "topten":
          anime = await getTopTen();
          break;
    
        case "random":
          anime = await getRandom();
          break;
    
        default:
          break;
      }
    
      anime = anime.data
    
      if(Array.isArray(anime.genres)){
        anime.genres.forEach(genre => {
          if(genre === undefined) return;
          genres += genre.name + ", "
        })
      }else{
        genres = anime.genres.name
      }
    
      embed = new interaction.EmbedBuilder()
        .setColor("Blue")
        .setTitle(`${anime.title}`)
        .setDescription(`${anime.synopsis}`)
        .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: "Raiting", value: `${anime.score}`, inline: true },
          { name: "Episoden", value: `The anime has ${anime.episodes} episode(s)`, inline: true },
          { name: "Status", value: `${anime.status}`, inline: true },
        )
        .addFields({ name:"Genres", value:`${genres}` })
        .setImage(`${anime.images.jpg.large_image_url}`)
        .setTimestamp();
    
      client.users.send(authorName.id, { embeds: [embed] });
    } catch (error) {
      console.log(error)
    }
	},
};