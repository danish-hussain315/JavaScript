var twoSum = function(nums, target) {
  console.log(tar);
  
  let firstNumber = 0
  let secondNumber = 0
  for(let i=0; i<nums.length; i++){
      firstNumber = nums[i]
      for(let j=0; j<nums.lenth; j++){
          if(num[j] == nums[i]){
              continue
          }else if((firstNumber + nums[j]) == target){
              secondNumber = nums[j]
              break;
          }
      }
      if(firstNumber != 0 && secondNumber != 0){
      break;
      } 
  }
  return [firstNumber, secondNumber ]
};

console.log(twoSum([2,7,11,15] , 9));
