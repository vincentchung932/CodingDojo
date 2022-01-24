function howMuchLeftOverCake(numberOfPieces,numberOfPeople,numberOfPiecesEachPersonGet){
    var remaining
    remaining = numberOfPieces - numberOfPeople*numberOfPiecesEachPersonGet
    if (remaining<=0){
        console.log("No leftovers for you!" )
    }
    else if (remaining <= 2){
        console.log("You have some left overs" )
    }
    else if (remaining <= 5){
        console.log("You have left overs to share" )
    }
    else {
        console.log("Hold another party!" )
    }

}

// Case1 (12 cakes; 5 people; 1 pieces each)
console.log("Case1")
howMuchLeftOverCake(12,5,1)

// Case1 (12 cakes; 5 people; 2 pieces each)
console.log("Case2")
howMuchLeftOverCake(12,5,2)

// Case1 (12 cakes; 5 people; 3 pieces each)
console.log("Case3")
howMuchLeftOverCake(12,5,3)