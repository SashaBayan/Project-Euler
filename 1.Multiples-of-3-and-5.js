// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var sumOfMultiplesOf3And5 = function(number){
  var nums = [];
  var count = 1;
  while(count < number){
    if(count % 3 === 0 || count % 5 === 0){
      nums.push(count);
    } 
    count++;
  }
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  };
  if(sum !== 1){
    return sum;
  }
}

//sumOfMultiplesOf3And5(1000) --> 233168