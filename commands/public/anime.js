const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("anime")
    .setDescription("Replies with an anime")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("search")
        .setDescription("Search an anime on MaL")
        .addStringOption((option) =>
          option
            .setName("animename")
            .setDescription(
              "Anime name to search on mal"
            )
            .setRequired(false)
        )
        .addStringOption((option) =>
          option
            .setName("genre")
            .setDescription(
              "Anime genre to search on mal"
            )
            .setRequired(false)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("topten")
        .setDescription("Out of work!")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("random")
        .setDescription("Replies with an random anime")
    ),
  run: async ({ interaction }) => {
    const { getRandom, getSearch, getTopTen } = require("../src/jikan.js");
    const exeRandom = require('../src/anime_commands/anime.random.js')
    const exeSearch = require('../src/anime_commands/anime.search.js')
    const exeTopTen = require('../src/anime_commands/anime.topten.js')
    const { EmbedBuilder } = require("discord.js");
    const authorName = interaction.user;
    const subcommand = interaction.options.getSubcommand();

    let anime;
    let genres = "";

    

    try {
      switch (subcommand) {
        case "search":
          console.log("anime search command executing");
          const animeName = interaction.options.get("animename");
          const genre = interaction.options.get("genre");
          const genreID = getGenre(genre);

          anime = await getSearch({ query: animeName, genre: genreID });

          exeSearch({ anime: anime.data, interaction: interaction, EmbedBuilder: EmbedBuilder})

          break;

        // case "topten":
        //   console.log("anime topten command executing");
        //   anime = await getTopTen();
        //   break;

        case "random":
          console.log("anime random command executing");
          anime = await getRandom();
          exeRandom({ anime: anime.data, interaction: interaction, EmbedBuilder: EmbedBuilder})
          break;

        default:
          console.log("anime random command executing");
          anime = await getRandom();
          exeRandom({ anime: anime.data, interaction: interaction, EmbedBuilder: EmbedBuilder})
          break;
      }

    } catch (error) {
      console.log(error);
    }

    function getGenre(genre) {
      let genreID;

      switch (genre) {
        case "Action":
          genreID = 1;
          break;

        case "Adventure":
          genreID = 2;
          break;

        case "Cars":
          genreID = 3;
          break;

        case "Comedy":
          genreID = 4;
          break;

        case "Avante Garde":
          genreID = 5;
          break;

        case "Demons":
          genreID = 6;
          break;

        case "Mystery":
          genreID = 7;
          break;

        case "Drama":
          genreID = 8;
          break;

        case "Ecchi":
          genreID = 9;
          break;

        case "Fantasy":
          genreID = 10;
          break;

        case "Game":
          genreID = 11;
          break;

        case "Hentai":
          genreID = 12;
          break;

        case "Historical":
          genreID = 13;
          break;

        case "Horror":
          genreID = 14;
          break;

        case "Kids":
          genreID = 15;
          break;

        case "Martial Arts":
          genreID = 16;
          break;

        case "Mecha":
          genreID = 17;
          break;

        case "Music":
          genreID = 18;
          break;

        case "Parody":
          genreID = 19;
          break;

        case "Samurai":
          genreID = 20;
          break;

        case "Romance":
          genreID = 21;
          break;

        case "School":
          genreID = 22;
          break;

        case "Sci Fi":
          genreID = 23;
          break;

        case "Shoujo":
          genreID = 24;
          break;

        case "Girls Love":
          genreID = 25;
          break;

        case "Shounen":
          genreID = 26;
          break;

        case "Boys Love":
          genreID = 27;
          break;

        case "Space":
          genreID = 28;
          break;

        case "Sports":
          genreID = 29;
          break;

        case "Super Power":
          genreID = 30;
          break;

        case "Vampire":
          genreID = 31;
          break;

        case "Harem":
          genreID = 32;
          break;

        case "Slice Of Life":
          genreID = 33;
          break;

        case "Supernatural":
          genreID = 34;
          break;

        case "Military":
          genreID = 35;
          break;

        case "Police":
          genreID = 36;
          break;

        case "Psychological":
          genreID = 37;
          break;

        case "Suspense":
          genreID = 38;
          break;

        case "Seinen":
          genreID = 39;
          break;

        case "Josei":
          genreID = 40;
          break;

        case "Award Winning":
          genreID = 41;
          break;

        case "Gourmet":
          genreID = 42;
          break;

        case "Work Life":
          genreID = 43;
          break;

        case "Erotica":
          genreID = 44;
          break;

        default:
          break;
      }

      return genreID;
    }
  },
};
