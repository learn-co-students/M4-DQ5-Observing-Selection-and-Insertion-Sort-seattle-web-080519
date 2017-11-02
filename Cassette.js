class Cassette {
  constructor() {
    this.tapes = []
  }

  add(tape) {
    this.tapes.push(tape)
  }

  // function play(recs) {
  //   let frameIdx = [0, 0]
  //   const playback = setInterval(() => {
  //     recs.forEach((rec, idx) => {
  //       if (frameIdx[idx] === rec.record.length) return
  //       let currFrame = rec.record[frameIdx[idx]]
  //       try {
  //         // what is going on here -- erroring outside of the try but never hitting the error block when its wrapped...try removing the try catch and see in console
  //         var func = rec.frameDispatch[currFrame.type]
  //         func.call(rec, currFrame)
  //       } catch(err) {
  //         console.error("This should not have printed")
  //       }
  //       if (frameIdx[idx] === rec.record.length-1)
  //         rec.crescendo()
  //       frameIdx[idx]++ // JANKMASTER!
  //     })
  //   }, config.animationDuration)
  // }
}
