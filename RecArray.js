// track on ongoing timer
// add on top of it with callbacks!

class RecArray {
  constructor(arr, domId) {
    this.domId = domId
    this.arr = arr
    this.domRefs = this.getDomRefs()
    this.recorder = new Recorder(this.domRefs, this.arr)

    this.traps = {
      get: (target, property) => {
        if (property >= 0 && property <= this.arr.length)
          this.recorder.capture({type: "flash", color: "green", id: property})
        return target[property]
      },

      set: (target, property, value, receiver) => {
        // console.log('\tsetting ' + property + ' for ' + target + ' with value ' + value)
        target[property] = value
        if (property >= 0 && property <= this.arr.length) {
          this.recorder.capture({type: "updateBar", id: property, val: value})
          this.recorder.capture({type: "flash", color: "red", id: property})
        }
        return true
      },
    }
    return [new Proxy(arr, this.traps), this.recorder]
  }

  getDomRefs() {
    return this.arr.reduce((acc, val, idx) => {
      acc[idx] = document.getElementById(`${this.domId}-${idx}`)
      return acc
    }, {})
  }

}
