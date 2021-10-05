const alphabeticShift = string => {
  let result = '';
  for (const char of string) {
    result += getShiftedCharacter(char)
  }
  return result;
};

const getShiftedCharacter = (char) => {
  const ASCII_LAST_OF_UPPERCASE = 90
  const ASCII_LAST_OF_LOWERCASE = 122
  const TOTAL_ALPHABETS = 26

  let charCode = char.charCodeAt(0)
  if (charCode === ASCII_LAST_OF_UPPERCASE || charCode === ASCII_LAST_OF_LOWERCASE) {
    charCode -= TOTAL_ALPHABETS - 1
  } else {
    charCode++
  }
  return String.fromCharCode(charCode)
}

export { alphabeticShift };
