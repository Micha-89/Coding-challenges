/* Write a function that replaces 'two', 'too' and 'to' with the number '2'. Even if the sound is found mid word (like in octopus) or not in lowercase grandma still thinks that should be replaced with a 2. Bless her. */

function textin(str){
    //  The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

    /* REGEX ->
    g : Global Flag, searches for multiple matches instead of stopping at the first match 
    i : Ignore case Flag, ignores the case(uppercase/lowercase) of the input string
    | : pipe, indicates alternation, that is, a given choice of alternatives, similar to || in regular JS
    */

    return str.replace(/two|too|to/gi, '2')
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* We all love fridays, and even better if it is the last day of the month!

In this kata you should write a function that will receive 2 parameters. Both are years, and indicates a range.

Your work is to return the number of times a month ends with a Friday.

If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case! */

// Own solution: 

function lastDayIsFriday(initialYear, endYear) {

    let counter = 0;

    // in case second paramter is not filled in it will be undefinded
    if(endYear === undefined) {
      for(let j = 1; j < 13; j++) {
        /* MDN: Creates a JavaScript Date instance that represents a single moment in time
        new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
        SO: Setting day parameter to 0 means one day less than first day of the month which is last day of the previous month.*/
        var d = new Date(initialYear, j, 0);
        // getDay() says what day of the week this date is, sunday (0) to saturday (6)
        if(d.getDay() === 5) {
          counter++
        }
      }
      return counter
    }
    
    for(let i = initialYear; i < endYear + 1; i++) {
      for(let j = 1; j < 13; j++) {
        var d = new Date(i, j, 0);
        if(d.getDay() === 5) {
          counter++
        }
      }
    }
    return counter;
  }

// Best practice solution others: 

// = sets the default, to use in case parameter not filled in
function lastDayIsFriday(initialYear, endYear = initialYear) {
    let fridays = 0
    for (let y = initialYear; y <= endYear; y++) {
      for (let month = 0; month < 12; month++) {
        if (new Date(y, month + 1, 0).getDay() === 5) fridays++
      } 
    }
    return fridays
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string. */

decodeMorse = function(morseCode){
  const wordsArr = morseCode.split('   ')

  for(let i = 0; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i].split(' ')
  }
  
  for(let i = 0; i < wordsArr.length; i++) {
    for(let j = 0; j < wordsArr[i].length; j++) {
      wordsArr[i][j] = MORSE_CODE[wordsArr[i][j]]
    }
  }
  
  for(let i = 0; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i].join('')
  }
  
  // trim() trims spaces from front and back of string
  return wordsArr.join(' ').trim()
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1. Then replace any incidence of the number 7 with the number 1, and call this number 'total2'. Then return the difference between the sum of the digits in total1 and total2. */

// solution one:

function calc(x){
  
  const resultArr = [];
  
  for (i = 0; i < x.length; i++) {
    // MDN: The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
    resultArr.push(x[i].charCodeAt(0))
  }

  const total1 = resultArr.join('');
  const total2 = resultArr.join('').split('').map(char => (char === '7') ? char = '1' : char = char).join('');
  
  const reduceTotal1 = total1.split('').reduce((acc,currVal) => Number(acc) + Number(currVal));
  const reduceTotal2 = total2.split('').reduce((acc,currVal) => Number(acc) + Number(currVal));
  
  return reduceTotal1 - reduceTotal2
  
}

//solution two, using REGEX:

function calc(x){
  const total = x.split('').map(char => char.charCodeAt(0)).join('');
  return total.split('').reduce((a,b)=>Number(a)+Number(b)) - total.replace(/7/gi, '1').split('').reduce((a,b)=>Number(a)+Number(b))
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers. */

function smallEnough(a, limit){
  let test = true;
  a.forEach(number => {if(number > limit) test = false})
  return test
}

// other solutions: 

function smallEnough(a, limit){
  // use spread operator to spread out array in Math.max, does not function with array as a param
  return Math.max(...a) <= limit
}

// MDN: The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. (you also have some() which checks if some elements pass a test) 
smallEnough = (a, l) => a.every(e => e <= l)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed. */

function disemvowel(str) {
  // [] in regex ->	any of 
  return str.replace(/[ieaou]/ig, '');
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sockMerchant(n, ar) {
  const testObj = {};
  ar.forEach(num => (testObj[num] !== undefined) ? testObj[num]++ : testObj[num] = 1);
  let counter = 0;
  Object.values(testObj).forEach(amount => counter += Math.floor(amount/2));
  return counter
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. If the digits can't be rearranged to form a bigger number, return -1. */

function nextBigger(n){
  const sortedNum = JSON.stringify(n).split('').sort((a,b) => b - a).join('');
  if(sortedNum === JSON.stringify(n)) return -1;
  // MDN: The global property Infinity is a numeric value representing infinity.
  for(i = n +1; i < Infinity; i++) {
    if(JSON.stringify(i).split('').sort((a,b) => b - a).join('') === sortedNum) return i;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched. Punctuation marks are always seperated by a space from the words.*/

//my solution:

function pigIt(str){
  return str.split(' ').map(word => { if (word !== '!' && word !== '?' && word !== '.') { return word.slice(1) +  word.slice(0,1) + 'ay'; } return word;}).join(' ');
 }

//other solutions: 

function pigIt(str){
  //MDN: The test() method tests for a match in a string. This method returns true if it finds a match, otherwise it returns false.
  return str.split(' ').map(word => (/[a-zA-Z]/).test(word) ? `${word.slice(1)}${word[0]}ay` : word).join(' ')
}

function pigIt(str){
  //MDN: The match() method retrieves the result of matching a string against a regular expression.
  //MDN: The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
  return str.split(" ").map(word => word.match(/[A-z]/i) ? `${word.substr(1)}${word[0]}ay` : word).join(" ")
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences. */

function topThreeWords(text) {
  const cleanedArr = text.trim().replace(/[.,:/]/gi, '').replace(/  |   /gi, ' ').toLowerCase().split(' ').filter(word => word !== '' && word !== '\'')
  const compareObj = {};
  cleanedArr.forEach(word => (compareObj[word] === undefined) ? compareObj[word] = 1 : compareObj[word]++);
  //MDN: The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs
  const sortedArr = Object.entries(compareObj).sort((a,b) => b[1] - a[1]);
  const resultsArr = [];
  for(i=0; i < 3; i++) {if (sortedArr[i] !== undefined) resultsArr.push(sortedArr[i][0])};
  return resultsArr;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. */

function duplicateCount(text){
  const compareObj = {};
  text.split('').forEach(el => compareObj[el.toLowerCase()] == undefined ? compareObj[el.toLowerCase()] = 1 : compareObj[el.toLowerCase()]++);
  return Object.entries(compareObj).filter(el => el[1] > 1).length;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Given a string of characters find the first character that occurs only once.*/

function firstOccurance(s) {
  const compareObj = {};
  for(i=0; i < s.length; i++) {
    (compareObj[s[i]] === undefined) ? compareObj[s[i]] = 1 : compareObj[s[i]]++;
  }
  const firstIndex = Object.values(compareObj).indexOf(1);
  return Object.keys(compareObj)[firstIndex]
}

//other solutions: 

function FirstUniqueCharacter(s){
  for (let i = 0; i<s.length; i++){
    let j = s.charAt(i)
    // MDN: The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
    if (s.indexOf(j) == s.lastIndexOf(j)){
      return j; 
    }
  }  
}

function findCharacter(str) {
  // using reduce to create an object with data from array!
  const charOccObj = str.split("").reduce((obj, char) => {
    obj[char] = obj[char] === undefined ? 1 : obj[char] + 1;
    return obj;
  }, {})
  // looping over object using (for let ....(key) in ....(object name))
  for (let key in charOccObj) {
    if (charOccObj[key] === 1) return key;
  }
} 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa. People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about. */

function countSalutes(hallway) {
  let counterCommingFromLeft = 0;
  let encounters = 0;
  hallway.split('').forEach(char => {
    if (char == '>') counterCommingFromLeft++;
    if (char == '<' && counterCommingFromLeft !== 0) encounters += counterCommingFromLeft ;
  })
  return encounters * 2
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Big O scalability introduction (time complexity): 
// check if array contains 'Nemo'

// O(n) => linear time

// MDN: The Array() constructor is used to create Array objects.
// arrayLength: If the only argument passed to the Array constructor is an integer between 0 and 232-1 (inclusive), this returns a new JavaScript array with its length property set to that number 

const large = new Array(10000).fill('nemo');

function findNemo(array) {
  // MDN: The performance.now() method returns a DOMHighResTimeStamp, measured in milliseconds
  let t0 = performance.now();
  for(let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('found Nemo')
    }
  }
  let t1 = performance.now();
  console.log('call to find Nemo took ' + (t1-t0) + ' miliseconds');
}

// instead of measuring time with performance.now() (runtime) you can measure the number of operations (big O). Big O notation of above function is O(n) => linear time = number of operations depends on number of inputs, in this case array length

//O(1) Constant time = number of operations stays the same no matter how many elements (flat line on graph)
function compressFirstBox(boxes) {
  console.log(boxes[0])
}

// 6 operations but comes down to O(1) constant time, number of operations stays the same no matter input
function compressFirstBox(boxes) {
  console.log(boxes[0])
  console.log(boxes[1])
  console.log(boxes[2])
  console.log(boxes[3])
  console.log(boxes[4])
  console.log(boxes[5])
}

// nested loops => O(n^2) linear to the power of two = quadratic time (horrible in the Big O graph, slow)

// example O(n^2): create unique pairs from an array of strings

function createUniquePairs(array) {
  const duplicatePairs = [];
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if ( i !== j) {
        duplicatePairs.push([array[i], array[j]])
      }
    }
  }
  const sortedDuplicatePairs = duplicatePairs.map(pair => pair.sort()).map(pair => pair.join(' '));
  // Set is a new data object introduced in ES6. Because Set only lets you store unique values. When you pass in an array, it will remove any duplicate values.
  const uniquePairs = [... new Set(sortedDuplicatePairs)];
  
  return uniquePairs
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// solution one, indexof:

function returnPositionsOfSum (array,target) {
  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];
    if(array.indexOf(difference, i+1) !== -1) {
      return [i , array.indexOf(difference, i+1)]
    }
  }
  return null;
}

// solution two, nested loop:

const findTwoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++) {
    const numberToFind = target - nums[i];
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[j] === numberToFind) return [i,j]
    }
  }
  return null;
}

/* Big O of solution two
time complexity: O(n^2) quadratic => nested loop
space complexity: O(1) constant => declaration of three variables that are all O(1)
*/

// solution three using hashmap aka object: 

const findTwoSum = (nums, target) => {
  const numsMap = {};
  for(let i = 0; i < nums.length; i++) {
    const currentMapVal = numsMap[nums[i]];
    if(currentMapVal !== undefined) return [currentMapVal, i];
    const numberToFind = target - nums[i];
    numsMap[numberToFind] = i;
  }
  return null;
}

/* Big O of solution three 
time complexity: O(n) linear => one loop
space complexity: O(n) linear => create key value pair untill it finds a match, worst case for each int in array
compared to solution two: bring down time complexity by bringing up space complexity
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////

// given 2 arrays (no size limit) check if they contain common items
// return true if they do, false if they dont


// naive/brute force solution, best to avoid because of nested loop based on two different arrays that might be different in length O(a*b) time complexity, (O(n^2) is for nested loops with same array)
const checkIfCommonItems = (array1, array2) => {
  for( let i = 0; i < array1.length; i++) {
    for( let j = 0; j < array2.length; j++) {
      if(array1[i] === array2[j]) return true;
    }
  }
  return false;
}

// better time complexitiy O(a + b), space complexity is worse from O(1) to O(a)
const checkIfCommonItems = (array1, array2) => {
  const compareObject = {};
  array1.forEach(char => compareObject[char] = true);
  for (let i = 0; i < array2.length; i++) {
    if(compareObject[array2[i]] === true) return true;
  }
  return false;
}

// short version that is more readable, but nested loops: 

const checkIfCommonItems = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
  const compareObj = {};
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    (compareObj[letter] === undefined) ? compareObj[letter] = 1 : compareObj[letter] += 1;
  }
  const resultArr = [];
  for (let j = 0; j < word.length; j++) {
    const lookedUpLetter = compareObj[word[j].toLowerCase()];
    (lookedUpLetter > 1) ? resultArr.push(')') : resultArr.push('(');
  }
  return resultArr.join('')
}

// time complexity O(n) two for loops length depends on length string
// space complexity O(n) create an object with key value pares depent on length string

//////////////////////////////////////////////////////////////////////////////////////////////////////

// reverse a string

function reverse(str) {
  if(typeof str !== 'string') return 'invalid input, function requires string';
  const wordsArr = str.split(' ');
  const reversedWordsArr = wordsArr.map(word => word.split('').reverse().join(''));
  return reversedWordsArr.reverse().join(' ')
}

// super short version: 

const reverseString = str => [...str].reverse().join('');

//////////////////////////////////////////////////////////////////////////////////////////////////////

// given two sorted arrays, create one big array that is sorted

const mergeSortedArray = (arr1, arr2) => [...arr1 , ...arr2].sort((a,b) => a - b);

// with removing duplicates:

function mergeSortedArray (arr1, arr2) {
  const mergedSorted = [...arr1 , ...arr2].sort((a,b) => a - b);
  return [...new Set(mergedSorted)];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements. without making copy of array

var moveZeroes = function(nums) {
  let counterZeros = 0; 
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      nums.splice(i,1);
      i--;
      counterZeros++;
    }
  }
  for(let j = 0; j < counterZeros; j++){
    nums.push(0);
  }
  return nums;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// naive solution, bad time complecity: 

var rotate = function(nums, k) {
  for(let i = 0; i < k; i++) {
    const popedNum = nums.pop();
    nums.unshift(popedNum);
  }
  return nums;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////

/* Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567". Do not take ! and & into account */

function LongestWord(sen) { 
  sen = sen.replace(/[!&]/gi, '');
  const wordsArr = sen.split(' ');
  const lengthWordArr = [...wordsArr].map(word => word.length);
  const longestWordLength = Math.max(...lengthWordArr);
  const indexLongestWord = lengthWordArr.indexOf(longestWordLength);
  return wordsArr[indexLongestWord];                                         
}

//////////////////////////////////////////////////////////////////////////////////////////////////////