function searchRecipes() {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const recipeSections = document.querySelectorAll("div[id]");

  let found = false;

  recipeSections.forEach((section) => {
    const recipeName = section.querySelector("h3").innerText.toLowerCase();

    if (recipeName.includes(query)) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll to the recipe section
      found = true;
    }
  });

  if (!found) {
    alert(`No recipes found for: ${query}`);
  }
}
