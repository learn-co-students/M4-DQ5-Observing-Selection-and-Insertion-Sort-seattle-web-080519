
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

function genDOMArrayHTML(arr) {
  const list = arr.map((val, idx) => (
    `<li class='bar' id='${idx}' style="height:${val * config.heightMultiplier}px">${val}</li>`
  ))
  return list.join('')
}

function insertDOMArray(DOMArrayHTML) {
  document.getElementById("array-list").innerHTML = DOMArrayHTML
}

function selectionSort(arr) {
  let oIdx = 0
  const outer = setInterval(() => {
    let minVal = Number.POSITIVE_INFINITY
    let minIdx = null
    for (var iIdx = oIdx; iIdx < arr.length; iIdx++) {
      if (arr[iIdx] < minVal) {
        minVal = arr[iIdx]
        minIdx = iIdx
      }
    }
    let temp = arr[oIdx]
    arr[oIdx] = arr[minIdx]
    arr[minIdx] = temp
    oIdx++
    if (oIdx >= arr.length) clearInterval(outer)
  }, 250)
}

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


function main() {
  const arr = genRandomArr(config.arrSize)
  const DOMArrayHTML = genDOMArrayHTML(arr)
  insertDOMArray(DOMArrayHTML)

  // const x = new ObsArray(arr)
  const [watchedArr, rec] = new RecArray(arr)
  insertionSort(watchedArr)
  console.log(rec)
  rec.play()
}

main()
