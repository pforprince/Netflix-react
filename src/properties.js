const API_KEY = "b1424604d5bec6c9a0fdd2b3623e8b4e";

const movieCategory = {
  upcoming:`movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  trending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  action: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  horror: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  comedy: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  romance: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,

};

export default movieCategory;
