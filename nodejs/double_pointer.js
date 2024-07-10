function doublePointer(nums) {
    if(nums.length < 2) {
        return nums;
    }
    let slow = 0;
    let fast = 1;
    let result = [nums[0]];
    while(fast < nums.length) {
        if (result[slow] == nums[fast]) {
            fast++;
        } else {
            slow++;
            result[slow] = nums[fast];
            fast++;
        }
    }
    return result;
}
const arr = [1,1,2,2,4,4];
console.log(doublePointer(arr));


function doublePointerByorder(nums) {
    if(nums.length < 2) {
        return nums;
    }
    let slow = 0;
    let fast = 1;
    let result = [nums[0]];
    while(fast < nums.length) {
        if (result[slow].id == nums[fast].id) {
            if(result[slow].time < nums[fast].time) {
                result[slow] = nums[fast];
            }
            fast++;
        } else {
            slow++;
            result[slow] = nums[fast];
            fast++;
        }
    }
    return result;
}

const arr2 = [{
    id:1,
    time: 2
},
{
    id:1,
    time: 4
},
{
    id:2,
    time: 2
},
{
    id:2,
    time: 4
},
{
    id:3,
    time: 5
},
{
    id:3,
    time: 2
}];

console.log(doublePointerByorder(arr2));