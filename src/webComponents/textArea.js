class SimpleInput extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          textarea {
            width: 100%;
            height: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-family: 'Open Sans', sans-serif;
            color: linear-gradient(40deg, black 40%, transparent 40%);
            resize: vertical; /* Allow vertical resizing */
            overflow-y: auto; /* Enable vertical scrollbar when content exceeds height */
          }
  
          textarea::placeholder {
            text-align: center;
            font-family: 'Open Sans', sans-serif;
            color: rgba(0, 0, 0, 0.4);
          }
        </style>
        <textarea placeholder=""></textarea>
      `;
  
      this.textAreaElement = this.shadowRoot.querySelector('textarea');
      this.textAreaElement.addEventListener('input', this.handleInputChange);
    }
  
    connectedCallback() {
      const placeholder = this.getAttribute('placeholder') || '';
      const id = this.getAttribute('id') || '';
      const width = this.getAttribute('width') || '100%';
      const height = this.getAttribute('height') || '100%';
  
      this.textAreaElement.setAttribute('placeholder', placeholder);
      this.textAreaElement.setAttribute('id', id);
      this.textAreaElement.style.setProperty('width', width);
      this.textAreaElement.style.setProperty('height', height);
    }
  
    handleInputChange = (e) => {
      const newValue = e.target.value;
      this.dispatchEvent(new CustomEvent('inputChange', { detail: newValue }));
    };
  }
  
  customElements.define('simple-textarea', SimpleInput);
  