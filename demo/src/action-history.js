import Action from 'riot-action'
import someBackendAPI from './someBackendAPI'

/**
 * Actions
 * - actions are triggered via events
 * - actions are automatically registered to its view as an events
 */
export default class $ extends Action {
  /** processes routing */
  route () {
    someBackendAPI.all()
      .then(result => {
        this.update({ data: result, loaded: true })
      })
  }

  /** clears the all sheets on the notepad */
  clear () {
    someBackendAPI.clearAll()
      .then(result => {
        this.update({ data: result })
      })
  }
}
