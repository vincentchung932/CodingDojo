// For example, minToFront([5, 93, 22, 4]) should return [4, 5, 93, 22].
function minToFront(arr){
    // get min
    var min = [arr[0],0]
    for (var i=0; i<arr.length;i++){
        if (arr[i]<min[0]){
            min = [arr[i],i]
        }
    }
    //sort
    var result = [min[0]]
    
    for (var i=0; i<arr.length;i++){
        if (i !== min[1]){
            result.push(arr[i])
        }
    }
    return result
}

console.log(minToFront([5, 93, 22, 4]))

