class DomArray {

  constructor(arr, domId) {
    this.arr = arr
    this.domId = domId
    this.domArr = document.createElement("ul")
    this.domArr.setAttribute("id", domId)
    this.domArr.classList.add("array-list");
    document.getElementById("array-display-container").appendChild(this.domArr)
    this.insertListHTML(this.domArr)
    return this.getDomRefs() // for quicker access than looking up in real time
  }

  getDomRefs() {
    return this.arr.reduce((acc, val, idx) => {
      acc[idx] = document.getElementById(`${this.domId}-${idx}`)
      return acc
    }, {})
  }

  genDOMArrayHTML() {
    const list = this.arr.map((val, idx) => (
      `<li class='bar' id='${this.domId}-${idx}' style="height:${val * config.heightMultiplier}px"></li>`
    ))
    return list.join('')
  }

  insertListHTML(ul) {
    ul.innerHTML = this.genDOMArrayHTML()
  }
}
