<app-menu>
  <ul>
    <li><a href="#notepad/last">Notepad</a></li>
    <li><a href="#history">History</a></li>
    <li>
      <select value={ theme } onchange={ change }>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </li>
  </ul>

  <script>
    this.mixin('riot-action') // load mixin

    this.change = (e) => {
      this.trigger('change', this.theme = e.target.value)
    }
  </script>
</app-menu>
