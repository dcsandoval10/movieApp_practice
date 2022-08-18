import getData from "../helpers/getData.js"
import printMovies from "../modules/printMovies.js";

const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

document.addEventListener('DOMContentLoaded', async() => {
    const movies = await getData(url)
    console.log(movies)
    printMovies( movies, main)
})

