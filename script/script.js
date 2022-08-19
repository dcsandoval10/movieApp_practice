import getData from "../helpers/getData.js"
import printMovies from "../modules/printMovies.js";
import buscar from "../modules/buscar.js";

const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

const main = document.getElementById('main');
console.log(main)
const form = document.getElementById('form');
let movies;

document.addEventListener('DOMContentLoaded', async() => {
    movies = await getData(url)
    
    printMovies( movies, main)
    

});
console.log(movies)


form.addEventListener( 'submit', e => {
    e.preventDefault()
    const value = document.getElementById('search').value;
    const results = buscar (value, movies, main)
    printMovies(results, main)
});