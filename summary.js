const fs = require("fs");

const raw = fs.readFileSync("progress.txt", "utf-8");
const lines = raw.split("\n").map((line) => line.trim());

const words = [];
const hiragana = [];

lines.forEach((line) => {
  const [word, hira] = line.split(/\s/);
  words.push(word);
  hiragana.push(hira);
});

console.log("Total words", words.length);

const kanji = {};

words.forEach((word) => {
  const chars = word.split("");
  chars.forEach((char) => {
    if (/[一-龯]/u.test(char)) {
      kanji[char] = true;
    }
  });
});

console.log("Total Kanji", Object.keys(kanji).length);
