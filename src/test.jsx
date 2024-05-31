const search = 'Ba'

const word = 'Banana';
const splitString = word.split(search);
const regex = new RegExp(search, 'gi');
const matches = (word.match(regex) || []);
const matches1 = (word.split(search).filter(letter => letter.toLowerCase().includes(search.toLowerCase())));


console.log('regex matches: ', matches);
console.log('filter matches: ', matches1);

const result = [];

for (let i = 0; i < word.length; i++) {
    splitString[i] && result.push(splitString[i]);
    matches[i] && result.push(matches[i]);
}
