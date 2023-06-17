function getSearch(params) {
    const Fetch = async () => {
      let respons = await fetch(
        `https://api.jikan.moe/v4/anime?q=${params.query}`
      ).then((res) => res.json());
  
      return respons;
    };
  
    return Fetch();
  }
  
  function getTopTen() {
    const Fetch = async () => {
      let respons = await fetch(`https://api.jikan.moe/v4/top/anime`).then(
        (res) => res.json()
      );
  
      respons = respons.data.slice(0, 10);
      return respons;
    };
  
    return Fetch();
  }
  
  function getRandom() {
    const Fetch = async () => {
      const mal_id = Math.floor(Math.random() * 1000);
      const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`);
      const data = await response.json();
      return data;
    };
    return Fetch();
  }
  
  module.exports = {
    getSearch,
    getTopTen,
    getRandom,
  };
  