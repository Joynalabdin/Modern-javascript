function evenify(element){
    if (nums % 2 ==0) {
        console.log(element, ":Number is even")  
    }
    else{
        console.log(element, ":Number is odd")
    }
    
}

nums = [11,22,33,44,55]
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    evenify(element)

}

friend_age = [12,13,14,15,16];
for (let i = 0; i < friend_age.length; i++) {
    const age = friend_age[i];
    evenify(age)
    
}

