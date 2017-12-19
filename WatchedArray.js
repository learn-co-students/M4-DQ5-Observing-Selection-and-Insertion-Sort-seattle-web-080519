class WatchedArray {

  constructor(arr, sortFunc, domId, cassette) {
    this.arr = arr
    this.sortFunc = sortFunc
    this.domId = domId
    this.gets = 0
    this.sets = 0
    this.domArray = new DomArray(this.arr, this.domId)
    this.tape = new Tape(this.domArray, this.arr)
    cassette.add(this.tape)

    // TODO abstract traps out of here
    this.traps = {
      get: (target, property) => {
        if (property >= 0 && property <= this.arr.length) {
          this.gets++
          this.tape.capture({type: "flash", color: '#6E6', domId: `${domId}-${property}`, idx: property})
        }
        return target[property]
      },

      set: (target, property, value, receiver) => {
        target[property] = value
        if (property >= 0 && property <= this.arr.length) {
          this.sets++
          this.tape.capture({type: "updateBar", domId: `${domId}-${property}`, idx: property, val: value})
          this.tape.capture({type: "flash", color: '#E66', domId: `${domId}-${property}`, idx: property})
        }
        return true
      },
    }
    this.proxy = new Proxy(this.arr, this.traps)
    return this
  }

  runSort() {
    this.sortFunc(this.proxy)
  }

  displayBenchmark() {
    document.getElementById(`${this.domId}-container-read-write`).innerText = this.gets + this.sets
    document.getElementById(`${this.domId}-container-read`).innerText = this.gets
    document.getElementById(`${this.domId}-container-write`).innerText = this.sets
  }

}
