class MyInput extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
  
          .input {
            /* Tailwind CSS styles */
            @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5;
            /* Additional styles if needed */
          }
        </style>
        <div class="input-container">
          <label></label>
          <input type="text" />
        </div>
      `;
  
      this.inputContainer = this.shadowRoot.querySelector('.input-container');
      this.labelElement = this.shadowRoot.querySelector('label');
      this.inputElement = this.shadowRoot.querySelector('input');
    }
  
    connectedCallback() {
      this.label = this.getAttribute('label') || '';
      this.placeholder = this.getAttribute('placeholder') || '';
      this.width = this.getAttribute('width') || '100%';
      this.value = this.getAttribute('value') || '';
  
      this.updateRender();
    }
  
    updateRender() {
      this.labelElement.textContent = this.label;
      this.inputElement.setAttribute('placeholder', this.placeholder);
      this.inputElement.style.width = this.width;
      this.inputElement.value = this.value;
  
      this.inputElement.addEventListener('input', this.handleInputChange);
    }
  
    handleInputChange = (e) => {
      const newValue = e.target.value;
      this.dispatchEvent(new CustomEvent('inputChange', { detail: newValue }));
    };
  }
  
  customElements.define('my-input', MyInput);
  