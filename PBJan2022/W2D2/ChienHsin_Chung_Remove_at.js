//For example, removeAt([5, 93, 22, 4], 2) should return [5, 93, 4]. 
function removeAt(arr,indx){
    var result = []
    for (var i=0;i<arr.length;i++){
        if (i !== indx){
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeAt([5, 93, 22, 4], 2))