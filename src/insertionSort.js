function insertionSort(arr) {
  let startIdx = 0
  for (let startIdx = 0; startIdx < arr.length; startIdx++) {
    for(let currIdx = startIdx; currIdx > 0 && arr[currIdx-1] > arr[currIdx]; currIdx--) {
      let temp = arr[currIdx]
      arr[currIdx] = arr[currIdx-1]
      arr[currIdx-1] = temp
    }
  }
}
