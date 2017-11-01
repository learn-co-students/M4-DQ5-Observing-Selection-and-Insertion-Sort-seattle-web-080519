class DomArray {
  constructor(length, id, domID) {
    document.getElementById("array-display-container").innerHTML = `<ul id="array-list-${id}"></ul>`
    this.arr = this.genRandomArr(length)
    let arrHTML = this.genDOMArrayHTML()
    this.domRefs = this.getDomRefs()
    this.domArr = document.getElementById("array-list-${id}")
    this.recorder = new Recorder(this.domRefs, this.arr)

    this.insertDOMArray(arrHTML, id)
  }

  shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (arr.length))
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }

  genRandomArr(size) {
    const arr = new Array(size)
    for (let idx = 0; idx < size; idx++)
      arr[idx] = idx + 1
    return shuffleArr(arr)
  }

  getDomRefs() {
    return this.arr.reduce((acc, val, idx) => {
      acc[idx] = document.getElementById(idx)
      return acc
    }, {})
  }

  genDOMArrayHTML() {
    const list = this.arr.map((val, idx) => (
      `<li class='bar' id='${idx}' style="height:${val * config.heightMultiplier}px">${val}</li>`
    ))
    return list.join('')
  }

  insertDOMArray(DOMArrayHTML, id) {
    document.getElementById("array-list").innerHTML = DOMArrayHTML
  }
}
