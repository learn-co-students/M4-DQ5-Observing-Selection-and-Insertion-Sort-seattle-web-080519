class StatBox {
  constructor(domId) {
    this.domBox = document.createElement("div")
    this.domBox.setAttribute("id", `${domId}-stats`)
    this.domBox.classList.add("stat-box")

    this.rwCounterContainer = document.createElement("div")
    this.rCounterContainer = document.createElement("div")
    this.wCounterContainer = document.createElement("div")
    this.rwCounterContainer.classList.add("counter-container")
    this.rCounterContainer.classList.add("counter-container")
    this.wCounterContainer.classList.add("counter-container")

    this.rwCounterText = document.createElement("h1")
    this.rCounterText = document.createElement("h1")
    this.wCounterText = document.createElement("h1")
    this.rwCounterText.classList.add("stat-h1s-sloppy-dop")
    this.rCounterText.classList.add("stat-h1s-sloppy-dop")
    this.wCounterText.classList.add("stat-h1s-sloppy-dop")
    this.rwCounterText.innerHTML = "Read/Write"
    this.rCounterText.innerHTML = "Read"
    this.wCounterText.innerHTML = "Write"

    this.rwCounter = document.createElement("h2")
    this.rCounter = document.createElement("h2")
    this.wCounter = document.createElement("h2")
    this.rwCounter.id = `${domId}-read-write`
    this.rCounter.id = `${domId}-read`
    this.wCounter.id = `${domId}-write`
    this.rwCounter.innerHTML = 0
    this.rCounter.innerHTML = 0
    this.wCounter.innerHTML = 0

    this.rwCounterContainer.appendChild(this.rwCounter)
    this.rCounterContainer.appendChild(this.rCounter)
    this.wCounterContainer.appendChild(this.wCounter)

    this.rwCounterContainer.appendChild(this.rwCounterText)
    this.rCounterContainer.appendChild(this.rCounterText)
    this.wCounterContainer.appendChild(this.wCounterText)


    this.domBox.appendChild(this.rwCounterContainer)
    this.domBox.appendChild(this.rCounterContainer)
    this.domBox.appendChild(this.wCounterContainer)
    document.getElementById(domId).appendChild(this.domBox)
  }
}
