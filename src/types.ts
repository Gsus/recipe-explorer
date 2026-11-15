export interface RecipeData {
  id: string
  title: string
  description: string
  minutes: number
  servings: number
  diet: string[]
  category: string
  ingredients: string[]
  steps: string[]
  image: string
  imageAlt: string
}