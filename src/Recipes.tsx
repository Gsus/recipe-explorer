import RecipeCard from "./RecipeCard"
import type { RecipeData, DietOptions } from "./types"
import { useState } from "react"

type RecipesProps = { recipes: RecipeData[] }

const Recipes = ({ recipes }: RecipesProps) => {
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState<DietOptions>("all");
  const searchTerm = query.trim().toLowerCase();

  // From a UX Experience perspective, people will prioritize dietary restrictions first, and IF they have something specific in mind, they will use the search bar.
  // So check for diet first.

  // If "All" is selected, don't filter by diet. Otherwise, start filtering.
  // INCLUDE vegan -> in vegetarian results
  const getFilteredByDiet = (): RecipeData[] => {
    if (diet !== "all") {
      let filteredByDiet = recipes.filter((recipe) => {
        // Find out if the diet in the state can be found in the given recipe (and in the case of vegetarian being selected, include vegans)
        return recipe.diet.some((restriction) =>(diet === "vegetarian" && restriction === "vegan") || diet === restriction);
      });
      
      return filteredByDiet;
    }
    // If "all" is selected, just return all recipes then.
    return recipes;
  }

  // 1st filter: Diet
  let filtered: RecipeData[] = getFilteredByDiet();
  console.log("Filtered after diet filtering:", filtered)

  // 2nd filter
  // Filter by title, ingredient (search bar), and diet (button selector)
  let filteredBySearchBar = filtered.filter((recipe) => {
    // Filter by title
    if (recipe.title.toLowerCase().includes(searchTerm)) return true
    // Filter by ingredient
    const isInIngredients = recipe.ingredients.find((ingredient) =>
      ingredient.trim().toLowerCase().includes(searchTerm)
    )
    if (isInIngredients) return true;
  })

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        type="search"
        name="filter"
        id="filter"
        className="border"
      ></input>

      {/* Testing controlled input*/}
      {`Query: ${query}`}

      <div className="flex flex-wrap m-2">
        <button className="rounded-full bg-green-200 py-2 px-4 m-2 min-w-12" onClick={() => setDiet("all")}>
          All
        </button>
        <button className="rounded-full bg-green-200 py-2 px-4 m-2 min-w-12" onClick={() => setDiet("vegetarian")}>
          Vegetarian
        </button>
        <button className="rounded-full bg-green-200 py-2 px-4 m-2 min-w-12 " onClick={() => setDiet("vegan")}>Vegan</button>
        <button className="rounded-full bg-green-200 py-2 px-4 m-2 min-w-12" onClick={() => setDiet("gluten-free")}>
          Gluten-free
        </button>
      </div>

      {/* Testing buttons state*/}
      {`Clicked button: ${diet}`}


      {filteredBySearchBar.map((recipe) => (
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
          diet={recipe.diet}
        />
      ))}
    </div>
  )
}

export default Recipes