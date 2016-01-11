<app-history>
  <p if={ !loaded }>Now loading...</p>
  <ul>
    <li each={ data }><a href="#notepad/{ id }">{ message }</a></li>
  </ul>
  <button onclick={ click }>Clear</button>

  <script>
    this.mixin('riot-action') // load mixin

    this.click = (e) => {
      this.trigger('clear')
    }
  </script>
</app-history>
