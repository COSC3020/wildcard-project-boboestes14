const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

wordSearch = [
    ['c','a','e','p','n'],
    ['z','b','l','o','o'],
    ['s','o','g','a','s'],
    ['w','d','u','s','a'],
    ['d','e','f','k','m']]
wordList = ['aal', 'abode', 'ala', 'def', 'fugle', 'mason', 'nog', 'plow', 'sagos', 'zouk']
test = (wordList.length == Object.entries(WSsolver(wordSearch, wordList)).length)
assert(test)

