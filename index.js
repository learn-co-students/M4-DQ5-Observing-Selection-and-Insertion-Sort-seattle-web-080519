function genRandomArr(size) {
  const arr = new Array(size)
  for (let idx = 0; idx < size; idx++)
    arr[idx] = idx + 1

  // shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (size))
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

function genWatchedArrays(sorts, cassette) {
  const baseArray = genRandomArr(config.arrSize)

  return sorts.map(wSort => {
    const arrCopy = baseArray.slice()
    return new WatchedArray(arrCopy, wSort.func, wSort.id, cassette)
  })
}

function main() {
  const cassette = new Cassette()
  const watchedArrays = genWatchedArrays(config.sorts, cassette)
  watchedArrays.forEach(arr => {
    arr.runSort()
    arr.displayBenchmark()
  })
  cassette.play()
}

main()
