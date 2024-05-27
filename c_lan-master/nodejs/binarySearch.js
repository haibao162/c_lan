function binarySearch(arr, target) {
    var start = 0;
    var end = arr.length - 1;
    if (target < arr[start] || target > arr[end]) {
        return -1;
    }
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    return -1;
}
console.log(1);
console.log(binarySearch([2,3,4,5],10));
console.log("232".length);