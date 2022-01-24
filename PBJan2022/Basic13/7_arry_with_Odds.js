function ReturnOddsArry1To255(){
    var result = []
    for (var i=1; i<=255;i++){
        if (i%2 != 0){
            result.push(i)
        }        
    }
    return result
}

console.log(ReturnOddsArry1To255())
