let allMovies = [];
let currentIndex = 0;

class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

let addMovie = (movie) => {
    allMovies.push(movie);
    updateMoviesDisplay();
}

let updateMoviesDisplay = () => {
    const movieListContainer = document.getElementById("movieList");
    movieListContainer.innerHTML = "";

    const movie = allMovies[currentIndex];
    if (movie) {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.innerHTML = `
            <h2>${movie.title}</h2>
            <p>Rating: ${movie.rating}</p>
            <p>Have Watched: ${movie.haveWatched ? "Yes" : "No"}</p>
        `;
        movieListContainer.appendChild(movieDiv);
    }

    const totalMovies = document.createElement("p");
    totalMovies.innerHTML = `Movie ${currentIndex + 1} of ${allMovies.length}`;
    movieListContainer.appendChild(totalMovies);
}

document.getElementById("nextButton").addEventListener("click", () => {
    if (currentIndex < allMovies.length - 1) {
        currentIndex++;
        updateMoviesDisplay();
    }
});

document.getElementById("prevButton").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateMoviesDisplay();
    }
});

// Test code
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x, y, z);

updateMoviesDisplay();

let movie1 = new Movie("Parasite", 2, false);
addMovie(movie1);
