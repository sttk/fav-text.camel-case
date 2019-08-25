declare function camelCase(text: string): string;
declare namespace camelCase {
  function split(text: string): string[];
  function join(words: string[]): string;
}
export = camelCase;
