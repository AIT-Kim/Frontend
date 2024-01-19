document.addEventListener('DOMContentLoaded', () => {
    const auctionItems = document.querySelectorAll('.auction-item');

    auctionItems.forEach(auction => {
        const bidButton = auction.querySelector('.bid-button');
        const timerElement = auction.querySelector('.time-left');
        const statusElement = auction.querySelector('.status');
        let timeLeft = Math.floor(Math.random() * 30) + 30; 
        let lastBidder = 'Начальная ставка';

        const updateTimer = () => {
            if (timeLeft > 0) {
                timeLeft--;
                timerElement.textContent = timeLeft;
            } else {
                clearInterval(auctionInterval);
                statusElement.textContent = `Аукцион окончен. Победитель: ${lastBidder}`;
                bidButton.disabled = true;
            }
        };

        const makeBid = () => {
            lastBidder = 'Вы';
            statusElement.textContent = `Текущая ставка от ${lastBidder}.`;
            timeLeft = 60;
        };

        bidButton.addEventListener('click', makeBid);

        const fakeBidders = ['Игрок1', 'Игрок2', 'Игрок3'];
        const makeFakeBid = () => {
            if (timeLeft < 30 && Math.random() < 0.3) {
                lastBidder = fakeBidders[Math.floor(Math.random() * fakeBidders.length)];
                statusElement.textContent = `Текущая ставка от ${lastBidder}.`;
                timeLeft = 60;
            }
        };

        const auctionInterval = setInterval(() => {
            updateTimer();
            makeFakeBid();
        }, 1000);
    });
});
