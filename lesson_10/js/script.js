document.addEventListener('DOMContentLoaded', () => {
    const meals = [
        { name: 'Спагетти', imageUrl: 'pics/spagetti.jpg' },
        { name: 'Цезарь', imageUrl: 'pics/cezar.jpg' },
        { name: 'Борщ', imageUrl: 'pics/borscht.jpg' },
        { name: 'Суши', imageUrl: 'pics/suchi.jpg' },
        { name: 'Пицца', imageUrl: 'pics/pizza.jpg' },
        { name: 'Шашлык', imageUrl: 'pics/shashlik.jpg' }
    ];

    const ratings = ['Отлично', 'Хорошо', 'Так себе', 'Плохо'];


    document.getElementById('suggest-meal').addEventListener('click', () => {
        const [meal] = meals.sort(() => 0.5 - Math.random());
        document.getElementById('meal-suggestion').textContent = `Вы приготовили: ${meal.name}!`;

        const imgContainer = document.getElementById('meal-image-container');
        imgContainer.innerHTML = `<img src="${meal.imageUrl}" alt="${meal.name}" style="max-width: 100%;">`;
    });
    document.getElementById('rate-meal').addEventListener('click', () => {
        const rateMeal = (meal, callback) => {
            const rating = callback();
            return `${meal} оценено как "${rating}"`;
        };

        const randomRating = () => ratings[Math.floor(Math.random() * ratings.length)];
        const mealText = document.getElementById('meal-suggestion').textContent;
        const meal = mealText.replace('Вы приготовили: ', '').replace('!', '');

        if(meal) {
            const ratingText = rateMeal(meal, randomRating);
            document.getElementById('meal-rating').textContent = ratingText;
        } else {
            document.getElementById('meal-rating').textContent = 'Сначала приготовьте блюдо!';
        }
    });
});
