import { MAX_LETTER_CODE, MIN_LETTER_CODE } from '../constants';

export const generateRandomLetter = (): string => {
  const charCode = Math.floor(
    Math.random() * (MAX_LETTER_CODE - MIN_LETTER_CODE + 1) + MIN_LETTER_CODE
  );

  let letter = String.fromCharCode(charCode);

  if (Math.random() < 0.5) letter = letter.toUpperCase();

  return letter;
};
