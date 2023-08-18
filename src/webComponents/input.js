class SimpleInput extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          input {
            width: 100%;
            height: 100%;
            margin-top: 0.8rem;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-family: 'Open Sans', sans-serif;
            color: linear-gradient(40deg, black 40%, transparent 40%);
            background-color:#D9D9D9;
          }
  
          input::placeholder {
            text-align: center;
            font-family: 'Open Sans', sans-serif;
            color: rgba(0, 0, 0, 0.4);  
          }
        </style>
        <input type="text" placeholder="" />
        
      `;
  
      this.inputElement = this.shadowRoot.querySelector('input');
      this.inputElement.addEventListener('input', this.handleInputChange);
    }
  
    connectedCallback() {
      const placeholder = this.getAttribute('placeholder') || '';
      const id = this.getAttribute('id') || '';
      const width = this.getAttribute('width') || '100%';
      const height = this.getAttribute('height') || 'auto';  
      const type = this.getAttribute('type') || 'text';
    
      this.inputElement.setAttribute('type', type);
      this.inputElement.setAttribute('placeholder', placeholder);
      this.inputElement.setAttribute('id', id);
      this.inputElement.style.setProperty('width', width);
      this.inputElement.style.setProperty('height', height);
    }
  
    handleInputChange = (e) => {
      const newValue = e.target.value;
      console.log("🚀 ~ file: input.js:44 ~ SimpleInput ~ e.target.value:", e.target.value)
      this.dispatchEvent(new CustomEvent('inputChange', { detail: newValue }));
    };
  }
  
  customElements.define('simple-input', SimpleInput);
  