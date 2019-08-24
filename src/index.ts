function splitCamelCase(text: string): string[] {
  const foundFirstUpperCase: RegExpMatchArray | null = /[A-Z]/.exec(text);
  if (foundFirstUpperCase === null) {
    return [text];
  }

  const pattern = /[A-Z][a-z0-9]*/g;

  // PascalCase
  if (foundFirstUpperCase.index === 0) {
    return text.match(pattern) || [];
  }

  // camelCase
  const words: string[] =
    text.slice(foundFirstUpperCase.index).match(pattern) || [];
  words.unshift(text.slice(0, foundFirstUpperCase.index));
  return words;
}

function split(text: string): string[] {
  let words: string[] = text.match(/[A-Za-z0-9]+/g) || [];

  if (words.length === 1 && words[0].length === text.length) {
    if (/[a-z]/.test(text)) {
      words = splitCamelCase(text);
    }
  }

  return words;
}

function join(words: string[]): string {
  if (!words.length) {
    return '';
  }

  let word = String(words[0]);
  let ret: string = word.toLowerCase();

  for (let i = 1, n: number = words.length; i < n; i++) {
    word = String(words[i]);
    ret += word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
  }

  return ret;
}

function camelCase(text: string): string {
  return join(split(text));
}

Object.defineProperties(camelCase, {
  split: { enumerable: true, value: split },
  join: { enumerable: true, value: join },
});

declare namespace camelCase {
  export function split(text: string): string[];
  export function join(words: string[]): string;
}

export = camelCase;
