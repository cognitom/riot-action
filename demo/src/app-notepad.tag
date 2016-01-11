<app-notepad>
  <textarea onchange={ change }>{ message || '' }</textarea>
  <button onclick={ click }>+</button>
  <p if={ error }>{ error }</p>

  <script>
    this.mixin('riot-action') // load mixin

    this.change = e => {
      this.trigger('save', this.message = e.target.value)
    }
    this.click = e => {
      this.trigger('add')
    }
  </script>

  <style scoped>
    :scope {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
    }
    textarea {
      border: none;
      width: 100%;
      height: 100%;
      padding: 75px 1em;
      box-sizing: border-box;
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
</app-notepad>
