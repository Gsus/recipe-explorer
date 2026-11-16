
import RecipeCard from "./RecipeCard"
import type { RecipeData } from "./types"
import { useState } from "react";

type RecipesProps = { recipes: RecipeData[] }

const Recipes = ({ recipes }: RecipesProps) => {
  const [query, setQuery] = useState('');
  const searchTerm = query.trim().toLowerCase();

  let filteredRecipes = recipes.filter((recipe) => {
    // Filter by title
    if (recipe.title.toLowerCase().includes(searchTerm)) return true;
    // Filter by ingredient
    const isInIngredients = recipe.ingredients.find((ingredient) => ingredient.trim().toLowerCase().includes(searchTerm));
    if (isInIngredients) return true;
  });

  return (
  <div>
    <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" name="filter" id="filter" className="border"></input>

    {/* Testing controlled input*/}
    {`Query: ${query}`}

    {filteredRecipes.map((recipe) => (
      <RecipeCard
        key={recipe.id}
        title={recipe.title}
        image={recipe.image}
        imageAlt={recipe.imageAlt}
        minutes={recipe.minutes}
        servings={recipe.servings}
        ingredients={recipe.ingredients}
        steps={recipe.steps}
        description={recipe.description}
      />
    ))}
  </div>
  )
}


export default Recipes;