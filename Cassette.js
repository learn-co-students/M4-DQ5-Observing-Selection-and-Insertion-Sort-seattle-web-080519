class Cassette {
  constructor() {
    this.tapes = []
    this.playingTapes = null
  }

  add(tape) {
    this.tapes.push(tape)
  }

  play() {
    const playingTapes = new Set(this.tapes)

    const playback = setInterval(() => {
      if (playingTapes.size === 0) clearInterval(playback)

      playingTapes.forEach(tape => {
        if (tape.isFin()) {
          tape.crescendo()
          playingTapes.delete(tape)
          return
        }
        try {
          tape.step()
        } catch(err) {
          console.error(err)
          debugger
        }
      })
    }, config.frameDuration)
  }

}
