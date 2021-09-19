/* Veuillez entrer dans ce fichier le code permettant de répondre aux questions. */

/**
 *
 *
 * DEBUT 14h02
 *
 *
 */
function splitTestText(delimiter) {
  const str = document.getElementById('inner');
  return str.innerHTML.split(delimiter);
}

// 1.
function getNumberOfLinesContainingText() {
  const testTextSplit = splitTestText('<br>');

  return testTextSplit.filter((el) => el !== '' && !el.includes('\n')).length;
}

const linesOfText = getNumberOfLinesContainingText();
console.log({ linesOfText });

// 2.
function getEmptyAndNonEmptyLinesCount() {
  const testTextSplit = splitTestText('<br>');

  const result = { empty: 0, text: 0 };

  testTextSplit.forEach((el) => {
    if (el !== '' && !el.includes('\n')) {
      return result.text++;
    }

    result.empty++;
  });
  return result;
}

const { empty, text } = getEmptyAndNonEmptyLinesCount();
console.log({ text, empty });

// 3.
function getWords() {
  const testTextSplit = splitTestText('<br>');
  const textLines = testTextSplit.filter((el) => el !== '' && !el.includes('\n'));

  return textLines
    .join(' ')
    .split(/\W|\.|-\,\;/g)
    .filter((el) => el !== '');
}

function getNumberOfWords() {
  return getWords().length;
}

const numberOfWords = getNumberOfWords();
console.log({ numberOfWords });

// 4.
function printWordsInAscendingOrder() {
  const words = getWords();
  const similarWords = getSimilarLengthWords(words);

  const result = {};

  for (const [key, value] of Object.entries(similarWords)) {
    value.sort(function (a, b) {
      if (a.toString().toLowerCase() < b.toString().toLowerCase()) {
        return -1;
      }
      if (a.toString().toLowerCase() > b.toString().toLowerCase()) {
        return 1;
      }
      return 0;
    });

    result[key] = value;
  }

  for (const sortedWordArray of Object.values(result)) {
    console.log(sortedWordArray.join(', '));
  }
}

function getSimilarLengthWords(words) {
  const result = {};

  words.forEach((el, i) => {
    let index = 0;

    while (true) {
      if (el.length === index) {
        if (!result[index]) {
          result[index] = [];
        }
        result[index].push(el);
        break;
      }

      index++;
    }
  });

  return result;
}

printWordsInAscendingOrder();
/**
 *
 *
 * FIN 14h50
 *
 *
 */
