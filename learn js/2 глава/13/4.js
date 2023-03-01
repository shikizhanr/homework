let n = 10;
prost: for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
        if (i % j == 0 && i != j) {
            continue prost
        }
    }
    alert(i)
}