import Action from 'riot-action'
import someBackendAPI from './someBackendAPI'

export default class $ extends Action {
  // Actions
  // - actions are triggered via events
  // - actions are automatically registered to its view as an events
  save (message) {
    someBackendAPI.save(message)
      .catch(error => {
        this.update({ error })
      })
  }
  clear () {
    someBackendAPI.clearAll()
      .then(() => {
        this.update({ message: '' })
      })
  }
}
