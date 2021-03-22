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
