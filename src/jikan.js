function getSearch(params) {
    const Fetch = async () => {
      let respons = await fetch(
        `https://api.jikan.moe/v4/anime?q=${params.query}&genre=${params.genre}&page=${params.page}`
      ).then((res) => res.json());
      return respons;
    };
    if(Array.isArray(Fetch())) return Fetch()[0]
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
      const response = await fetch(`https://api.jikan.moe/v4/random/anime`);
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
  