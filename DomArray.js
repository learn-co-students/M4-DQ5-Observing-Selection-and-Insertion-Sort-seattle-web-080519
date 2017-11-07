class DomArray {

  constructor(arr, domId) {
    this.arr = arr
    this.domId = domId
    // todo abstract this
    this.domArrContainer = document.createElement("div")
    this.domArrContainer.setAttribute("id", `${domId}-container`)
    this.domArrContainer.classList.add("array-list-container");

    this.domArr = document.createElement("ul")
    this.domArr.setAttribute("id", domId)
    this.domArr.classList.add("array-list");

    // this is all sloppy dop abstract please
    document.getElementById("array-display-container").appendChild(this.domArrContainer)
    document.getElementById(`${domId}-container`).appendChild(this.domArr)
    this.statBox = new StatBox(`${domId}-container`)

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
