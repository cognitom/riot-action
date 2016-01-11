describe('Core specs', function() {

  var counter = 0, $, $$

  before(function() {
    $ = document.querySelector.bind(document)
    $$ = document.querySelectorAll.bind(document)

    // start router
    route.start()
  })

  after(function() {

  })

  afterEach(function() {
    counter = 0
  })

  it('action triggered', function() {
    // TODO: create test
  })

})
