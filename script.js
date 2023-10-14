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

    for (const movie of allMovies) {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        movieDiv.innerHTML = `
            ${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched ? "true" : "false"}
        `;
        movieListContainer.appendChild(movieDiv);
    }

    const totalMovies = document.createElement("p");
    totalMovies.innerHTML = `You have ${allMovies.length} movies in total`;
    movieListContainer.appendChild(totalMovies);
}

let changeWatched = (title) => {
    for (const movie of allMovies) {
        if (movie.title === title) {
            movie.haveWatched = !movie.haveWatched;
        }
    }
    updateMoviesDisplay();
}

let highRatings = (rating) => {
    const highRatedMovies = allMovies.filter(movie => movie.rating > rating);
    const matches = highRatedMovies.length;

    for (const movie of highRatedMovies) {
        console.log(`${movie.title} has a rating of ${movie.rating}`);
    }

    console.log(`In total, there are ${matches} matches`);
}

// Function to display the desired output on the web page
let printMovies = () => {
    updateMoviesDisplay();
}

// Test code
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x, y, z);

console.log("----------------");
console.log("running program......");
console.log("----------------");

// Display movies and other information on the web page
printMovies();

let movie1 = new Movie("Parasite", 2, false);

console.log("----------------");
addMovie(movie1);
console.log("----------------");

// Change the watched status of a movie and display the updated list
changeWatched("Spiderman");
console.log("----------------");

printMovies();

console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();

console.log("----------------");

// Display movies with a rating higher than 3.5
highRatings(3.5);
