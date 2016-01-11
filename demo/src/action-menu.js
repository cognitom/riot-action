import Action from 'riot-action'

export default class $ extends Action {
  // Actions
  // - actions are triggered via events
  // - actions are automatically registered to its view as an events
  mount () {
    const theme = localStorage.getItem('theme') || 'red'
    this.update({ theme })
  }
  change (theme) {
    localStorage.setItem('theme', theme)
  }
}
