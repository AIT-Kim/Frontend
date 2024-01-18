document.addEventListener('DOMContentLoaded', function() {
    const resultElement = document.getElementById('result');
    const comparisonElement = document.getElementById('comparison');
    const arrayOutputElement = document.getElementById('array-output');

    document.getElementById('calculate-btn').onclick = function() {
        const input = document.getElementById('input-number').value;
        const number = Number(input);

        if (!isNaN(number)) {
            // Простые операции
            const sum = number + 10;
            const product = number * 2;
            const power = number ** 2;
            resultElement.textContent = `Сумма: ${sum}, Произведение: ${product}, В степени 2: ${power}`;

            // Сравнение и приведение типов
            comparisonElement.textContent = `Строгое сравнение: ${number === input}, Нестрогое сравнение: ${number == input}`;

            // Массивы и циклы
            const numbersArray = [number, sum, product, power];
            let arrayString = 'Элементы массива: ';
            for (let i = 0; i < numbersArray.length; i++) {
                arrayString += `${numbersArray[i]} `;
            }
            arrayOutputElement.textContent = arrayString;
        } else {
            resultElement.textContent = 'Пожалуйста, введите число.';
        }
    };
});
