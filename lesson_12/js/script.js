document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('runaway-button');
    const counter = document.getElementById('attempt-counter');
    let attempts = 0;
    let catchAttemptThreshold;
    const totalAttempts = 10;
    let isButtonReadyToMove = true;

    const setRandomCatchThreshold = () => {
        catchAttemptThreshold = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    };

    const updateCounter = () => {
        counter.textContent = ` ${totalAttempts - attempts}`; //оставшиеся попытки
    };

    const changeButtonColor = () => {
        // меняем цвет кнопки, в зависимости от кол-во попыток
        const redComponent = Math.round(255 * (attempts / totalAttempts));
        const greenComponent = Math.round(255 * (1 - attempts / totalAttempts));
    
        button.style.backgroundColor = `rgb(${redComponent}, ${greenComponent}, 0)`;
    };
    

    const getRandomPosition = () => {
        const gameArea = document.getElementById('game-area');
        const maxX = gameArea.clientWidth - button.clientWidth;
        const maxY = gameArea.clientHeight - button.clientHeight;
        return { newX: Math.random() * maxX, newY: Math.random() * maxY };
    };

    const moveButton = () => {
        if (isButtonReadyToMove) {
            const { newX, newY } = getRandomPosition();
            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
        }
    };

    const setMoveDelay = () => {
        isButtonReadyToMove = false;
        setTimeout(() => {
            isButtonReadyToMove = true;
            moveButton();
        }, 250);
    };

    const resetGame = () => {
        attempts = 0;
        setRandomCatchThreshold();
        updateCounter();
        isButtonReadyToMove = true;
        button.style.backgroundColor = 'rgb(0, 255, 0)'; //грин
        moveButton();
    };

    button.addEventListener('mouseenter', () => {
        if (attempts < totalAttempts) {
            attempts++;
            updateCounter();
            changeButtonColor();

            if (attempts < catchAttemptThreshold) {
                moveButton();
            } else {
                setMoveDelay();
                setRandomCatchThreshold(); // новый порог после каждой задержанной попытки
            }
        }

        if (attempts === totalAttempts) {
            alert('Вы исчерпали попытки! Попробуйте еще раз.');
            resetGame();
        }
    });

    button.addEventListener('click', () => {
        if (attempts >= catchAttemptThreshold && isButtonReadyToMove) {
            alert('Поздравляем! Вы поймали кнопку!');
            resetGame();
        } else {
            alert('Круто! Вы поймали кнопку!');
            resetGame();
        }
    });

    resetGame(); // Инициализация
});
