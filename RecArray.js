// track on ongoing timer
// add on top of it with callbacks!

class RecArray {
  constructor(arr) {
    this.arr = arr
    this.animationDuration = 25
    this.heightMultiplier = 3
    this.domRefs = this.getDomRefs()
    this.record = []

    this.frameDispatch = {
      "flash": this.flash,
      "updateBar": this.updateBar,
    }

    this.changeHandler = {
      get: (target, property) => {
        // console.log('getting property ' + property + ' => ' + target[property])
        if (property >= 0 && property <= arrSize)
          this.record.push({type: "flash", color: "green", id: property})
        return target[property]
      },

      set: (target, property, value, receiver) => {
        // console.log('\tsetting ' + property + ' for ' + target + ' with value ' + value)
        target[property] = value
        if (property >= 0 && property <= arrSize) {
          this.record.push({type: "updateBar", id: property, val: value})
          this.record.push({type: "flash", color: "red", id: property})
        }
        return true
      },
    }
    return [new Proxy(arr, this.changeHandler), this]
  }

  getDomRefs() {
    return this.arr.reduce((acc, val, idx) => {
      acc[idx] = document.getElementById(idx)
      return acc
    }, {})
  }

  play() {
    let frameIdx = 0
    const runner = setInterval(() => {
      let currFrame = this.record[frameIdx]
      // what is going on here -- erroring outside of the try but never hitting the error block when its wrapped...try removing the try catch and see in console
      try {
        let func = this.frameDispatch[currFrame.type]
        func.call(this, currFrame)
      } catch(err) {
        debugger
      }
      (frameIdx === this.record.length) ? clearInterval(runner) : frameIdx++ // JANKMASTER!
    }, this.animationDuration)
  }

  flash(frame) {
    const el = this.domRefs[frame.id]
    const bgColor = (frame.color === 'green') ? '#6E6' : '#E66'
    el.style.backgroundColor = bgColor
    setTimeout(() => {
      el.style.backgroundColor = '#66E'
    }, this.animationDuration)
  }

  updateBar(frame) {
    this.domRefs[frame.id].style.height = `${frame.val * this.heightMultiplier}px`
    this.domRefs[frame.id].innerHTML = frame.val
  }

}
