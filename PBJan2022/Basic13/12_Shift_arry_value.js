// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.


function shiftArrayValsLeft(arr){
    for(var i=0;i<arr.length-1;i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = 0
    console.log(arr)
}

shiftArrayValsLeft([5,8,6,3,1,87,1,5])