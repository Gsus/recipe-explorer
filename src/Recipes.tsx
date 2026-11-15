
import RecipeCard from "./RecipeCard"
import type { RecipeData } from "./types"

type RecipesProps = { recipes: RecipeData[] }

const Recipes = ({ recipes }: RecipesProps) => {
  return (
  <div>
   {recipes.map((recipe) => (
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