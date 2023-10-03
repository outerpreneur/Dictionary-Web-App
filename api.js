// Global variables

const searchInput = document.getElementById("search-input");
const formSearch = document.getElementById("form-search");
const searchIcon = document.getElementById("search-icon");
const searchQuery = document.getElementById("query");
const phoneticQuery = document.getElementById("phonetic");
const phoneticSound = document.getElementById("phonetic-sound");
const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const synonyms = document.getElementById("synonyms");

// triggers

formSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  searchQuery.innerText = capitalizeFirstLetter(searchInput.value);
  fetchDefinitions();
  fetchVerbs();
});

searchIcon.addEventListener("click", (event) => {
  event.preventDefault();
  fetchDefinitions();
});

// functions

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function fetchDefinitions(definition) {
  const searchInputValueString = searchInput.value.toString();
  const completeUrl = baseUrl + searchInputValueString;
  fetch(completeUrl)
    .then((response) => response.json())
    .then((data) => {
      phoneticQuery.innerText = data[0].phonetic;
      const wordArr = data[0].meanings;
      const nounElement = document.getElementById("definitions-list");
      for (arr of wordArr) {
        // console.log(arr.definitions[0].definition);
        const definitionParagraph = document.createElement("li");
        definitionParagraph.textContent = arr.definitions[0].definition;
        nounElement.appendChild(definitionParagraph);
        definitionParagraph.classList.add("my-3");
      }
      synonyms.innerHTML = data[0].meanings[0].synonyms;
      document.querySelector("form").reset();
    });
}

function fetchVerbs(verbs) {
  const searchInputValueString = searchInput.value.toString();
  const completeUrl = baseUrl + searchInputValueString;
  fetch(completeUrl)
    .then((response) => response.json())
    .then((data) => {
      const verbArray = data[0].meanings;
      const verbsList = document.getElementById("verbs-list");
      for (verb of verbArray) {
        const verbParagraph = document.createElement("li");
        verbParagraph.textContent = verb.definitions[1].definition;
        verbsList.appendChild(verbParagraph);
        verbParagraph.classList.add("my-3");
      }
    });
}
