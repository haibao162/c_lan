var arr1 = [5, 3, 3, 36, 4, 19, 1, 92];
var arr2 = [5, 3, 1];


// 两个数的时候，如8和7，temp=8,7比8小，所以a[0] =7,right=1。然后left从0开始，然后找比8大的，一直找不到
// 这样最后left到right的位置就不找了，然后a[right]也就是a[1]=7。实际上一直找不到满足条件的，就会到最后位置，将temp赋值上去
function quickSort(arr, _left, _right) {
    var left = _left
    var right = _right - 1
    var temp = arr[left] // 左边的作为基准值

    if (left >= right) {
        return
    }

    while (left != right) {
        // 从右边找第一个小于temp值
        while(temp <= arr[right] && left < right) {
            right--
        }
        arr[left] = arr[right] // 找到第一个小于temp值的，或者没找到
        // 从左边找第一个大于temp值
        while(temp >= arr[left] && left < right) {
            left++
        }
        arr[right] = arr[left] // 第一个大于temp的，放在right位置

    }
    // left=right时，基准值放进去
    arr[left] = temp
    if(_left < left + 1) {
        quickSort(arr, _left, left + 1)
    }
    if (left < _right - 1) {
        quickSort(arr, left + 1, _right)

    }

}

console.log('排序前：',arr1)

quickSort(arr1, 0, arr1.length)
console.log('排序后：',arr1)