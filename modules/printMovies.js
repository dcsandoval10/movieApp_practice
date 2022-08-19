const printMovies = (data, container) => {
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

    data.forEach( movie => {

        const { title, poster_path, vote_average, overview} = movie;

        const div = document.createElement('div')
        div.classList.add('movie');
        div.innerHTML =
        `
            <img src="${IMG_PATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="green">9.8</span>
            </div>
            <div class="overview">
                <h3>${overview}</h3>
                
            </div>  
        `
        container.appendChild(div)      
        
    });

   
};

export default printMovies