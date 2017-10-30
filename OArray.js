// function getDOMEl(id) {
//   return document.getElementById(id)
// }
//
// function flash(id, color) {
//   const cssClass = `flash-${color}`
//   const el = getDOMEl(id)
//   el.classList.add(cssClass);
//   setTimeout(() => {
//     el.classList.remove(cssClass);
//   }, animationDuration)
// }
//
// function updateBar(id, val) {
//   const el = getDOMEl(id)
//   el.style.height = `${val*4}px`
//   el.innerHTML = val
// }
//
// const changeHandler = {
//   get: function(target, property) {
//     // console.log('getting property ' + property + ' => ' + target[property])
//     if (property >= 0 && property <= arrSize)
//       flash(property, 'green')
//     return target[property]
//   },
//
//   set: function(target, property, value, receiver) {
//     // console.log('\tsetting ' + property + ' for ' + target + ' with value ' + value)
//     target[property] = value
//     flash(property, 'red')
//     updateBar(property, value)
//     return true
//   },
//
// }
//
// function generateObsArray(arr) {
//   return new Proxy(arr, changeHandler)
// }
