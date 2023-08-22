export let dataDictionaryTextArea = {};
class SimpleTextArea extends HTMLElement {
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
          background-color:#D9D9D9;
          margin-top: 0.8rem;
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
    this.textAreaElement.addEventListener('input', (e) => {
      const newKey = e.target.id;
      const newValue = e.target.value;

      // Update the value for the id in dataDictionary
      dataDictionary[newKey] = newValue;
      console.log(
        "🚀 ~ file: textArea.js:40 ~ SimpleInput ~ this.inputElement.addEventListener ~ dataDictionary:",
        dataDictionary
      );

      // Create a custom event to notify the change
      const event = new CustomEvent('textAreaChange', { detail: dataDictionary });
      this.dispatchEvent(event);
    });
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

    console.log(` ${id}`);
  }
}

customElements.define('simple-textarea', SimpleTextArea);
export default SimpleTextArea;
