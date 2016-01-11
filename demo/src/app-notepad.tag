<app-notepad>
  <textarea onchange={ change }>{ message || '' }</textarea>
  <button onclick={ click }>Clear</button>
  <p if={ error }>{ error }</p>

  <script>
    this.mixin('riot-action') // load mixin

    this.change = (e) => {
      this.trigger('save', this.message = e.target.value)
    }
    this.click = (e) => {
      this.trigger('clear')
    }
  </script>
</app-notepad>
