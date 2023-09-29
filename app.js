const searchInput = document.getElementById("search-input");
const formSearch = document.getElementById("form-search");
const searchQuery = document.getElementById("query");
const phoneticQuery = document.getElementById("phonetic");
const phoneticSound = document.getElementById("phonetic-sound");
const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

formSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  searchInputValueString = searchInput.value.toString();
  searchQuery.innerText = capitalizeFirstLetter(searchInput.value);
  const completeUrl = baseUrl + searchInputValueString;

  fetch(completeUrl)
    .then((response) => response.json())
    .then((data) => {
      phoneticQuery.innerText = data[0].phonetic;
      const wordArr = data[0].meanings;
      const nounElement = document.getElementById("definitions-list");
      for (arr of wordArr) {
        console.log(arr.definitions[0].definition);
        const definitionParagraph = document.createElement("li");
        definitionParagraph.textContent = arr.definitions[0].definition;
        definitionParagraph.classList.add("my-3");
        nounElement.appendChild(definitionParagraph);
      }
      document.querySelector("form").reset();
    });
});

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// phoneticSound.addEventListener("click", (event) => {
//   const searchInputValueString = searchInput.value.toString();
//   const completeUrl = baseUrl + searchInputValueString;
//   // fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dog")
//   //   .then((response) => response.json())
//   //   .then((data) => {
//   // const audioElement = data[0].phonetics[2].audio;
//   const audioUrl =
//     "https://api.dictionaryapi.dev/media/pronunciations/en/dog-us.mp3";
//   phoneticSound.src = audioUrl;
//   phoneticSound.play();
//   // });
// });
