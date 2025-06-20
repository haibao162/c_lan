2 + 3    

function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while(left < right) {
        let mid = Math.floor(left + right)
        if (arr[mid] == target) {
            return mid
        }
        if(arr[mid] < target) {
            left = mid + 1
        } else if (arr[mid] > target) {
            right = mid - 1
        }
    }
    return -1

}

function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while(left < right) {
        let mid = Math.floor(left + right)
        if (arr[mid] == target) {
            return mid
        }
        if(arr[mid] < target) {
            left = mid + 1
        } else if (arr[mid] > target) {
            right = mid
        }
    }
    return -1

}



console.log(binarySearch([2,3,4,5,6,10],10));

console.log(binarySearch([2,3], 3));

