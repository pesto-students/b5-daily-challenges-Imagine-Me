import { isString } from "util";

function abbreviateString(string) {
    if (!isString(string)) {
        throw new Error('Invalid string')
    }
    const stringArray = string.split(' ')
    if (stringArray.length < 2)
        return stringArray.toString()

    const firstWord = stringArray.shift()
    const lastWord = stringArray.pop()
    const lastCharacter = lastWord.charAt(0)

    return `${firstWord} ${lastCharacter.toUpperCase()}.`
}


export { abbreviateString };
