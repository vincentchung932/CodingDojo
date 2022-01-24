function ZeroOutArrayNegativeVals(arr){
    for (var i = 0;i<arr.length;i++){
        if(arr[i]<0){
            arr[i] = 0
        }
    }
    return arr
}

arr1 = [1,5,8,-8,-99,-5,0,5,-1]
console.log(ZeroOutArrayNegativeVals(arr1))