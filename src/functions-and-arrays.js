// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {

  //return num1 > num2 ? num1 : num2;

  if (num1 > num2) {
    return num1;
  }
  else {
    return num2
  }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arr) {

//return arr.length === 0 ? null : arr.reduce((longest, current) => current.length > longest.length ? current : longest);

  let longestWord = null;

  if (arr.length > 0) {
    longestWord = arr[0];
  }
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrOfNumbers) {
  //return numbers.reduce((total, current) => total + current, 0)

  let total = 0;

  for (let i = 0; i < arrOfNumbers.length; i++) {
    total += arrOfNumbers[i];
  }
  return total;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrOfNumbers2) {

  //return arrOfNumbers2.length === 0 ? 0 : arrOfNumbers2.reduce((total, current) => total + current, 0) / arrOfNumbers2.length;
  
  if (arrOfNumbers2.length === 0) {
    return 0;
  }

  let total1 = 0;

  for (let i = 0; i < arrOfNumbers2.length; i++) {
      total1 += arrOfNumbers2[i];
  }
  
  return total1 / arrOfNumbers2.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arr1, searchWord) {
  
  // return arr1.length === 0 ? null : arr1.includes(searchWord) ? true : false;

  if(arr1.length === 0) {
    return null;
  }
  else if (arr1.includes(searchWord)) {
    return true;
  }
  else {
    return false;
  }
}
