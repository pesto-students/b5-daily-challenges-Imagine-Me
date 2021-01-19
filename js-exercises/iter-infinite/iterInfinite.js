function* iterator(element, callback, isIterable = false) {
  let yieldValue = element
  while (yieldValue) {
    if (isIterable) {
      yield* yieldValue
    } else {
      yield yieldValue
    }
    yieldValue = callback(yieldValue)
  }
}


function count(start, step = 1) {
  return iterator(start, (value) => value + step)
}

function cycle(iterable, number = Infinity) {
  return iterator(iterable, () => --number === 0 ? false : iterable, true)
}

function repeat(value, number = Infinity) {
  return iterator(value, () => --number === 0 ? false : value)
}

export {
  count,
  cycle,
  repeat
}