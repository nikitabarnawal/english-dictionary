export const Debounce = (fn, delay) => {
  let timerId
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.call(this, ...args)
    }, 2000)
  }
}
