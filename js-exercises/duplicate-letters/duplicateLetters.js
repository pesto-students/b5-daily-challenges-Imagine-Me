
function duplicateLetters(...args) {
  let count = 1;
  const result = {}
  args.forEach(string => {
    for (let letter of string) {
      result[letter] = result[letter] ? ++result[letter] : 1
      if (result[letter] > count)
        count = result[letter]
    }
  })
  return count > 1 ? count : false
}

export {
  duplicateLetters,
};
