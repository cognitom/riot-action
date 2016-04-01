<app-menu class={ theme }>
  <a href="#notepad/last">Notepad</a>
  <a href="#history">History</a>
  <select value={ theme } onchange={ change }>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
  </select>

  <script>
    this.change = e => {
      this.trigger('change', this.theme = e.target.value)
    }
    this.add = e => {
      this.trigger('add')
    }
    this.clear = e => {
      this.trigger('clear')
    }
  </script>

  <style scoped>
    :scope {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      text-align: center;
      z-index: 1;
    }
    .red:scope { background: #da4f83 }
    .blue:scope { background: #408bc2 }
    :scope > * {
      margin: 0 1em;
      line-height: 60px;
    }
    a {
      color: white;
      text-decoration: none;
    }
  </style>
</app-menu>
