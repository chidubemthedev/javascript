"use strict";
const addMovieButton = document.getElementById("add-movie-btn");
const searchButton = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // if ('info' in movie) {

    // }
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie) + " - ";

    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text = text + `${key}: ${info[key]}`;
      }
    }

    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    // title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    alert("Hey! Kindly input actual content.");
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === "") {
          this._title = "Default";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title.toUpperCase();
      },
      [extraName]: extraValue,
    },
    id: Math.random().toFixed(2),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  console.log(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  console.log(this);
  const filteredTerm = document.getElementById("filter-title").value;
  renderMovies(filteredTerm);
};

addMovieButton.addEventListener("click", addMovieHandler);
searchButton.addEventListener("click", searchMovieHandler);
