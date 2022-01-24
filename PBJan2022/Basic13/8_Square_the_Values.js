function SquareArryVals(arr){
    for (var i = 0;i<arr.length;i++){
        arr[i] *=arr[i]
    }
    return arr
}

const arr1 = [1,2,5,9,8,3]
console.log(SquareArryVals(arr1))