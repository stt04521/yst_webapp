export default {
  bind: function (el, { value }) {
    let onClickOutside = value
    el.handler = function (e) {
      if (el && !el.contains(e.target)) {
        onClickOutside(e)
      } else {
        // e.stopPropagation()
      }
    }
    document.body.removeEventListener('click', el.handler, true)
    document.body.addEventListener('click', el.handler, true)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.handler, true)
    el.handler = null
  }
}
