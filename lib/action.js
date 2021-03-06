/**
 * Action
 * Extend this class and define your actions (events)
 */
export default class Action {
  constructor (view) {
    this._view = view
    this._tag_loading = true
    const proto = Object.getPrototypeOf(this)
    Object.getOwnPropertyNames(proto)
      .filter(key => key != 'constructor' && typeof this[key] == 'function')
      .forEach(key => {
        this._view.on(key, this[key].bind(this))
      })
  }
  update (obj, shouldRedraw = true) {
    if (shouldRedraw)
      this._view.update(obj)
    else
      Object.keys(obj).forEach(key => {
        this._view[key] = obj[key]
      })
  }
  route () {
    // override this for custom route action
  }
}
