/**
 * Action
 * Extend this class and define your actions (events)
 */
export default class Action {
  constructor (view) {
    this._view = view
    Object.keys(this.prototype)
      .filter(key => key != 'update' && typeof this[key] == 'function')
      .forEach(key => {
        this._view.on(key, this[key])
      })
  }
  update (obj) {
    this._view.update(obj)
  }
  route () {
    // override this for custom route action
  }
}
