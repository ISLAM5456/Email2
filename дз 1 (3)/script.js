const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const email = prompt("Введите ваш email:");
    
if (regex.test(email)) {
    alert("Email корректный.");
} else {
    alert("Некорректный формат email.");
}
