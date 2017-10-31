class Recorder {

  constructor(domRefs, arr) {
    this.arr = arr
    this.record = []
    this.domRefs = domRefs
    this.animationDuration = config.animationDuration
    this.heightMultiplier = config.heightMultiplier
    this.frameDispatch = {
      "flash": this.flash,
      "updateBar": this.updateBar,
    }
  }

  flash(frame) {
    const el = this.domRefs[frame.id]
    const bgColor = (frame.color === 'green') ? '#6E6' : '#E66'
    el.style.backgroundColor = bgColor
    setTimeout(() => {
      el.style.backgroundColor = '#66E'
    }, this.animationDuration*2)
  }

  updateBar(frame) {
    this.domRefs[frame.id].style.height = `${frame.val * this.heightMultiplier}px`
    this.domRefs[frame.id].innerHTML = frame.val
  }

  capture(frame) {
    this.record.push(frame)
  }

  assertOrdered(valB, valA) {
    return (valA <= valB)
  }

  crescendo() {
    let frameIdx = 0
    let prevVal = Number.NEGATIVE_INFINITY
    const cPlayback = setInterval(() => {
      try {
        // what is going on here -- erroring outside of the try but never hitting the error block when its wrapped...try removing the try catch and see in console
        const bgColor = this.assertOrdered(this.arr[frameIdx], prevVal) ? '#6E6' : '#E66'
        this.domRefs[frameIdx].style.backgroundColor = bgColor
      } catch(err) {
        console.error("This should not have printed")
      }
      if (frameIdx === config.arrSize-1) {
        clearInterval(cPlayback)
      } else {
        prevVal = this.arr[frameIdx]
        frameIdx++
      }
    }, this.animationDuration * 3)
  }

  play() {
    let frameIdx = 0
    const playback = setInterval(() => {
      let currFrame = this.record[frameIdx]
      try {
        // what is going on here -- erroring outside of the try but never hitting the error block when its wrapped...try removing the try catch and see in console
        let func = this.frameDispatch[currFrame.type]
        func.call(this, currFrame)
      } catch(err) {
        console.error("This should not have printed")
      }
      if (frameIdx === this.record.length-1) {
        clearInterval(playback)
        this.crescendo()
      } else {
        frameIdx++ // JANKMASTER!
      }
    }, this.animationDuration)
  }

}
