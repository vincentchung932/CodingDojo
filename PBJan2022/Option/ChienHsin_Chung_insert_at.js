//insertAt([5, 93, 22, 4], 2, 100) should return [5, 93, 100, 22, 4].

function insertAt(arr,indx,val){
    var result = []
    for (var i=0;i<arr.length;i++){
        if (i===indx){
            result.push(val)
        }
        result.push(arr[i])
    }
    return result
}

console.log(insertAt([5, 93, 22, 4], 2, 100))