function findRotatedIndex(arr, val) {
    rotationPoint = findRotationPoint(arr);
    return binarySearch(arr, val, rotationPoint);
}

function binarySearch(arr, val, rotationPoint) {
    let lft;
    let rgt;
    if (arr[0] <= val) {
        lft = 0;
        rgt = rotationPoint;
    } else {
        lft = rotationPoint;
        rgt = arr.length - 1;
    }
    while(lft <= rgt) {
        let mid = Math.floor((lft + rgt)/2);
        let midVal = arr[mid];
        if (midVal < val) {
            lft = mid + 1;
        } else if (midVal > val) {
            rgt = mid -1;
        } else {
            return mid
        }
    }
    return -1;
}

function findRotationPoint(arr) {
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
}

//module.exports = findRotatedIndex