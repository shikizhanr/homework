// Используя оператор ?
function checkAge(age) {
    (age > 18) ? true : confirm('Родители разрешили?');
}

// Используя оператор ||
function checkAge(age) {
    (age > 18) || confirm('Родители разрешили?');
}