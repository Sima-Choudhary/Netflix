
//api key from TMDB

const api = "api_key=0d7fcb538472b4a248392fdaf9ae8532";

//const base_url of the site
const base_url ="https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";      //for original use :w185 


//request for movies data
const requests = {

    fetchTrending:`${base_url}/trending/all/week?${api}&language=en-us`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,

};


//used to truncate the string

function truncate(str ,n) {
    return str?.length > n ? str.substr(0, n-1) + "...." : str;
}

//banner
fetch(requests.fetchNetflixOriginals)
.then((res) => res.json())

.then((data) =>{
    //every refresh the movie will change

    const setMovie = 
    data.results[Math.floor(Math.random()* data.results.length -1 )];

    let banner = document.getElementById("banner");
    let banner_title = document.getElementById("banner-title");
    let banner_desc = document.getElementById("banner-description");
    

    banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
    banner_desc.innerText = truncate(setMovie.overview,150);
    banner_title.innetText = setMovie.name;    
});
//movie rows
fetch(requests.fetchNetflixOriginals)
    .then((res) => res.json())

    .then((data) =>{
        const headrow =document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        row.classList.add("netflixrow");

        headrow.appendChild(row);


        const title = document.createElement("h2");

        title.className = "row-title";
        title.innerText = "NETFLIX ORIGNALS" ;

        row.appendChild(title);

        const row_poster = document.createElement("div");
        row_poster.className = "row-poster";
        row.appendChild(row_poster);

        data.results.forEach((movie) => {
            const poster = document.createElement("img");
            poster.className = "row-posterLarge";

            let s = movie.name.replace(/\s+/g,"");

            poster.id = s;
            poster.src = img_url + movie.poster_path;
            row_poster.appendChild(poster);
        });

    });

    // Top rated

    fetch(requests.fetchTrending)
        .then((res) => res.json())


        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");

            row.className = "row";
            headrow.appendChild(row);

           

            const title =document.createElement("h2");

            title.className = "row-title";
            title.innerText = "Top Rated";


             row.appendChild(title);

            const row_poster = document.createElement("div");
            row_poster.className = "row-poster";
            row.appendChild(row_poster);


            data.results.forEach((movie) => {

                const poster = document.createElement("img");
                poster.className = "row-posterLarge";
    
                let s2 = movie.id;
    
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_poster.appendChild(poster);
            });
    
        });


    //Action 

    fetch(requests.fetchActionMovies)
    .then((res) => res.json())


    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title =document.createElement("h2");

        title.className = "row-title";
        title.innerText = "Action movies" ;

        row.appendChild(title);

        const row_poster = document.createElement("div");
        row_poster.className = "row-poster";
        row.appendChild(row_poster);


        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row-posterLarge";

            let s3 = movie.id;

            poster.id = s3;
            poster.src = img_url + movie.backdrop_path;
            row_poster.appendChild(poster);
        });

    });

    //comidy

    fetch(requests.fetchComedyMovies)
        .then((res) => res.json())


        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");

            row.className = "row";
            headrow.appendChild(row);

           

            const title =document.createElement("h2");

            title.className = "row-title";
            title.innerText = "Comedy Movies" ;

             row.appendChild(title);

            const row_poster = document.createElement("div");
            row_poster.className = "row-poster";
            row.appendChild(row_poster);


            data.results.forEach((movie) => {

                const poster = document.createElement("img");
                poster.className = "row-posterLarge";
    
                let s2 = movie.id;
    
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_poster.appendChild(poster);
            });
    
        });

    //Horror

    fetch(requests.fetchHorrorMovies)
        .then((res) => res.json())


        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");

            row.className = "row";
            headrow.appendChild(row);

           

            const title =document.createElement("h2");

            title.className = "row-title";
            title.innerText = "Horror Movies" ;

             row.appendChild(title);

            const row_poster = document.createElement("div");
            row_poster.className = "row-poster";
            row.appendChild(row_poster);


            data.results.forEach((movie) => {

                const poster = document.createElement("img");
                poster.className = "row-posterLarge";
    
                let s2 = movie.id;
    
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_poster.appendChild(poster);
            });
    
        });

        //Romance

        fetch(requests.fetchRomanceMovies)
        .then((res) => res.json())


        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");

            row.className = "row";
            headrow.appendChild(row);

           

            const title =document.createElement("h2");

            title.className = "row-title";
            title.innerText = "Romance Movies" ;

             row.appendChild(title);

            const row_poster = document.createElement("div");
            row_poster.className = "row-poster";
            row.appendChild(row_poster);


            data.results.forEach((movie) => {

                const poster = document.createElement("img");
                poster.className = "row-posterLarge";
    
                let s2 = movie.id;
    
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_poster.appendChild(poster);
            });
    
        });




    //Documentary

    fetch(requests.fetchDocumentaries)
    .then((res) => res.json())


    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title =document.createElement("h2");

        title.className = "row-title";
        title.innerText = "Documentation" ;

        row.appendChild(title);

        const row_poster = document.createElement("div");
        row_poster.className = "row-poster";
        row.appendChild(row_poster);


        data.results.forEach((movie) => {

            const poster = document.createElement("img");
            poster.className = "row-posterLarge";

            let s4 = movie.id;

            poster.id = s4;
            poster.src = img_url + movie.backdrop_path;
            row_poster.appendChild(poster);
        });

    });











