const num = [1,2,7,2,3,9];
const target = 12;

const findPair = (nums, target)=>{
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                console.log(`Pair found (${nums[i]}, ${nums[j]}).`);
                return;
            }
        }
    }

    console.log("Pair not found.")
}

findPair(num, target)