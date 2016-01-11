import Action from 'riot-action'
import someBackendAPI from './someBackendAPI'

export default class $ extends Action {
  // Actions
  // - actions are triggered via events
  // - actions are automatically registered to its view as an events
  route () {
    someBackendAPI.all()
      .then(result => {
        this.update({ data: result, loaded: true })
      })
  }
  clear () {
    someBackendAPI.clearAll()
      .then(result => {
        this.update({ data: result })
      })
  }
}
