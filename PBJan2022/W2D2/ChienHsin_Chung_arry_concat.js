//For example: arrConcat( ['a', 'b'], [1, 2] ) should return new array ['a', 'b', 1, 2].
function arrConcat(arr1,arr2){
    var result = arr1
    for (var i=0;i<arr2.length;i++){
        result.push(arr2[i])
    }
    return result
}

console.log(arrConcat(['a', 'b'], [1, 2]))