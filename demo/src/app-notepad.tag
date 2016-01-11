<app-notepad>
  <textarea onchange={ change }>{ message || '' }</textarea>
  <button onclick={ click }>+</button>
  <p if={ error }>{ error }</p>

  <script>
    this.mixin('riot-action') // load mixin

    this.change = (e) => {
      this.trigger('save', this.message = e.target.value)
    }
    this.click = (e) => {
      this.trigger('add')
    }
  </script>
</app-notepad>
