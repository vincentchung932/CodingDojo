function printAverageOfArray(arr){
    var sum = 0
    for (var i =0;i<arr.length;i++){
        sum += arr[i]
    }
    var avg  = sum/arr.length
    console.log(avg)
}

const arr1 = [1,2,5,7,9,3]
printAverageOfArray(arr1)