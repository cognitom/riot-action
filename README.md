# Riot Action

This library provides an easy way to separate the view (`tag`) and the logic (`action`).

**NOTE: Riot Action is still in development**

## Basic usage

Write the view and apply the mixin `riot-action`:

```html
<memo>
  <input type="text" value={ message || '' } onchange={ change }>
  <button onclick={ click }>Clear</button>

  <script>
    this.change = (e) => {
      this.trigger('save', this.message = e.target.value)
    }
    this.click = (e) => {
      this.trigger('clear')
    }
  </script>
</memo>
```

Write the logic as a separated class:

```js
import Action from 'riot-action'

export default class $ extends Action {
  // Actions
  // - actions are triggered via events
  // - actions are automatically registered to its view as an events
  save (message) {
    someAPI.save(message)
      .catch(error => {
        this.update({ error })
      })
  }
  clear () {
    someAPI.clearAll()
      .then(() => {
        this.update({ message: '' })
      })
  }
}
```

Combine the view and the logic:

```js
import riot from 'riot'
import { mixin } from 'riot-action'
import Memo from './action-memo'
import './memo.tag'

riot.mixin(mixin) // registers riot-action as a middleware
riot.mount('memo', { action: Memo })
```

Or:

```html
import Memo from './action-memo'

<app>
  <memo action={ action.Memo } />
  <script>
    this.action = { Memo }
  </script>
</app>
```

In both cases, the Action is passed by its attributes.

## Flow

- Events: the view use `this.trigger()` to tell something to the action
- Actions: do something in the action
- Updates: the action use `this.update()` to tell something to the view

`Action` class has `update()` method and it's the only way to control the view.

## Routings

Riot Action works perfectly with `riot-route`. And it has an utility class. You can create a new instance by `view.mount()`. The class has `route` method to register its route, and the method is chainable.

```javascript
import riot from 'riot'
import route from 'riot-route'
import { view, mixin } from 'riot-action'

// actions
import Notepad from './action-home'
import History from './action-detail'

// tags
import './app-home.tag'
import './app-detail.tag'

// registers riot-action as a middleware
riot.mixin(mixin)

// routings
view.mount('#container')
  .route('home', 'app-home', { action: Home })
  .route('detail/*', 'app-detail', { action: Detail })

route.start(true)
```

## HTML router (planned)

This feature has not been implemented yet.

```html
import Home from './action-home'
import Detail from './action-detail'

<app>
  <route-group>
    <route path="home"><app-home action={ action.Home } /></route>
    <route path="detail/*"><app-detail action={ action.Detail } /></route>
  </route-group>
  <script>
    this.action = { Home, Detail }
  </script>
</app>
```
