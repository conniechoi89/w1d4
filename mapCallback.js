var words = ["ground", "control", "to", "major", "tom"];

var wordLength = words.map(function(eachWord) {
  return eachWord.length;
});
console.log(wordLength);

var upperCaseWords = words.map(function(eachWord) {
  return eachWord.toUpperCase();
});
console.log(upperCaseWords);

var reverseWords = words.map(function(eachWord) {
  return eachWord.split('').reverse().join('');
});
console.log(reverseWords);
