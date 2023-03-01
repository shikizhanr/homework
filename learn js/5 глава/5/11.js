function getAverageAge(users) {
    let sum = 0;
    for (let i of users) {
        sum += i.age
    }
    return (sum / users.length)
}