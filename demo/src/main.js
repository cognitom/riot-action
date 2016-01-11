import riot from 'riot'

// actions
import Notepad from './action-notepad'

// tags
import './app-notepad.tag'

riot.mount('#container', 'app-notepad', { action: Notepad })
