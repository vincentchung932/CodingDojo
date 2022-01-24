// finish time example[11,"am", "Wednesday"]

function reward_feature1(time){
    const reward_pool1 = ["ice cream", "cookies","candy"]
    const reward_pool2 = ["chocolate", "tea","cake"]
    if (time[1] === "pm"){
        time[0] += 12
    }
    if (time[0] <= 10){
        console.log("latte")
    }
    else if(time[0] <= 15){
        console.log("hot chocolate")
    }
    else if(time[0] <= 22){
        if(time[0]%2 === 0){
            var temp = reward_pool1[Math.floor(Math.random()*reward_pool1.length)]
            if(temp == "ice cream"){
                console.log("ice cream")
                if (time[2]=='Wednesday'){
                    console.log("Strawberry flavor!")
                }
                else{
                    console.log("Vanilla flavor!")
                }
            }
            else{
                console.log(temp)
            }
        }
        else{
            var temp = reward_pool2[Math.floor(Math.random()*reward_pool1.length)]
            console.log(temp)
        }
    }
    else{
        console.log("GO TO SLEEP")
    }
}

// Case1
console.log("case1")
var time1 = [3,"pm","Wednesday"]
reward_feature1(time1)

// Case2
console.log("case2")
var time2 = [4,"pm","Wednesday"]
reward_feature1(time2)

// Case3
console.log("case3")
var time3 = [5,"pm","Sunday"]
reward_feature1(time3)