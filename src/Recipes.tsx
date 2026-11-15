
import RecipeCard from "./RecipeCard"

interface RecipeData {
  id: string
  title: string
  description: string
  minutes: number
  servings: number
  diet: string[]
  category: string
  ingredientes: string[]
  steps: string[]
  image: string
  imageAlt: string
}

type RecipesProps = { recipes: RecipeData[] }

const Recipes = ({ recipes }: RecipesProps) => {
  return (
  <div>
   {recipes.map((recipe) => (
      <RecipeCard
        id={recipe.id} 
        key={recipe.id}
        title={recipe.title}
        image={recipe.image}
        imageAlt={recipe.imageAlt}
        minutes={recipe.minutes}
      />
    ))}
  </div>
  )
}


export default Recipes;