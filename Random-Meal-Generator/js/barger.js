const getMealBTn = document.getElementById('Get_meal');
const mealContainer = document.getElementById('meal');
// arrow function 
getMealBTn.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => createMail(data.meals[0]));
    
});

function createMail(meals){

  const Ingredients = [];
  for(i=1; i<=20; i++){
    if(meals[`strIngredient${i}`]){
      Ingredients.push(
        `${meals[`strIngredient${i}`]} - ${meals[`strMeasure1${i}`]}`
      );
      
    }
    else{
      break;
    }
  }
  console.log(Ingredients);

  mealContainer.innerHTML =  `
    <div class=" columns-1 thumbnail_img">
      <img class="width:100%" style="width:100%;" src="${meals.strMealThumb}" alt="meal img">
    </div>
    <div class="columns-1 mt-4">
      <p><strong>Category: </strong> ${meals.strCategory}</p>
      <p><strong>Tag: </strong>${meals.strTags.split(',').join(', ')}</p>
      <h3 class="text-4xl mt-8">Ingredients</h3>
      <ul class="mt-3">
        ${Ingredients.map(ingredient => `
          <li>${ingredient}</li>
        `).join('')}
      </ul>
      <h2 class=" text-4xl my-6">${meals.strMeal}</h2>
      <p class="mt-5">${meals.strInstructions}</p>

      <div class="videoWarpper">
      <h2 class="text-3xl">Video Recipe</h2>
        <iframe  autoplay; src="https://www.youtube.com/embed/${meals.strYoutube.slice(-11)}"></iframe>
      </div>

    </div>
  `
}