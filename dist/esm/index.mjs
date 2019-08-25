'use strict';

export default function camelCase(text) {
  return join(split(text));
}

function split(text) {
  let words = text.match(/[A-Za-z0-9]+/g) || [];

  if (words.length === 1 && words[0].length === text.length) {
    if (/[a-z]/.test(text)) {
      words = splitCamelCase(text);
    }
  }

  return words;
}

function splitCamelCase(text) {
  const foundFirstUpperCase = /[A-Z]/.exec(text);
  if (!foundFirstUpperCase) {
    return [text];
  }

  const pattern = /[A-Z][a-z0-9]*/g;

  // PascalCase
  if (foundFirstUpperCase.index === 0) {
    return text.match(pattern);
  }

  // camelCase
  const words = text.slice(foundFirstUpperCase.index).match(pattern);
  words.unshift(text.slice(0, foundFirstUpperCase.index));
  return words;
}

function join(words) {
  if (!words.length) {
    return '';
  }

  let word = String(words[0]);
  let ret = word.toLowerCase();

  for (let i = 1, n = words.length; i < n; i++) {
    word = String(words[i]);
    ret += word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  }

  return ret;
}

Object.defineProperties(camelCase, {
  split: {
    enumerable: true,
    value: split,
  },
  join: {
    enumerable: true,
    value: join,
  },
});
