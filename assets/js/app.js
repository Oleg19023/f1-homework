function checkTINFromForm() {
    const tin = document.getElementById('tinNumber').value;
    const result = checkTIN(tin);
    document.getElementById('resultContainer').innerText = result;
}

function checkTIN(tin) {
    // ИНН формат
    if (!/^\d{10}$/.test(tin)) {
        return "Некорректный ИНН";
    }

    // Дата рожд
    const birthDays = parseInt(tin.substring(0, 5));
    const birthDate = new Date(1899, 11, 31);
    birthDate.setDate(birthDate.getDate() + birthDays);

    // Пол
    const gender = tin.substring(8, 9) % 2 == 0 ? "Женский" : "Мужской";

    // Возраст
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return "ИНН корректен. Дата рождения: " + birthDate.toLocaleDateString() + ". Пол: " + gender + ". Полных лет: " + age;
}