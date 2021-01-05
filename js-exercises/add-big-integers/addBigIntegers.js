function addBigIntegers(intString) {
    return intString.split('\n').reduce((acc, val) => {
        const output = []
        let number_1 = acc.split('').reverse()
        let number_2 = val.split('').reverse()
        let remainder = 0;
        for (let i = 0; i < number_1.length || i < number_2.length; i++) {
            let ans = (number_1[i] ? +number_1[i] : 0) + (number_2[i] ? +number_2[i] : 0) + remainder
            if (ans > 9) {
                output.push(ans.toString().split('').pop())
                remainder = 1
            } else {
                output.push(ans)
                remainder = 0
            }
        }
        if (remainder > 0)
            output.push(remainder)
        return output.reverse().join('')
    }, '')
}

export { addBigIntegers };
