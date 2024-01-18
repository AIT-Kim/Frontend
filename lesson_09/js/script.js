document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    let botResponses = {};

    // Загрузка ответов бота из JSON
    fetch('responses.json')
        .then(response => response.json())
        .then(data => botResponses = data)
        .catch(error => console.error('Ошибка загрузки ответов бота:', error));

    document.getElementById('send-message').addEventListener('click', () => {
        const messageContent = document.getElementById('message-input').value;
        addMessageToChat("Пользователь", messageContent);

        const botResponse = getBotResponse(messageContent);
        addMessageToChat("Бот", botResponse);

        document.getElementById('message-input').value = '';
    });

    function getBotResponse(message) {
        const words = message.toLowerCase().split(/\s+/);
        for (let word of words) {
            for (let key in botResponses) {
                if (word.includes(key)) {
                    return botResponses[key];
                }
            }
        }
        return "Извини, я не уверен, как на это ответить.";
    }

    function addMessageToChat(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatMessages.appendChild(messageDiv);

        messageDiv.scrollIntoView({ behavior: 'smooth' });
    }

    document.getElementById('message-input').addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
    
            const messageContent = this.value;
            addMessageToChat("Пользователь", messageContent);
    
            const botResponse = getBotResponse(messageContent);
            addMessageToChat("Бот", botResponse);
    
            this.value = '';
        }
    });
    

});
