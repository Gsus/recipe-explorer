interface RecipeCardProps {
  id: string
  key: string
  title: string
  image: string
  imageAlt: string
  minutes: number
}

const RecipeCard = (
  {
    id,
    key,
    title, 
    image,
    imageAlt,
    minutes
  }: RecipeCardProps
) => {
  return (
    <div id={id} key={key}>
      <h2>{title}</h2>
      <img src={image} alt={imageAlt} />
      <p>Cooking time: {minutes} minutes</p>
    </div>
  )
}

export default RecipeCard;
