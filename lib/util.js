import riot from 'riot'
import route from 'riot-route'

/**
 * mount
 * @param { string } selector - point to mount the tag
 * @param { object } routeMap - map for routing
 * @returns { object } created route
 */
function mount (selector, routeMap) {
  // create a new routing group
  const r = route.create()

  routeMap.forEach(entry => {
    r(entry.route, function(...args) {
      entry.options = entry.options || {}
      const view = riot.mount(selector, entry.tag, entry.options)[0]
      view.trigger('route', ...args)
    })
  })
  return r
}

export var util = { mount }
