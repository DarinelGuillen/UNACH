export let dataDictionary = {};
import {getItem, setItem} from '../utils/storage'

class SimpleInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        input {
          margin-top: 0.8rem;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-family: 'Open Sans', sans-serif;
          color: linear-gradient(40deg, black 40%, transparent 40%);
          background-color: #D9D9D9;
        }

        select {
          margin-top: 0.8rem;
          margin-left: 0.7rem;
          padding: 2px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-family: 'Open Sans', sans-serif;
          color: linear-gradient(40deg, black 40%, transparent 40%);
          background-color: #D9D9D9;
          height: 30px; /* Adjust the height for combo box */
        }
      </style>
    `;

    this.inputElement = document.createElement('input');
    this.selectElement = document.createElement('select');
    this.shadowRoot.appendChild(this.inputElement);
    this.shadowRoot.appendChild(this.selectElement);

    this.inputElement.addEventListener('input', this.handleInputChange.bind(this));
    this.selectElement.addEventListener('change', this.handleInputChange.bind(this));
  }
  connectedCallback() {
    this.setupAttributes();
    this.populateComboBoxOptions();
    this.setInitialValue();
  }

  setupAttributes() {
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

    this.selectElement.setAttribute('placeholder', placeholder);
    this.selectElement.setAttribute('id', id);
    this.selectElement.style.setProperty('width', width);
    this.selectElement.style.setProperty('height', height);

    const valueAttribute = this.getAttribute('value');
    if (valueAttribute !== null) {
      this.inputElement.value = valueAttribute;
      this.selectElement.value = valueAttribute;
    }

    this.toggleInputType();
  }

  populateComboBoxOptions() {
    const placeholder = this.getAttribute('placeholder') || '';
    const placeholderOption = document.createElement('option');
    placeholderOption.text = placeholder;
    placeholderOption.value = ''; // You can set the value to an empty string or another value if needed
    placeholderOption.disabled = true;
    placeholderOption.selected = true;
    this.selectElement.add(placeholderOption);

    const options = this.getAttribute('options');
    if (options) {
      const optionValues = options.split(',').map((option) => option.trim());
      optionValues.forEach((optionValue) => {
        const option = document.createElement('option');
        option.text = optionValue;
        option.value = optionValue;
        this.selectElement.add(option);
      });
    }
  }

  toggleInputType() {
    const type = this.getAttribute('type');
    if (type === 'combo-box') {
      this.inputElement.style.display = 'none';
      this.selectElement.style.display = 'block';
    } else {
      this.inputElement.style.display = 'block';
      this.selectElement.style.display = 'none';
    }
  }
  setInitialValue() {
    const type = this.getAttribute('type');
    const valueAttribute = this.getAttribute('value');
    if (type === 'combo-box' && valueAttribute !== null) {
      this.selectElement.value = valueAttribute;
    }
  }

  handleInputChange(e) {
    const newKey = e.target.id;
    const newValue = e.target.value;

    // Obtener el objeto actual del almacenamiento local o un objeto vacío si no existe
    const dataDictionary = getItem('currentProyect') || {};

    // Actualizar el valor del nuevo ítem
    dataDictionary[newKey] = newValue;

    // Guardar el objeto actualizado en el almacenamiento local
    setItem('currentProyect', dataDictionary);

    console.log("🚀 ~ file: input.js:57 ~ SimpleInput ~ this.handleInputChange ~ dataDictionary:", dataDictionary);

    const event = new CustomEvent('inputChange', { detail: dataDictionary });
    this.dispatchEvent(event);
  }
}

customElements.define('simple-input', SimpleInput);

export default SimpleInput;
