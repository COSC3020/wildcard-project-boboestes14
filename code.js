function WSsolver(wordSearch, wordList){
    common = commonLetterWS(wordSearch) 
    let answers = {}
    wordList.forEach(word => {
        lookFor = commonLetterWord(word, common)
        answers[word] = searching(wordSearch, word, lookFor)
    })
    //something to make it concurrent here
    return answers
}


//This is for finding the most common letter in a word search
function commonLetterWS(wordSearch){
    allLetters = wordSearch.flat();

    letterCounts = {}
    allLetters.forEach(letter => {
        letter = letter.toUpperCase()
        letterCounts[letter] = (letterCounts[letter] || 0) + 1
    })

    sortedLetters = Object.entries(letterCounts)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0])
        .reverse()

    return sortedLetters
}

//this is for finding the best letter to look for in a word for the wordsearch.
function commonLetterWord(word, commonLettersList){
    letters = word.split('')

    best = commonLettersList.length+1
    ind = 0
    letters.forEach((letter, index) => {
        letter = letter.toUpperCase() 
        for(i = 0; i < commonLettersList.length-1; i++){
            if(letter == commonLettersList[i] && i < best){
                best = i
                ind = index
                i = commonLettersList.length+1
            }
        }
    })
    return ind
}

//this is the function that finds the word.
function searching(wordSearch, word, index){
    answers = []
    options = []
    wordSearch.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            if(col.toUpperCase() == word[index].toUpperCase()){
                const options = Array.from({ length: 8 }, () => '')
                Array.from(word).forEach((_, direction) => {
                    options[0] += check(wordSearch, 1, 1, rowIndex, colIndex, word, direction, index) || '' // upleft
                    options[1] += check(wordSearch, 0, -1, rowIndex, colIndex, word, direction, index) || '' // up
                    options[2] += check(wordSearch, -1, 1, rowIndex, colIndex, word, direction, index) || '' // upright
                    options[3] += check(wordSearch, 1, 0, rowIndex, colIndex, word, direction, index) || '' // left
                    options[4] += check(wordSearch, -1, 0, rowIndex, colIndex, word, direction, index) || '' // right
                    options[5] += check(wordSearch, 1, -1, rowIndex, colIndex, word, direction, index) || '' // downleft
                    options[6] += check(wordSearch, 0, 1, rowIndex, colIndex, word, direction, index) || '' // down
                    options[7] += check(wordSearch, -1, -1, rowIndex, colIndex, word, direction, index) || '' // downright
                });
                options.forEach(op => {
                    if (op.split("").reverse().join("") == word) {
                        answers.push([rowIndex, colIndex])
                    }
                });
            }
        })
    })
    return answers
}

function check(wordSearch, x, y, row, col, word, time, index) {
    length = word.length-index-1
    if (
        row + length * x >= 0 &&
        row - index * x >= 0 &&
        row + length * x < wordSearch.length &&
        row - index * x < wordSearch.length &&
        col + length * y >= 0 &&
        col - index * y >= 0 &&
        col + length * y < wordSearch[0].length &&
        col - index * y < wordSearch[0].length
    ) {
        return wordSearch[row + length * x - time * x][col + length * y - time * y];
    }
    return undefined;
}
