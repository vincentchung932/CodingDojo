function printMaxMinAverageArrayVals(arr){
    var max = arr[0]
    var min = arr[0]
    var sum = arr[0]
    for(var i=1;i<arr.length;i++){
        if (arr[i]>max){
            max = arr[i]
        }
        if (arr[i]<min){
            min = arr[i]
        }
        sum += arr[i]

    }
    var avg = sum/arr.length
    console.log(max)
    console.log(min)
    console.log(avg)
}


printMaxMinAverageArrayVals([4,8,6,3,2,54,15])