// your implementation

const map = function (callback) {
  const objectEntries = Object.entries(this)
  const mappedEntries = objectEntries.map(entry => callback(entry))
  return Object.fromEntries(mappedEntries)
};

const filter = function (callback) {
  const objectEntries = Object.entries(this)
  const filteredEntries = objectEntries.filter(entry => callback(entry))
  return Object.fromEntries(filteredEntries)
};

const invert = function () {
  const objectEntries = Object.entries(this)
  const invertedEntries = objectEntries.map(entry => entry.reverse())
  return Object.fromEntries(invertedEntries)

}

const merge = function (...objects) {
  const mergedEntries = objects.reduce((acc, object) => {
    const entries = Object.entries(object)
    entries.forEach(element => {
      acc.push(element)
    })
    return acc
  }, [])
  return Object.fromEntries(mergedEntries)
}

const all = function (callback) {
  const objectValues = Object.values(this)
  return objectValues.every(value => callback(value))
}

const some = function (callback) {
  const objectValues = Object.values(this)
  return objectValues.some(value => callback(value))
}


export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
