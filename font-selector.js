const fontSelector = document.getElementById("font-selector");
const bodyTag = document.getElementById("bodytag");

fontSelector.addEventListener("change", (event) => {
  if (fontSelector.value === "Serif") {
    bodyTag.classList.remove("font-mono");
    bodyTag.classList.remove("font-sans");
    bodyTag.classList.add("font-serif");
    console.log("serif");
  } else if (fontSelector.value === "Sans serif") {
    bodyTag.classList.remove("font-mono");
    bodyTag.classList.remove("font-serif");
    bodyTag.classList.add("font-sans");
    console.log("Sans serif");
  } else if (fontSelector.value === "Mono") {
    bodyTag.classList.remove("font-sans");
    bodyTag.classList.remove("font-serif");
    bodyTag.classList.add("font-mono");
    console.log("Mono");
  }
});
