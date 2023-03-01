function sumInput() {
    arr = []

    let x = prompt('Введите число', 0)
    
    while (x !== '' || x !== null || !isFinite(x)) {
        arr.push(+x);
        x = prompt('Введите число', 0);
    }

    let sum = 0

    for (let i of arr) {
        sum += i;
    }

    return sum
}