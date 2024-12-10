/* This code is adapted from this website https://codingartistweb.com/2023/09/random-choice-picker/ */
let pickRandomMovie = () => {
  const movieChoicesInput = document.getElementById("movieChoices");
  const movieResultElement = document.getElementById("movieResult");
  const movieChoices = movieChoicesInput.value.split(",").map((choice) => choice.trim());

  if (movieChoices.length === 0 || (movieChoices.length === 1 && movieChoices[0] === "")) {
    movieResultElement.textContent = "Please Enter Movie Choices";
  } else {
    const randomIndex = Math.floor(Math.random() * movieChoices.length);
    const randomMovie = movieChoices[randomIndex];
    movieResultElement.textContent = `Random Movie: ${randomMovie}`;
  }
};

let pickRandomFood = () => {
  const foodChoicesInput = document.getElementById("foodChoices");
  const foodResultElement = document.getElementById("foodResult");
  const foodChoices = foodChoicesInput.value.split(",").map((choice) => choice.trim());

  if (foodChoices.length === 0 || (foodChoices.length === 1 && foodChoices[0] === "")) {
    foodResultElement.textContent = "Please Enter Food Choices";
  } else {
    const randomIndex = Math.floor(Math.random() * foodChoices.length);
    const randomFood = foodChoices[randomIndex];
    foodResultElement.textContent = `Random Food: ${randomFood}`;
  }
};

const pickMovieButton = document.getElementById("pickMovieButton");
pickMovieButton.addEventListener("click", pickRandomMovie);

const pickFoodButton = document.getElementById("pickFoodButton");
pickFoodButton.addEventListener("click", pickRandomFood);

let saraImage = document.getElementById('sara');

saraImage.addEventListener('mouseenter', function() {
    saraImage.src = 'images/logo.png';
});

saraImage.addEventListener('mouseleave', function() {
    saraImage.src = 'images/sara.png';
});