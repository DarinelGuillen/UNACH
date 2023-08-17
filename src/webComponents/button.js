class CustomButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          button {
            width: 100%;
            height: 100%;
            padding: 10px;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            color: white;
            cursor: pointer;
          }
        </style>
        <button>${this.textContent || 'Button'}</button>
      `;
    }
  
    connectedCallback() {
      const width = this.getAttribute('width') || '100px';
      const height = this.getAttribute('height') || '40px';
      const text = this.getAttribute('text') || 'Button';
  
      this.shadowRoot.querySelector('button').style.setProperty('width', width);
      this.shadowRoot.querySelector('button').style.setProperty('height', height);
      this.shadowRoot.querySelector('button').textContent = text;
  
      // Add a click event listener to call the specified function
      const functionName = this.getAttribute('functionName');
      if (functionName) {
        const button = this.shadowRoot.querySelector('button');
        button.addEventListener('click', () => {
          window[functionName](); // Call the function
        });
      }
    }
  }
  
  customElements.define('custom-button', CustomButton);
  