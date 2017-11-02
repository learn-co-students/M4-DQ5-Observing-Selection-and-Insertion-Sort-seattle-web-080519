class WatchedArray {

  constructor(arr, sortFunc, id, cassette) {
    this.id = id
    this.arr = arr
    this.domArray = new DomArray(this.arr, this.id)
    cassette.add(new Tape(this.domArray, this.arr))

    // TODO abstract traps out of here
    this.traps = {
      get: (target, property) => {
        if (property >= 0 && property <= this.arr.length)
          this.tape.capture({type: "flash", color: "green", id: property})
        return target[property]
      },

      set: (target, property, value, receiver) => {
        target[property] = value
        if (property >= 0 && property <= this.arr.length) {
          this.tape.capture({type: "updateBar", id: property, val: value})
          this.tape.capture({type: "flash", color: "red", id: property})
        }
        return true
      },
    }

    return new Proxy(this.arr, this.traps)
  }

}
