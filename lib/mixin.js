export default {
  /**
   * Bind the tag to the instance of action class
   */
  init: function() {
    const Action = this.opts.action
    if (Action)
      // This is private. DO NOT ACCESS FROM TAG INSTANCE.
      this._action = new Action(view)
  }
}
