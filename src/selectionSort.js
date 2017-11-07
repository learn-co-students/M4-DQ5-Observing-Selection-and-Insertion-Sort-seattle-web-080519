function selectionSort(arr) {
  for (let oIdx = 0; oIdx < arr.length-1; oIdx++) {
    let minIdx = oIdx
    for (var iIdx = oIdx; iIdx < arr.length; iIdx++) {
      if (arr[iIdx] < arr[minIdx])
        minIdx = iIdx
    }
    let temp = arr[oIdx]
    arr[oIdx] = arr[minIdx]
    arr[minIdx] = temp
  }
}
