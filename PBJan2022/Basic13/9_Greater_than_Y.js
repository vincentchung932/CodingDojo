function ReturnArryCountGreatThanY(arr,y){
    let count = 0
    for (let i = 0;i<arr.length;i++){
        if(arr[i]>y){
            console.log(arr[i])
            count ++
            console.log("count=",count)
        }
    }
}


const arr1 = [1,5,86,3,2,88,47,6]
const y =20

ReturnArryCountGreatThanY(arr1,y)
