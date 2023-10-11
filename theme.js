const toggleTheme = document.getElementById("toggle-theme");
const bodyTag2 = document.getElementById("bodytag");

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  bodyTag2.classList.add("dark");
} else {
  bodyTag2.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

toggleTheme.addEventListener("change", (event) => {
  console.log("works");
  bodyTag2.classList.toggle("dark");
});
