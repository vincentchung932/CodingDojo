// Create a function that accepts an array. Every time that array has three odd values in a
// row, print "That’s odd!" Every time the array has three evens in a row, print "Even more
// so!"

function evensAndOdds(arr){
    var count_even = 0
    var count_odd = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i]%2 === 1){
            count_odd += 1
            count_evens =0
            if(count_odd % 3 === 0){
                console.log("That’s odd!")
                
            }
        } 
        else {
            count_even += 1
            count_odd = 0
            if(count_even % 3 === 0){
                console.log("Even more so!")
                
            }
        }
    }
}

//case1
console.log("case1")
arr1 = [1, 3, 5, 1, 3, 3, 6, 4, 4, 1, 2, 3]
evensAndOdds(arr1)

//case2
console.log("case2")
arr2 = [5,1,9,7,34,5]
evensAndOdds(arr2)