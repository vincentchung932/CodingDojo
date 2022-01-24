



function identify(str){
    var spt_str = str.split(" ")
    const First_person = ['I', "me", "my", "mine", "myself","we","us","our","ourselves"]
    const Second_person = ["you", "your", "yours", "yourself", "yourselves"]
    const Third_person = ["he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves"]

    for (var i=0; i < spt_str.length; i++){
        
        if(First_person.includes(spt_str[i])){ 
            console.log("First person")
            break
        }
        if (Second_person.includes(spt_str[i])){
            console.log("Second person")
            break
        }
        if (Third_person.includes(spt_str[i])){
            console.log("Third person")
            break
        }  
    }
}


// case 1 
console.log("Case 1")
str1 = "I think I lost my wallet! I can’t find it anywhere! Oh, I could just kick myself!"
identify(str1)


// case 2 
console.log("Case 2")
str2 = "You should be proud of yourselves for finishing this enormous project!"
identify(str2)


// case 3 
console.log("Case 3")
str3 = "The concert goers roared their approval when they realized they’d be getting an encore."
identify(str3)