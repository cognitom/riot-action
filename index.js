import riot from 'riot'
import mixin from './lib/mixin'
import Action from './lib/action'

// Register shared mixin
riot.mixin('riot-action', mixin)

export { util } from './lib/util'
export default Action
