function larger_than_second(arr){
    //set a variable to count
    var count = 0
    // go through every element in the arry,
    for (var i=0;i<arr.length;i++){
    // whenever we meet an element which is larger than the second element(arr[1]),we add 1 to the count var
        if(arr[i]>arr[1]){
            count+=1
        }
    }
    return count
}


//case1
console.log("case1")
console.log(larger_than_second([2,5,19,3,10,9]))

//case2
console.log("case2")
console.log(larger_than_second([4,3,10,1,6,9,2]))
