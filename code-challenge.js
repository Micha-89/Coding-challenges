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