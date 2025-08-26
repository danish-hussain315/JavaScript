




var twoSum = function(nums, target) {
  let firstIndex = 0
  let secondIndex = 0
  for(let i=0; i<nums.length ; i++){
    for (let j = 0; j < nums.length; j++) {
      if(i == j){
        continue
      }else if((nums[i] + nums[j]) == target){
        console.log(nums[i] , " " ,nums[j]);
        firstIndex = i
        secondIndex = j
        break
      }
    }
    if(firstIndex !=0 || secondIndex != 0){
      break
    }
  }
  return [firstIndex , secondIndex]
};

console.log(twoSum([2,7,11,15] , 9));



// By Gpt
/* 
var twoSum = function(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];  // Found the pair
    }

    map.set(nums[i], i);  // Store current number and its index
  }
}; */