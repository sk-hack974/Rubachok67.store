// Знаходимо форму на сторінці
const joinForm = document.getElementById("joinForm");

// Знаходимо місце для повідомлення
const formMessage = document.getElementById("formMessage");

// Виконуємо код після натискання кнопки відправлення
joinForm.addEventListener("submit", function(event) {

    // Не дозволяємо сторінці перезавантажуватися
    event.preventDefault();

    // Отримуємо дані з полів
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const experience = document.getElementById("experience").value;
    const fishing = document.getElementById("fishing").value;
    const agreement = document.getElementById("agreement").checked;

    // Очищаємо попереднє повідомлення
    formMessage.textContent = "";
    formMessage.className = "form-message";

    // Перевіряємо ім'я
    if (name.length < 2) {
        showMessage("Введи ім'я, яке містить щонайменше 2 символи.", "error");
        return;
    }

    // Перевіряємо електронну пошту
    if (!email.includes("@") || !email.includes(".")) {
        showMessage("Перевір правильність електронної пошти.", "error");
        return;
    }

    // Перевіряємо вибір досвіду та виду риболовлі
    if (experience === "" || fishing === "") {
        showMessage("Будь ласка, заповни всі поля.", "error");
        return;
    }

    // Перевіряємо згоду
    if (!agreement) {
        showMessage("Потрібно погодитися на обробку даних.", "error");
        return;
    }

    // Перетворюємо значення на зрозумілі назви
    const experienceNames = {
        beginner: "Початківець",
        intermediate: "Любитель",
        advanced: "Досвідчений рибалка"
    };

    const fishingNames = {
        spinning: "Спінінг",
        feeder: "Фідер",
        float: "Поплавкова риболовля",
        carp: "Коропова риболовля",
        other: "Інший вид риболовлі"
    };

    // Виводимо привітання
    showMessage(
        "Вітаємо, " + name + "! 🎣 " +
        "Ти заповнив форму Rubachok67. " +
        "Досвід: " + experienceNames[experience] + ". " +
        "Улюблена риболовля: " + fishingNames[fishing] + ". " +
        "Демонстраційна реєстрація завершена!",
        "success"
    );

    // Поки що форма працює в демонстраційному режимі.
    // Дані не надсилаються на сервер.
});

// Функція для показу повідомлень
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.classList.add(type);
}
