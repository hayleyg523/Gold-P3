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
      movies: [],
      /* ADDITIONAL VARIABLES FOR STEP 3 */
      title: "IMDB + Hayley's Top 8 Movies",
      owner: "Hayley",
      github: "https://github.com/hayleyg523/Movie-Posters.git",
    };
  },
  methods: {
    /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
    /*Function getMonthText to convert numeric month into text month and format day and year in USA date order*/
    getMonthText(dateArray) {
      let month = " ";
      switch (dateArray[1]) {
        case 1:
          monthName = "January";
          break;
        case 2:
          monthName = "February";
          break;
        case 3:
          monthName = "March";
          break;
        case 4:
          monthName = "April";
          break;
        case 5:
          monthName = "May";
          break;
        case 6:
          monthName = "June";
          break;
        case 7:
          monthName = "July";
          break;
        case 8:
          monthName = "August";
          break;
        case 9:
          monthName = "September";
          break;
        case 10:
          monthName = "October";
          break;
        case 11:
          monthName = "November";
          break;
        case 12:
          monthName = "December";
      }

      return monthName + " " + dateArray[2] + "," + " " + dateArray[0];
    },
    /* if statement to shuffle through the images for each movie*/
    posterClick(index) {
      if (
        this.movies[index].posterindex >=
        this.movies[index].posters.length - 1
      ) {
        this.movies[index].posterindex = 0;
      } else {
        this.movies[index].posterindex++;
      }
    },
    /* function to change minutes to a string of hours and minutes*/
    timeText(minutes){
      var h = Math.trunc(minutes/60);
      var min = minutes % 60;
      return h + 'h' + " " + min + "m";
    }
  },
});

vue_app.mount("#vue_app");

