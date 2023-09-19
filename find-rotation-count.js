function findRotationCount(arr) {
    let lft = 0;
    let rgt = arr.length - 1;

    while (lft <= rgt) {
        let mid = Math.floor((lft + rgt) / 2);
        if (arr[mid] > arr[mid + 1]) return mid + 1
        
        if (arr[lft] <= arr[mid]) {
            lft = mid + 1;
        } else {
            rgt = mid - 1;
        }
    }

    return 0;
}

module.exports = findRotationCount