"use strict";

const img = document.querySelector("img");

const button = document.querySelector("#refresh_button");

const input = document.querySelector("#search_field");

button.addEventListener("click", (e) => {
  e.preventDefault();
  updatePicture(input.value);
  return;
});

function updatePicture(search) {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=RlxzmTHnX1GG2aus3Yx9bWB6fJ6hmGqE&s=" +
      search,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(function (error) {
      console.log("No results!");
      input.value = "No results!";
      img.src =
        "https://media0.giphy.com/media/zLCiUWVfex7ji/giphy.gif?cid=c9074619olsqnjmnmru4jlukyt6jd4uijd4bq119jdopqbcb&ep=v1_gifs_translate&rid=giphy.gif&ct=g";
    });

  return;
}
