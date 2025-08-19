// Учетные данные для админ-панели
const adminLogin = "Alex";
const adminPassword = "Test";

// Получаем элементы
const loginBtn = document.getElementById('login-btn');
const adminPanel = document.getElementById('admin-panel');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');

// Проверка URL на наличие "/foradmin"
const urlParams = new URLSearchParams(window.location.search);
const isForAdmin = window.location.pathname.includes('/foradmin');

// Если параметр "/foradmin" в URL, показываем форму входа
if (isForAdmin) {
    loginForm.style.display = 'block';
    adminPanel.style.display = 'none';
}

// При клике на кнопку "Войти"
loginBtn.addEventListener('click', function() {
    const enteredLogin = document.getElementById('login').value;
    const enteredPassword = document.getElementById('password').value;

    // Если логин и пароль правильные, показываем админ-панель
    if (enteredLogin === adminLogin && enteredPassword === adminPassword) {
        loginForm.style.display = 'none';
        adminPanel.style.display = 'block';
    } else {
        loginError.style.display = 'block';
    }
});

// Если форма админа отправлена, изменим данные на странице
document.getElementById('admin-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let vpnTitle = document.getElementById('vpn-title-input').value;
    let vpnDescriptionTitle = document.getElementById('vpn-description-title-input').value;
    let vpnDescriptionText = document.getElementById('vpn-description-text-input').value;
    let price1 = document.getElementById('price1-input').value;
    let price2 = document.getElementById('price2-input').value;
    let price3 = document.getElementById('price3-input').value;
    let price4 = document.getElementById('price4-input').value;
    let contactLink = document.getElementById('contact-link-input').value;

    // Обновляем данные на странице
    if (vpnTitle) document.getElementById('vpn-title').textContent = vpnTitle;
    if (vpnDescriptionTitle) document.getElementById('vpn-description-title').textContent = vpnDescriptionTitle;
    if (vpnDescriptionText) document.getElementById('vpn-description-text').textContent = vpnDescriptionText;
    if (price1) document.getElementById('price1-text').textContent = `${price1} руб.`;
    if (price2) document.getElementById('price2-text').textContent = `${price2} руб.`;
    if (price3) document.getElementById('price3-text').textContent = `${price3} руб.`;
    if (price4) document.getElementById('price4-text').textContent = `${price4} руб.`;
    if (contactLink) document.getElementById('contact-link').setAttribute('href', contactLink);
});
