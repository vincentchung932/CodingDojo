for (var miles = 0; miles <= 6; miles+=2){
    if(miles > 0){
        console.log("Candy!")
    }
}

////////////////////////////////////////////////////////////
//Stretch Feature 1
var speed

function LDL(speed){
    for (var miles = 0; miles <= 6; miles+=2){
        if(miles > 0 && speed >= 5.5){
            console.log("Candy!")
        }
        
    }
}

//Case1
console.log("CASE1")
var speed1 = 3
LDL(speed1)

//Case2
console.log("CASE2")
var speed2 = 6
LDL(speed2)
