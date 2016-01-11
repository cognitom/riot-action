import riot     from 'riot'
import route    from 'riot-route'
import { util } from 'riot-action'

// actions
import Menu    from './action-menu'
import Notepad from './action-notepad'
import History from './action-history'

// tags
import './app-menu.tag'
import './app-notepad.tag'
import './app-history.tag'

riot.mount('#menu', 'app-menu', { action: Menu })
util.mount('#container', [
  { route: 'notepad/*', tag: 'app-notepad', options: { action: Notepad } },
  { route: 'history',   tag: 'app-history', options: { action: History } }
])

route.start(true)
