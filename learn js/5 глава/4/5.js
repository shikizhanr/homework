function getMaxSubSum(arr) {
    maxSum = 0;
    maxNum = 0;
    
    for (let i of arr) {
        maxNum += i;
        if (maxNum < 0) {
            maxNum = 0;
        }
        if (maxNum > maxSum) {
            maxSum = maxNum;
        }
    }

    return maxSum
}