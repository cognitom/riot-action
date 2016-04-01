import riot from 'riot'
import route from 'riot-route'
import { view, mixin } from 'riot-action'

// actions
import Menu from './action-menu'
import Notepad from './action-notepad'
import History from './action-history'

// tags
import './app-menu.tag'
import './app-notepad.tag'
import './app-history.tag'

// registers riot-action as a middleware
riot.mixin(mixin)

// routings
riot.mount('#menu', 'app-menu', { action: Menu })
view.mount('#container')
  .route('notepad/*', 'app-notepad', { action: Notepad })
  .route('history', 'app-history', { action: History })

route.start(true)
