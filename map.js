function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        evenify(element)
    
    }
}
function evenify(element){
    if (nums % 2 ==0) {
        console.log(element, ":Number is even")  
    }
    else{
        console.log(element, ":Number is odd")
    }
    
}


nums = [11,22,33,44,55]
evenify_all(nums)

friend_age = [12,13,14,15,16];
evenify_all(friend_age)


