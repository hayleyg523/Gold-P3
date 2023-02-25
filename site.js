/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/

const vue_app = Vue.createApp({
  // This automatically imports your movies.json file and puts it into
  //   the variable: movies
  created() {
    fetch("movies.json")
      .then((response) => response.json())
      .then((json) => {
        this.movies = json;
      });
  },
  data() {
    return {
      // This holds your movies.json data.
      movies: [
        {
          id: 1,
          title: "The Shawshank Redemption",
          iscore: 9.3,
          rating: "R",
          runtime: 142,
          released: [1994, 10, 14],
          country: "USA",
          posters: [
            "img/shawshank.jpg",
            "img/shawshank2.jpg",
            "img/shawshank3.jpg",
          ],
          imdb: "http://www.imdb.com/title/tt0111161",
          website: "https://www.facebook.com/ShawshankRedemptionFilm",
          likes: 1021,
          dislikes: 122,
          posterindex: 0,
        },
        {
          id: 2,
          title: "The Godfather",
          iscore: 9.2,
          rating: "R",
          runtime: 175,
          released: [1972, 3, 24],
          country: "USA",
          posters: [
            "img/godfather.jpg",
            "img/godfather_2.jpg",
            "img/godfather_3.jpg",
          ],
          imdb: "http://www.imdb.com/title/tt0068646",
          website: "https://www.facebook.com/thegodfather",
          likes: 928,
          dislikes: 109,
          posterindex: 0,
        },
        {
          id: 3,
          title: "The Godfather: Part II",
          iscore: 9.0,
          rating: "R",
          runtime: 202,
          released: [1974, 12, 20],
          country: "USA",
          posters: ["img/godfather2.jpg", "img/godfather2_2.jpg"],
          imdb: "http://www.imdb.com/title/tt0071562",
          website: "https://www.facebook.com/thegodfather",
          likes: 855,
          dislikes: 99,
          posterindex: 0,
        },
        {
          id: 4,
          title: "The Dark Knight",
          iscore: 8.9,
          rating: "PG-13",
          runtime: 152,
          released: [2008, 7, 18],
          country: "USA",
          posters: ["img/darkknight.jpg", "img/darkknight2.jpg"],
          imdb: "http://www.imdb.com/title/tt0468569",
          website: "http://www.42entertainment.com/work/whysoserious",
          likes: 828,
          dislikes: 127,
          posterindex: 0,
        },
        {
          id: 5,
          title: "Schindler's List",
          iscore: 8.9,
          rating: "R",
          runtime: 195,
          released: [1993, 11, 30],
          country: "USA",
          posters: ["img/schindlerslist.jpg"],
          imdb: "http://www.imdb.com/title/tt0108052",
          website: "https://www.uphe.com/schindlers-list",
          likes: 812,
          dislikes: 101,
          posterindex: 0,
        },
      ],
      /* ADDITIONAL VARIABLES FOR STEP 3 */
      title: "IMDB + Hayley's Top 8 Movies",
      owner: "Hayley",
      github: "https://github.com/hayleyg523/Movie-Posters.git",
    };
  },
  methods: {
    /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
  },
});

vue_app.mount("#vue_app");
