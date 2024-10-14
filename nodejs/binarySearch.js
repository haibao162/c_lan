function binarySearch(arr, target) {
    var start = 0;
    var end = arr.length - 1;
    if (target < arr[start] || target > arr[end]) {
        return -1;
    }
    let count = 0;
    while(start <= end) {
        count++;
        if(count == 20) {
            return 'end';
        }

        const mid = Math.floor((start + end) / 2);
        if(start == end) {
            
            if(arr[mid] != target) {
                return -1;
            }
        }
        // 3和4的均值是3.5，mid值是3，为了避免死循环需要特殊处理
        if(start == mid) {
            if (arr[mid] < target) {
            start = end;
            continue;
            } else if (arr[mid] > target) {
                end = start;
            continue;
            }
        }
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
console.log(binarySearch([2,3,4,5,6,10],10));