// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

var largestPalindrome = function(lowest, highest){
  var palindromes = [];
  for (var i = lowest; i < highest; i++) {
    for (var j = lowest; j < highest; j++) {
      if(isPalindrome(i * j)){
        palindromes.push(i * j);
      }
    }
  }
  //write blog about the sorting algorithm and its interaction w/ numbers
  palindromes.sort(function(a, b){return a-b});
  return palindromes[palindromes.length - 1];
};

var isPalindrome = function(n){
  var str = JSON.stringify(n);
  var reverse = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  };
  if(str === reverse) return true;
};