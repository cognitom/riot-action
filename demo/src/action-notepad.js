import Action from 'riot-action'
import someBackendAPI from './someBackendAPI'

export default class $ extends Action {
  // Actions
  // - actions are triggered via events
  // - actions are automatically registered to its view as an events
  route (id) {
    someBackendAPI.get(id)
      .then(result => {
        this.id = result.id
        this.update({ message: result.message })
      })
  }
  save (message) {
    someBackendAPI.save(message, this.id)
      .catch(error => {
        this.update({ error })
      })
  }
  add () {
    someBackendAPI.add()
      .then(result => {
        this.id = result.id
        this.update({ message: result.message })
      })
  }
}
