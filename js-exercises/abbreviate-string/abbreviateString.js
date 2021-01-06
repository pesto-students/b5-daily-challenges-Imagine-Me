import { isString } from "util";

function abbreviateString(str) {
    if (!isString(str)) {
        throw new Error("Invalid string")
    }
    const stringArray = str.split(' ')
    if (stringArray.length < 2)
        return stringArray.toString()

    const firstWord = stringArray.shift()
    const lastWord = stringArray.pop()
    const lastCharacter = lastWord.charAt(0)

    return `${firstWord} ${lastCharacter.toUpperCase()}.`
}


export { abbreviateString };
