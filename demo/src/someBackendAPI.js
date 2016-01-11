let store = [], counter = 0

function add() {
  store.unshift({ id: ++counter, message: '' })
  return store[0]
}
function find(id) {
  for (var i = 0; i < store.length; i++)
    if (store[i].id == id)
      return store[i]
  return null
}

add()

/**
 * Backend API Mockup
 */
export default {
  save (message, id) {
    if (message.length < 100) {
      const record = id ? find(id) : store[0]
      record.message = message
      console.log(`the store has updated: ${ message }`)
      return Promise.resolve()
    } else {
      console.log("it's too long")
      return Promise.reject('TOO LONG!')
    }
  },
  add () {
    return Promise.resolve(add())
  },
  get (id) {
    const record = id == 'last' ? store[0] : find(id - 0)
    return Promise.resolve(record)
  },
  all () {
    return Promise.resolve(store)
  },
  clearAll () {
    store = []
    add()
    console.log("the history has cleared")
    return Promise.resolve(store)
  }
}
