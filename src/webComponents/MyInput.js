class Test extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = '<h3>Hola Mundo Web component TEST</h3>';
    }
  }
  
  window.customElements.define('my-test', Test); 
  