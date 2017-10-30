// track on ongoing timer
// add on top of it with callbacks!

class ObsArray {
  constructor(arr) {
    this.arr = arr
    this.animationDuration = 400
    this.heightMultiplier = 3
    this.domRefs = this.getDomRefs()
    this.changeHandler = {
      get: (target, property) => {
        // console.log('getting property ' + property + ' => ' + target[property])
        if (property >= 0 && property <= arrSize)
          this.flash(property, 'green')
        return target[property]
      },

      set: (target, property, value, receiver) => {
        // console.log('\tsetting ' + property + ' for ' + target + ' with value ' + value)
        target[property] = value
        this.flash(property, 'red')
        this.updateBar(property, value)
        return true
      },
    }
    return new Proxy(arr, this.changeHandler)
  }

  getDomRefs() {
    return this.arr.reduce((acc, val, idx) => {
      acc[idx] = document.getElementById(idx)
      return acc
    }, {})
  }

  flash(id, color) {
    const el = this.domRefs[id]
    const cssClass = `flash-${color}`
    el.classList.remove(`flash-green`);
    el.classList.remove(`flash-red`);
    el.classList.add(cssClass);
    setTimeout(() => {
      el.classList.remove(cssClass);
    }, this.animationDuration)
  }
  flash(id, color) {
    const el = this.domRefs[id]
    const bgColor = (color === 'green') ? '#6E6' : '#E66'
    el.style.backgroundColor = bgColor
    setTimeout(() => {
      el.style.backgroundColor = '#66E'
    }, this.animationDuration)
  }

  updateBar(id, val) {
    this.domRefs[id].style.height = `${val * this.heightMultiplier}px`
    this.domRefs[id].innerHTML = val
  }

}
