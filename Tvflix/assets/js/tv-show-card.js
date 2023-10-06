// tv-show-card.js

import { imageBaseURL, genreList } from "./api.js"; // Make sure to import the necessary functions and variables

// Function to create a TV show card
export function createTVShowCard(tvShow) {
  const {
    name,
    poster_path,
    first_air_date,
    genre_ids,
    overview,
    vote_average,
    id
  } = tvShow;

  const card = document.createElement("div");
  card.classList.add("card"); // Customize the CSS class as needed for TV show cards

  card.innerHTML = `
    <img src="${imageBaseURL}w342${poster_path}" alt="${name}" class="card-image" loading="lazy">
    <div class="card-content">
      <h2 class="card-title">${name}</h2>
      <p class="card-date">${first_air_date ? first_air_date.split("-")[0] : "Not Released"}</p>
      <p class="card-genre">${genreList.asString(genre_ids)}</p>
      <p class="card-overview">${overview}</p>
      <p class="card-rating">Rating: ${vote_average.toFixed(1)}</p>
      <a href="./tv-detail.html" class="card-button" onclick="getTVShowDetail(${id})">View Details</a>
    </div>
  `;

  return card;
}
