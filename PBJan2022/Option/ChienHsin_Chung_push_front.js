function pushfront(arr,val){
    var result=[]
    result.push(val)
    for (var i=0; i<arr.length; i++){
        result.push(arr[i])
    }
    return result
}

console.log(pushfront([5,93,22,4],100))