function sortedFrequency(arr, val) {
    let firstIdx = findFirst(arr, val);
    if (firstIdx == -1) return firstIdx;

    let lastIdx = findLast(arr, val);
    if (lastIdx == -1) return lastIdx;
    
    return lastIdx - firstIdx + 1;
}

function findFirst(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let firstIdx = -1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)

        if(arr[middleIdx] >= val) {
            firstIdx = middleIdx;
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }
    return firstIdx;
}

function findLast(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let lastIdx = -1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2)

        if(arr[middleIdx] > val) {
            rightIdx = middleIdx - 1;
        } else {
            lastIdx = middleIdx;
            leftIdx = middleIdx + 1;
        }
    }
    return lastIdx;
}

module.exports = sortedFrequency