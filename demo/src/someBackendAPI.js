let store = {}

/**
 * Backend API Mockup
 */
export default {
  save (message) {
    if (message.length < 20) {
      store.message = message
      console.log(`the store has updated: ${ store.message }`)
      return Promise.resolve()
    } else {
      console.log("it's too long")
      return Promise.reject('TOO LONG!')
    }
  },
  clearAll () {
    store.message = ''
    console.log("the store has cleared")
    return Promise.resolve()
  }
}
