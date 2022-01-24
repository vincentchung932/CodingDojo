function printMaxOfArray(arr){
    var max = arr[0]
    for (var i = 0;i<arr.length;i++){
        if (arr[i]>max){
            max = arr[i]
        }
    }
    console.log(max)
}


printMaxOfArray([4,8,5,3,6,9,8,55,32,6])