//write your code here
const pluralize = words => words.map(word => word + 's');

const animals = ['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']
console.log(pluralize(animals)) // 

const upperCase = words => words.map(word => word[0].toUpperCase() + word.substr(1, word.length));
console.log(upperCase(animals));

const longWords = words => words.filter(word => word.length > 3);
console.log(longWords(animals));

const shortWords = words => words.filter(word=> word.length < 5);
console.log(shortWords(animals));

const oddLength = words => words.filter(word => word.length % 2 !== 0);
console.log(oddLength(animals));

const longToShort = words => words.sort((a,b) => b.length - a.length);
console.log(longToShort(animals));

const numbers = [22, 15, 1114, 416, 37, 4]
const sum = words => words.reduce((a,b) => a + b);
console.log(sum(numbers));

