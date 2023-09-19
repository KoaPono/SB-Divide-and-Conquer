function findFloor(arr, val) {
    let lft = 0;
    let rgt = arr.length - 1;

    if (val >= arr[rgt]) return arr[rgt];
    if (val <= arr[lft]) return -1;

    while(lft <= rgt) {

        let mid = Math.floor((lft + rgt)/2);
        let midVal = arr[mid];

        if (arr[mid] === val) return arr[mid];

        if (midVal < val) {
            lft = mid + 1;
        } else if (midVal > val) {
            rgt = mid -1;
        }
    }

    return arr[lft - 1];
}

module.exports = findFloor