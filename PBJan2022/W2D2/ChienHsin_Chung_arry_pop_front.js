// For example, popFront([5, 93, 22, 4]) should return [93, 22, 4].

function popFront(arr){
    var result = []
    for (var i=1;i<arr.length;i++){
        result[i-1] = arr[i]
    }
    return result
}

console.log(popFront([5, 93, 22, 4]))