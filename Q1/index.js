const concat = (char1 = "", char2 = "") => {
  return char1 + char2;
};
const alternatingOrder = (word1, word2) => {
  let res = "";
  for (let i = 0; i < word2.length; i++) res += concat(word1[i], word2[i]);
  return res;
};
const calcReminder = (word1, word2) => {
  return word1
    .split("")
    .slice(-(word1.length - word2.length))
    .join("");
};
var mergeAlternately = function (word1, word2) {
  let res = "",
    reminder = "";
  if (word1.length > word2.length) {
    reminder = calcReminder(word1, word2);
    word1 = word1.split("").slice(0, -reminder.length).join("");
    res = alternatingOrder(word1, word2);
  } else if (word1.length < word2.length) {
    reminder = calcReminder(word2, word1);
    word2 = word2.split("").slice(0, -reminder.length).join("");
    res = alternatingOrder(word1, word2);
  } else {
    res = alternatingOrder(word1, word2);
  }
  return res + reminder;
};

/*
Chatgpt recommendation Code : - 
const mergeAlternately = (word1, word2) => {
  const maxLength = Math.max(word1.length, word2.length);
  let mergedString = "";

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      mergedString += word1[i];
    }
    if (i < word2.length) {
      mergedString += word2[i];
    }
  }

  return mergedString;
};


*/
