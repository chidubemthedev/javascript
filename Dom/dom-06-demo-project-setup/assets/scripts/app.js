const showModal = document.getElementById("add-modal");
// const showModal = document.querySelector("#add-modal");
const showBackdrop = document.getElementById("backdrop");
const startAddMovie = document.querySelector("header button");
const modalCancelButton = showModal.querySelector(".btn--passive");
const modalAddButton = modalCancelButton.nextElementSibling;
const userInputs = showModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUi = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
  closeMovieDeletionModal();
  updateUi();
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));

  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);
  // confirmDeletionButton.removeEventListener("click", deleteMovie.bind(null, movieId)); // will not work

  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovie.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  showBackdrop.classList.toggle("visible");
};

const closeMovieModal = () => {
  showModal.classList.remove("visible");
};

const showMovieModal = () => {
  showModal.classList.add("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const modalCancelHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert(`Please enter valid values (rating between 1-5).`);
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  updateUi();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

startAddMovie.addEventListener("click", showMovieModal);
showBackdrop.addEventListener("click", backdropClickHandler);
modalCancelButton.addEventListener("click", modalCancelHandler);
modalAddButton.addEventListener("click", addMovieHandler);
