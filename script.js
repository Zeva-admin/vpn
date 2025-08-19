// Добавим обработчики для кнопок "Купить"
document.querySelectorAll('.buy-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        // Замените ссылку на свой Telegram
        window.location.href = 'https://t.me/your_telegram_link';
    });
});
