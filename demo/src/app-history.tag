<app-history>
  <p if={ !loaded }>Now loading...</p>
  <ul>
    <li each={ data }><a href="#notepad/{ id }">{ message || '(empty)' }</a></li>
  </ul>
  <button onclick={ click }>Clear</button>

  <script>
    this.mixin('riot-action') // load mixin

    this.click = e => {
      this.trigger('clear')
    }
  </script>

  <style scoped>
    :scope {
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
    }
    ul {
      text-align: left;
      padding: 0;
      margin: 60px 0 0;
    }
    li {
      list-style: none;
      border-bottom: 1px solid #eee;
      padding: 1em;
    }
    li:hover {
      background: #f7f7f7;
    }
    button {
      position: absolute;
      bottom: 20px;
      left: 50%;
      width: 200px;
      margin-left: -100px;
      padding: .5em;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: #f7f7f7;
    }
    button:hover {
      background: #eee;
    }
  </style>
</app-history>
