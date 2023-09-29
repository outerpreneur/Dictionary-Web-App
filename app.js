const searchInput = document.getElementById("search-input");
searchInputValue = searchInput.value;
const formSearch = document.getElementById("form-search");
const searchQuery = document.getElementById("query");
const phoneticQuery = document.getElementById("phonetic");
const phoneticSound = document.getElementById("phonetic-sound");

formSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchInput = document.getElementById("search-input");
  searchInputValue = searchInput.value;
  searchInputValueString = searchInputValue.toString();
  searchQuery.innerText = capitalizeFirstLetter(searchInputValue);

  const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
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
