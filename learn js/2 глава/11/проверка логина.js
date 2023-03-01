let whoIs = prompt("Кто там?")
if (whoIs == "Админ") {

    let password = prompt('Пароль?')

    if (password == "Я главный") {
        alert('Здравствуйте!')
    } else if (password == '' || password == null) {
        alert("Отменено")
    } else {
        alert('Неверный пароль')
    }

} else if (whoIs == '' || whoIs == null) {
    alert("Отменено")
} else {
    alert("Я вас не знаю")
}   