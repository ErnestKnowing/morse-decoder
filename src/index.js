const MORSE_TABLE = {
  " ": " ",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let resultMorse = "";
  let arrBinary = [];
  let arrMorse = [];
  let arrWord = [];
  //split elements by 10 characters
  for (let i = 0; i < expr.length; i += 10) {
    let two = expr.slice(i, i + 10);
    if (two.length === 10) {
      if (two === "**********") {
        arrBinary.push(" ");
      } else {
        arrBinary.push(two);
      }
    }
  }
  //Morse code translation
  for (let x = 0; x < arrBinary.length; x++) {
    for (let y = 0; y < arrBinary[x].length; y += 2) {
      let pair = arrBinary[x].slice(y, y + 2);
      if (pair === "10") {
        resultMorse += ".";
      }
      if (pair === "11") {
        resultMorse += "-";
      }
      if (pair === " ") {
        resultMorse += " ";
      }
    }
    arrMorse.push(resultMorse);
    resultMorse = ""; //reset for new line
  }
  //from morse to words
  for (let j = 0; j < arrMorse.length; j++) {
    for (const key in MORSE_TABLE) {
      if (key === arrMorse[j]) {
        arrWord.push(MORSE_TABLE[key]);
      }
    }
  }
  return arrWord.join("");
}

module.exports = {
  decode,
};
