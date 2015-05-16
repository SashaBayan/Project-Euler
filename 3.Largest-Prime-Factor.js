// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

var largestPrime = function(n){
  var prime = 2;
  //find the square root of n and round it up
  for (var i = 1; i < n; i++) {
    if(isPrime(i)){
      prime = i;
    }
  };
  return prime;
}

var isPrime = function(n){
  var root = Math.ceil(Math.sqrt(n));
  for (var i = 2; i <= root; i++) {
    if(n % i === 0){
      return false;
    }
  };
  return true;
}