function filterRange(arr, a, b) {
    newarr = [];
    for (let item of arr) {
        if (item >= a && item <= b) {
            newarr.push(item)
        }
    }
    return newarr
}