
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

function genDOMArrayHTML(arr, domId) {
  const list = arr.map((val, idx) => (
    `<li class='bar' id='${domId}-${idx}' style="height:${val * config.heightMultiplier}px">${val}</li>`
  ))
  return list.join('')
}

function insertDOMArray(DOMArrayHTML, el) {
  el.innerHTML = DOMArrayHTML
}

function play(recs) {
  let frameIdx = [0, 0]
  const playback = setInterval(() => {
    recs.forEach((rec, idx) => {
      if (frameIdx[idx] === rec.record.length) return
      let currFrame = rec.record[frameIdx[idx]]
      try {
        // what is going on here -- erroring outside of the try but never hitting the error block when its wrapped...try removing the try catch and see in console
        var func = rec.frameDispatch[currFrame.type]
        func.call(rec, currFrame)
      } catch(err) {
        console.error("This should not have printed")
      }
      if (frameIdx[idx] === rec.record.length-1)
        rec.crescendo()
      frameIdx[idx]++ // JANKMASTER!
    })
  }, config.animationDuration)
}

function main() {
  const arrA = genRandomArr(config.arrSize)
  const arrB = arrA.slice()

  const DOMArrayHTMLA = genDOMArrayHTML(arrA, 'selection')
  const DOMArrayHTMLB = genDOMArrayHTML(arrB, 'insertion')

  insertDOMArray(DOMArrayHTMLA, document.getElementById('selection-array-list'))
  insertDOMArray(DOMArrayHTMLB, document.getElementById('insertion-array-list'))

  const [watchedArrA, recA] = new RecArray(arrA, 'selection')
  const [watchedArrB, recB] = new RecArray(arrB, 'insertion')

  selectionSort(watchedArrA)
  insertionSort(watchedArrB)
  play([recA, recB])
}

main()
