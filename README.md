# Riot Action

This library provides an easy way to separate the view (`tag`) and the logic (`action`).

**NOTE: Riot Action is still in development**

## Usage

Write the view and apply the mixin `riot-action`:

```html
<memo>
  <input type="text" value={ message || '' } onchange={ change }>
  <button onclick={ click }>Clear</button>

  <script>
    this.mixin('riot-action') // load mixin

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
import Memo from './action-memo'
import './memo.tag'

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
