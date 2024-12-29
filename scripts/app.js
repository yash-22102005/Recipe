function searchRecipes() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe-card');
  
    recipes.forEach((recipe) => {
      const title = recipe.querySelector('h3').textContent.toLowerCase();
      const description = recipe.querySelector('p').textContent.toLowerCase();
  
      if (title.includes(query) || description.includes(query)) {
        recipe.style.visibility = 'visible'; // Keep the card visible
        recipe.style.display = 'block'; // Ensure it stays in the layout
      } else {
        recipe.style.visibility = 'hidden'; // Hide the card content
        recipe.style.display = 'block'; // Maintain the layout (spacing remains intact)
      }
    });
  }
  