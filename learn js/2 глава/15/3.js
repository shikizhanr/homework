function pow(x, n) {
    return x**n
}

let x = prompt('Введите число', '')
let n = prompt('Введите степень, в которую хотите возвести', '')
if ((n % 1 != 0) && (n > 0)) {
    alert('Введите натуральное значение степени')
} else {
    alert(pow(x, n))
}