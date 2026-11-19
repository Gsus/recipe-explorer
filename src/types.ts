export interface RecipeData {
  id: string
  title: string
  description: string
  minutes: number
  servings: number
  diet: DietOptions[]
  category: string
  ingredients: string[]
  steps: string[]
  image: string
  imageAlt: string
}

export type DietOptions = "all" | "vegetarian" | "vegan" | "gluten-free"