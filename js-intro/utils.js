/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* runs test to see if expected array is equal to array returned by function2test argument */
function arraysTest(a, b) {
    if (a === b) return "TEST SUCCEEDED";
    if (a == null || b == null) return "TEST FAILED.  Expected " + a + " found " + b;
    if (a.length !== b.length) return "TEST FAILED.  Expected " + a + " found " + b;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return "TEST FAILED.  Expected " + a + " found " + b;
    }
    return "TEST SUCCEEDED";
}

/* max returns the maximum of 2 arguments */
// Define a function max() that takes two numbers as argument
//   and returns the largest of them. Use the if-then-else
//   construct available in Javascript.
function max(first, second) {
    if (first > second) {
        return first;
    } else {
        return second;
    }
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
// Define a function maxOfThree() that takes three numbers
//   as arguments and returns the largest of them.
function maxOfThree(first, second, third) {
    return first > second
        ? first > third
            ? first
            : third
        : second > third
            ? second
            : third;
}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));


// Write a function isVowel() that takes a character (i.e. a string of length 1)
//   and returns true if it is a vowel, false otherwise.
function isVowel(character) {
    return character !== undefined && (
        character === 'a'
        || character === 'e'
        || character === 'i'
        || character === 'o'
        || character === 'u'
    );
}
console.log("Expected output of isVowel('c') is false  " + myFunctionTest(false, isVowel('c')));
console.log("Expected output of isVowel('e') is true  " + myFunctionTest(true, isVowel('e')));
console.log("Expected output of isVowel(123) is false  " + myFunctionTest(false, isVowel(123)));
console.log("Expected output of isVowel(undefined) is false  " + myFunctionTest(false, isVowel(undefined)));


// Define a function sum() and a function multiply() that sums and multiplies
//   (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4])
//   should return 10, and multiply([1,2,3,4]) should return 24.
function sum(arr) {
    return !arr ? undefined : arr.reduce(function (acc, elem) { return acc + elem; }, 0);
}
console.log("Expected output of sum([20, 10, 3.5]) is 33.5  " + myFunctionTest(33.5, sum([20, 10, 3.5])));
console.log("Expected output of sum([]) is 0  " + myFunctionTest(0, sum([])));
console.log("Expected output of sum(undefined) is undefined  " + myFunctionTest(undefined, sum(undefined)));

function multiply(arr) {
    if (!arr || !arr.length) return undefined;
    return arr.reduce(function (acc, elem) { return acc * elem; }, 1);
}
console.log("Expected output of multiply([20, 10, 3.5]) is 700  " + myFunctionTest(700, multiply([20, 10, 3.5])));
console.log("Expected output of multiply([]) is undefined  " + myFunctionTest(undefined, multiply([])));
console.log("Expected output of multiply(undefined) is undefined  " + myFunctionTest(undefined, multiply(undefined)));


// Define a function reverse() that computes the reversal of a string
//   For example, reverse("jag testar") should return the string "ratset gaj"
function reverse(str) {
    if (str === undefined) return undefined;
    let returnStr = (' ' + str).slice(1);
    return returnStr.split('').reverse().join('');
}
console.log("Expected output of reverse('undefined') is 'denifednu'  " + myFunctionTest('denifednu', reverse('undefined')));
console.log("Expected output of reverse(1234) is '4321'  " + myFunctionTest('4321', reverse(1234)));
console.log("Expected output of reverse('') is ''  " + myFunctionTest('', reverse('')));
console.log("Expected output of reverse(undefined) is undefined  " + myFunctionTest(undefined, reverse(undefined)));

// Write a function findLongestWord() that takes an array of words
//   and returns the length of the longest one.
function findLongestWord(arrayOfWords) {
    if (arrayOfWords === undefined) return undefined;

    let result = '';
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (('' + arrayOfWords[i]).length > result.length) {
            result = '' + arrayOfWords[i];
        }
    }
    return result;
}
console.log("Expected output of findLongestWord(['nene', 'a', '']) is 'nene'  " + myFunctionTest('nene', findLongestWord(['nene', 'a', ''])));
console.log("Expected output of findLongestWord([1234, 'a', '']) is '1234'  " + myFunctionTest('1234', findLongestWord([1234, 'a', ''])));
console.log("Expected output of findLongestWord(['', '', '']) is ''  " + myFunctionTest('', findLongestWord(['', '', ''])));
console.log("Expected output of findLongestWord([]) is ''  " + myFunctionTest('', findLongestWord([])));
console.log("Expected output of findLongestWord(undefined) is undefined  " + myFunctionTest(undefined, findLongestWord(undefined)));

// Write a function filterLongWords() that takes an array of words
//   and an integer i and returns the array of words that are longer than i.
function filterLongWords(arrayOfWords, i) {
    if (!arrayOfWords || typeof i !== "number") return undefined;
    return arrayOfWords.filter(function (word, idx, array) {
        return ('' + word).length > i;
    }, []);
}
console.log("Expected output of filterLongWords(['nene', 'a', ''], 2) is ['nene']  " + arraysTest(['nene'], filterLongWords(['nene', 'a', ''], 2)));
console.log("Expected output of filterLongWords([1234, 'art', 'tar'], 3) is ['1234']  " + arraysTest([1234], filterLongWords([1234, 'art', 'tar'], 3)));
console.log("Expected output of filterLongWords([1234, 'art', 'tar'], 6) is []  " + arraysTest([], filterLongWords([1234, 'art', 'tar'], 6)));
console.log("Expected output of filterLongWords([], 0) is ''  " + arraysTest('', filterLongWords([], 0)));
console.log("Expected output of filterLongWords(undefined, 5) is undefined  " + arraysTest(undefined, filterLongWords(undefined, 5)));
console.log("Expected output of filterLongWords([1234, 'art', 'tar'], 'r') is undefined  " + arraysTest(undefined, filterLongWords([1234, 'art', 'tar'], 'r')));
