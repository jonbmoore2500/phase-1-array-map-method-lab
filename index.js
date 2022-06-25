const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(element => {
    let arrayOfWords = element.split(' ');
    let cappedWords = arrayOfWords.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    let newSentence = cappedWords.join(' ');
    return newSentence;
  });
}


console.log(titleCased())

// const splitWordsFunc = function(input) {
//   let words = input.split(' ');
//   return words;
// }

// const capFirstLetterFunc = function(word) {
//     console.log(word);
//     //return word.charAt(0).toUpperCase() + word.slice(1);
// }

// const titleCased = () => {
//   return tutorials.map(splitWordsFunc).map(capFirstLetterFunc);
//   //return tutorialsFinal.map(capFirstLetterFunc);
// }

// console.log(titleCased());

// // test strings - string, array, nested array, etc
// const testString = 'Listen here you little shit';
// const testArray1 = ['Listen here you little shit'];
// const testArray2 = [ 'Listen here', 'you little', 'shit'];
// const masterArray2 = [ 'Listen here', 'you little', 'shit'];
// const testArray3 = [[ 'Listen here you little shit'], ['why am I here?']]

// // function that splits string into separate strings in array                
// const splitWordsFunc = function(input) {
//     let words = input.split(' ');
//     return words;
// }

// // function that capitalizes the first letter in a string
// const capitalizeFirstLetter = function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// }

// // function that takes an array made up of separate strings (see splitWordsFunc)
// // and rejoins into a single string
// const recombineArrayToString = function(splitArray) {
//   let newArray = [];  
//   newArray.push(splitArray.join(' '));
//   return newArray;
// }

// // function that takes array with one big sentence, breaks it into words,
// // capitalizes first letter of each word, rejoins into one sentence.
// const  fullProcess1 = function(array) {
//   let placeholder1 = splitWordsFunc(array[0]);
//   return recombineArrayToString(placeholder1.map(capitalizeFirstLetter));
// }

// // same thing, but it works with nested arrays. use fullProcess1 as a callback
// // once I split the subarrays out? holy shit it was that easy. 
// const fullProcessNested = function(array) {
//   return array.map(fullProcess1);
// }

// // function that does all this with a single array containing multiple strings, 
// // instead of a master array containing multiple sub-arrays with one string each.
// // will need to take each array element, perform fullProcess1, and push that into new
// // array, since recombining array would just make one long string. 
// const titleCasedTest = () => {
//   let newArray = testArray2.map(splitWordsFunc);
//   return newArray;
// }

// // function that takes array of words, maps each word into new string
// // after running capitalizeFirstLetter on it, making each word capitalized
// // const firstLettersCapTest = testArray2.map(capitalizeFirstLetter)

// // const firstLetterCapTestNested = testArray3.map()

// // testing console logs
// // console.log('Test String: ' + testString)
// // console.log(splitWordsFunc(testArray1[0]));
// // console.log(capitalizeFirstLetter('chicken'))
// // console.log(firstLettersCapTest);
// // console.log(recombineArrayToString(testArray2));
// // console.log(fullProcess1(testArray1));
// // console.log(fullProcessNested(testArray3));
// // console.log(testArray3[1][0].charAt(2));

// console.log(titleCasedTest()); 