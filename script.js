const img = document.querySelector("img");

const button = document.querySelector("#refresh_button");

const input = document.querySelector("#search_field");

async function updatePicture(search) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=RlxzmTHnX1GG2aus3Yx9bWB6fJ6hmGqE&s=${search}`,
      { mode: "cors" }
    );
    const responseJson = await response.json();
    img.src = responseJson.data.images.original.url;
  } catch (error) {
    console.log(error);
    input.value = "No results!";
    img.src =
      "https://media0.giphy.com/media/zLCiUWVfex7ji/giphy.gif?cid=c9074619olsqnjmnmru4jlukyt6jd4uijd4bq119jdopqbcb&ep=v1_gifs_translate&rid=giphy.gif&ct=g";
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  updatePicture(input.value);
});
