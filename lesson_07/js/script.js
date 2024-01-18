document.addEventListener('DOMContentLoaded', function() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const resultElement = document.getElementById('result');

    document.getElementById('guess-btn').onclick = function() {
        const userGuess = parseInt(document.getElementById('guess-input').value);
        if (userGuess === randomNumber) {
            resultElement.textContent = 'Поздравляем, вы угадали число!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = userGuess > randomNumber ? 'Слишком много!' : 'Слишком мало!';
            resultElement.style.color = 'red';
        }
    };
});
