/* Word-Finder - Copyright (c) 2015 Victor Nogueira - License: MIT - Version: 1.0.1 */
window.addEventListener('load', function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();
        var functionStartTime = new Date().getTime();
        var search = document.getElementById('word').value;
        var wantedLetters = search.toLowerCase().split('');
        var possibleWords = [];
        words.forEach(function (word) {
            var wordLetters = word.split('');
            if (word.length >= search.length) {
                for (var i = 0; i < wantedLetters.length; i++) {
                    if (wantedLetters[i] !== '*' && wantedLetters[i] !== wordLetters[i]) {
                        break;
                    }
                    else if (i == wantedLetters.length - 1) {
                        possibleWords.push('(' + word.length + ') ' + word);
                    }
                }
            }
        });
        possibleWords.sort(function (a, b) {
            return a.length - b.length;
        });
        var searchResult = '';
        if (possibleWords.length > 0) {
            searchResult = '<ul><li>' + possibleWords.join('</li><li>') + '</li></ul>';
        }
        var functionEndTime = new Date().getTime();
        document.getElementById('wordsFound').innerHTML = '<p>Palavras Encontradas: ' + possibleWords.length + ' (' + parseInt(functionEndTime - functionStartTime) + ' ms)</p>' + searchResult;
        document.getElementById('submitButton').style.display = 'none';
    });
    document.getElementById('word').addEventListener('keyup', function (event) {
        document.getElementById('wordsCount').innerHTML = 'Letras: ' + document.getElementById('word').value.length.toString();
        if (event.keyCode != 13) {
            document.getElementById('submitButton').style.display = 'initial';
        }
    });
});