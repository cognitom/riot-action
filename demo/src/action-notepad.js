import Action from 'riot-action'
import someBackendAPI from './someBackendAPI'

/**
 * Actions
 * - actions are triggered via events
 * - actions are automatically registered to its view as an events
 */
export default class $ extends Action {
  /**
   * processes routing
   * @param { string } id - id string passed from the router
   */
  route (id) {
    someBackendAPI.get(id)
      .then(result => {
        this.id = result.id
        this.update({ message: result.message })
      })
  }

  /**
   * saves the current sheet
   * @param { string } message - message to save
   */
  save (message) {
    someBackendAPI.save(message, this.id)
      .catch(error => {
        this.update({ error })
      })
  }

  /** adds a new sheet */
  add () {
    someBackendAPI.add()
      .then(result => {
        this.id = result.id
        this.update({ message: result.message })
      })
  }
}
