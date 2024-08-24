const API_KEY = " 225425dde78a48479bd7413573db8b25"

async function getRecipes(){
   const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

   const data = await response.json()

   return data.recipes
}


async function init(){
   const recipes = await getRecipes()
   console.log(recipes);
}

init()