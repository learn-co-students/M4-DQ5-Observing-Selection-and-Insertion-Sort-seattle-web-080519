class Tape {

  constructor(domRefs, arr) {
    this.arr = arr
    this.record = []
    this.domRefs = domRefs
    this.frameFuncDispatch = {
      "flash": this.flash,
      "updateBar": this.updateBar,
    }
    this.currFrameIdx = 0
  }

  rewind() {
    this.currFrameIdx = 0
  }

  isFin() {
    return (this.currFrameIdx === this.record.length)
  }

  step() {
    const currFrame = this.record[this.currFrameIdx]
    const action = this.frameFuncDispatch[currFrame.type]
    action.call(this, currFrame)
    this.currFrameIdx++
  }

  // abstract animations out of tape. into domarray?
  flash(frame) {
    const el = this.domRefs[frame.idx]
    el.style.backgroundColor = frame.color
    setTimeout(() => {
      el.style.backgroundColor = '#66E'
    }, config.animationDuration)
  }

  updateBar(frame) {
    this.domRefs[frame.idx].style.height = `${frame.val * config.heightMultiplier}px`
    this.domRefs[frame.idx].style.width = `${frame.val * config.widthMultiplier}px`
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
        console.error(err)
      }
      if (frameIdx === config.arrSize-1) {
        clearInterval(cPlayback)
        document.getElementById(`${this.domRefs[0].parentNode.id}-container-stats`).classList.add("fade-down-in")
      } else {
        prevVal = this.arr[frameIdx]
        frameIdx++
      }
    }, config.animationDuration)
  }

}
