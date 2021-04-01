import words from 'an-array-of-english-words';
    
    const letterCount = letters => letters.reduce((acc, letter) => ({
        ...acc,
        [letter]: acc[letter] ? acc[letter]+1 : 1
    }), {})

    const hasSameLetterCount = (word1, word2) => {
        const wordCount1 = letterCount((word1+'').split(''));
        const wordCount2 = letterCount((word2+'').split(''));

        return Object.keys(wordCount1).length === Object.keys(wordCount2).length
        && Object.keys(wordCount1).every(letter => wordCount1[ letter] === wordCount2[letter]);
    }

    const findAnagrams = (word, allWords) => {
        return allWords
        .filter(entry => hasSameLetterCount(word, entry))
        .filter(anagram => anagram !== word);
    }

console.log(findAnagrams('cinema', words));


/*
    Expected output: ['iceman', 'anemic']
*/