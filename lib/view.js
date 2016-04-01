import riot from 'riot'
import route from 'riot-route'

/**
 * Thin wrapper of `mount` and `route`
 */
class RiotActionView {
  constructor (selector) {
    this.r = route.create()
    this.selector = selector
  }
  route (route, tag, options = {}) {
    this.r(route, (...args) => {
      const t = riot.mount(this.selector, tag, options)[0]
      t.trigger('route', ...args)
    })
    return this
  }
}

/**
 * A factory method for RiotActionView
 * @param { string } selector - point to mount the tag
 * @returns { object } RiotActionView
 */
function mount (selector) {
  return new RiotActionView(selector)
}

export default { mount }
