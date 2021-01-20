const convertPromiseToArray = (array, promise) => {
    return Promise.resolve(promise).then(value => {
        array.push(value)
        return array
    })
}


const allPromises = promises => new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
        resolve(promises)
    } else {
        const result = promises.reduce((accumulator, promise) => {
            return accumulator.then(array => convertPromiseToArray(array, promise))
        }, Promise.resolve([]))
        resolve(result)
    }
})



export { allPromises };
