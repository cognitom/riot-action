import riot from 'riot'
import route from 'riot-route'

/**
 * mount
 * @param { (DOM|string) } dom - point to mount the tag
 * @param { object } routeMap - map for routing
 * @returns { object } created route
 */
function mount (dom, routeMap) {
  // create a new routing group
  const r = route.create()

  routeMap.forEach(entry => {
    r(entry.route, function(...args) {
      entry.options = entry.options || {}
      const view = riot.mount(dom, entry.tag, entry.options)
      view.on('route', ...args)
    })
  })
  return r
}

export var util = { mount }
