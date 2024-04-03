function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// 冒泡
// 可以利用一个标志位进行优化，每轮遍历开始的时候flag为0,如果第i轮没有进行交换，则说明数组已经有序不需要在遍历
function Bubble(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            var temp = arr[j];
            if (temp > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
// 选择排序，不稳定 如 5 5 2,第一次交换后5之间的顺序变了
function Choose(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i; j < arr.length - 1; j++) {
            if (arr[j + 1] < arr[min]) {
                min = j + 1;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}
// 快速排序
function quickSort(arr, _left, _right) {
    var left = _left; // 左边
    var right = _right - 1; // 右边
    var temp = arr[left]; // 基准值，一般是第一个数，比基准值大的数都在基准值右边，比基准值小的数都在基准值左边。
    if (left >= right) {
        return;
    }
    while(left != right) {
        while(arr[right] >= temp && left < right) {
            right--;
        }
        arr[left] = arr[right]; // 从最右边找到第一个比基准值小的数，赋值到前面去。留出空位arr[right]（虽然是空位，但是实际还有值，只不过该位置的值待填入）
        while(arr[left] <= temp && left < right) {
            left++;
        }
        arr[right] = arr[left]; // 从最左边开始找第一个比基准值大的数，放入到上一步留出的空位，然后留出空位arr[left]。
    }
    // 考虑right = left + 1时，假设left是空位，right上的数据小于temp，arr[right]填到arr[left]上去，left++，此时left和right都指向right。最后把temp填到right上
    // 考虑right = left + 1时，假设left是空位，right上的数据大于temp，则right--，空位仍然是left。最后再把temp填到left上
    // 此时left = right
    arr[left] = temp; // 这样一趟就遍历完了，每趟都会遍历n次
    // 递归，最多递归n-1次，此时时间复杂度是n + n - 1 + ... + 1。最少递归logn次，此时时间复杂度是nlogn。
    if (_left < left - 1) {
        quickSort(arr, _left, left - 1);
    }
    if (left + 1 < _right) {
        quickSort(arr, left + 1, _right);
    }
}
// 选择第一个作为基准值，从第二个数开始每次遍历将小的数跟前面大的数交换（或者自己跟自己交换），并且使用index=left+1开始进行计数用于记录小的数的数量
// 遍历结束以后将第一个基准值和最后一个小的数即index位置的数交换，这样基准值右边的都是大的数，左边都是小的数
function quickSort2 (arr, _left, _right) {
    var left = _left;
    var right = _right;
    if (left >= right) {
        return;
    }
    var index = left + 1;
    var temp = arr[left]; // 基准值
    for (var i = index;i < _right;i++) {
        if (arr[i] < temp) {
            swap(arr, index, i); // 将小的数放在前面，使用index记录最后一个小的数的位置
            index++;
        }
    }
    swap(arr, left, index - 1); // 基准值和最后一个小的数交换，此时基准值在中间位置
    if (left < right) {
        quickSort2(arr, _left, index - 2); // 将左边的小的数排序
        quickSort2(arr, index, _right); // 将右边的大的数排序
    }
}

var arr1 = [5, 3, 3, 36, 24, 19, 1, 92];
var arr2 = [5, 3, 1];

// Bubble(arr1);
// console.log(arr1);
// Choose(arr1);
// console.log("选择排序", arr1);
// quickSort2(arr1, 0, arr1.length);
// quickSort2(arr2, 0, arr2.length);
// console.log("快速排序", arr1);
// console.log("快速排序", arr2);



