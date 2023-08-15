class TitleHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: #BCB785;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }

        h1 {
          font-family: 'Open Sans', sans-serif;
          font-weight: bold;
          font-size: 25px;
          color: white;
          margin: 0;
        }
      </style>
      <div>
        <h1></h1>
      </div>
    `;

    this.h1Element = this.shadowRoot.querySelector('h1');
  }

  connectedCallback() {
    const content = this.getAttribute('content') || '';
    const width = this.getAttribute('width') || '100%';
    const height = this.getAttribute('height') || '100px';

    this.h1Element.textContent = content;
    const divElement = this.shadowRoot.querySelector('div');
    divElement.style.width = width;
    divElement.style.height = height;
  }
}

customElements.define('title-header', TitleHeader);
