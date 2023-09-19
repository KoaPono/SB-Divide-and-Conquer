function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let zeroIdx = -1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)

        if(arr[middleIdx] == 0) {
            zeroIdx = middleIdx;
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }
    if(zeroIdx == -1) return 0
    return arr.length - zeroIdx;
}

module.exports = countZeroes;
