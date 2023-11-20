import { getItem, setItem } from '../utils/storage';

// Obtener el valor actual de currentProyect del almacenamiento local
export let dataDictionaryTextArea =  {};

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
          resize: vertical;
          overflow-y: auto;
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
      const dataDictionaryTextArea = getItem('currentProyect') || {};
      // Combinar el valor actual de currentProyect con el dataDictionaryTextArea
      // const mergedData = { ...dataDictionaryTextArea, [newKey]: newValue };
    dataDictionaryTextArea[newKey] = newValue;


      // Guardar el objeto actualizado en el almacenamiento local
      setItem('currentProyect', dataDictionaryTextArea);

      // Actualizar dataDictionaryTextArea con el objeto combinado
      // dataDictionaryTextArea = mergedData;

      // Crear un evento personalizado para notificar el cambio
      const event = new CustomEvent('textAreaChange', { detail: dataDictionaryTextArea });
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

    // Comprobar si se proporciona un atributo de valor y establecer el valor del textarea en consecuencia
    const valueAttribute = this.getAttribute('value');
    if (valueAttribute !== null) {
      this.textAreaElement.value = valueAttribute;
    }
  }
}

customElements.define('simple-textarea', SimpleTextArea);
export default SimpleTextArea;
