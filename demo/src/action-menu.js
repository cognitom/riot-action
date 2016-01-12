import Action from 'riot-action'

/**
 * Actions
 * - actions are triggered via events
 * - actions are automatically registered to its view as an events
 */
export default class $ extends Action {
  /** provides the setting when mounting */
  mount () {
    const theme = localStorage.getItem('theme') || 'red'
    this.update({ theme })
  }

  /**
   * changes the color theme of the menubar
   * @param { string } theme - selected theme
   */
  change (theme) {
    localStorage.setItem('theme', theme)
  }
}
