//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink);


function getDrink() {
    let input = document.querySelector('input').value.toLowerCase();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
            for (let i = 0; i < data.drinks.length; i++) {
                setTimeout(() => {
                    document.querySelector('h2').textContent = data.drinks[i].strDrink;
                    document.querySelector('img').src = data.drinks[i].strDrinkThumb;
                    document.querySelector('h3').textContent = data.drinks[i].strInstructions;
                }, i * 1000)
            }
    })
    .catch(err => {
        console.log(`error is ${err}`);
    })
}