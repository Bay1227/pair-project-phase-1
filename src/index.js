const mealSearch = document.getElementById('meals')
//const test = document.getElementById('ingredient')
const foodSearch = document.querySelector('.food-search')
const test1 = document.getElementById('food-search')
const recImg = document.getElementById('rec-img')
const mealName = document.getElementById('meal-name')
const findRegion = document.getElementById('region')
const ingList = document.getElementById('ingredient-list')
const toMake = document.getElementById('howto')


fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
.then ((res) => res.json())
.then (data => searchByName(data.meals))

// function test (name) {
// //  if ()   
// // }

function searchByName (meals) { //
    meals.map(meal => {
        console.log(meal)
        test1.addEventListener('input', (e) => {
            e.preventDefault()
            const enteredName = e.target.value;
            
            if( meal.strMeal.toLowerCase()  === enteredName.toLowerCase()) {
                console.log(enteredName, meal.strMeal)
                recImg.src = meal.strMealThumb;
                mealName.innerText = meal.strMeal;
                findRegion.innerText = meal.strArea;

                const ingredients = []
                 for (let i = 1; i <= 30; i++) {
                    if (meal[`strIngredient${i}`]) {
                    
                        ingredients.push(
                            `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
		         } else {
                    break;}
	            }
                ingredients.map(ingre => {
                    const newIngList = document.createElement('li')
                    newIngList.innerText = ingre;
                
                    ingList.appendChild(newIngList);
                });
                toMake.innerText = meal.strInstructions;
            } else {
                console.log(enteredName, meal.strMeal)
            }
        })
    })
}
