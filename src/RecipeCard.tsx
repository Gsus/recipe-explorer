import { useState } from "react";
import type { RecipeData } from "./types"


type RecipeCardProps = Omit<RecipeData, "id" | "diet" | "category">

const RecipeCard = (
  {
    title,
    description,
    image,
    imageAlt,
    minutes,
    servings,
    ingredients,
    steps
  }: RecipeCardProps
) => {
  const [active, setActive] = useState(false); 

  return (
    <div data-active={active} onClick={() => setActive(!active)}>
      <h2>{title}</h2>
      <img src={image} alt={imageAlt} />
      <p>Cooking time: {minutes} minutes</p>

      {active && (
        <div>
          <p id="description">{description}</p>
          {/* Display servings, ingredients, and steps*/}
          <p id="servings">Servings: {servings}</p>
          <div id="ingredients">
            <p>Ingredients:</p>
            <ul>
              {ingredients.map((ingredient) => <li>{ingredient}</li>)}
            </ul>
          </div>
          <div id="steps">
            <p>Steps:</p>
            <ul>
              {steps.map((step) => <li>{step}</li>)}
            </ul>
          </div>
        </div>
        
      )}
    </div>
  )
}

export default RecipeCard;
