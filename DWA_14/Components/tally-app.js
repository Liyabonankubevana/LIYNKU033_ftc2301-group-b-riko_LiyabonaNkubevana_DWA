import { html, css, LitElement } from 'https://unpkg.com/lit@2.0.0-preview.1?module';

// class Header extends LitElement {
//     render() {
//         return html`
//         <header>
//             <h1>Tally Counter</h1>
//         </header>
//         `
//     };

//     static styles = css`
//     h1 {
//         margin-bottom: 20px;
//         font-size: 2rem;
//         color: #00002
//       }
//     `
// } 

// customElements.define('tally-header', Header);

class CounterApp extends LitElement {

    /**
     * To manange counter and methods to increment, decrement, to display message and to reset the counter
     * 
     */
    static properties = {
      counter: { type: Number },
      minCount: { type: '' },
      maxCount: { type: '' },
      message: { type: String },
    };

    constructor() {
      super();
      this.counter = 0;
      this.minCount = false;
      this.maxCount = false;
      this.message = '';
    }

    add() {
      if (this.counter < 20) {
        this.counter += 1;
        this.minCount = false;
        this.maxCount = false;
      } else {
        this.maxCount = true;
      }
      this.updateMessage();
    }

    minus() {
      if (this.counter > -20) {
        this.count -= 1;
        this.minCount = false;
        this.maxCount = false;
      } else {
        this.minCount = true;
      }
      this.updateMessage();
    }

    reset() {
      this.counter = 0;
      this.minCount = false;
      this.maxCount = false;
      this.updateMessage();
    }

    updateMessage() {
      if (this.minCount) {
        this.message = 'Minimum value reached!';
      } else if (this.maxCount) {
        this.message = 'Maximum value reached!';
      } else {
        this.message = '';
      }
    }

    static styles = css`
    .counter {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .message {
      font-style: italic;
      color: red;
    }
    .button {
      padding: 5px 10px;
      margin-right: 5px;
    }
  `;


    render() {
      return html`
        <div class="counter">Count: <span id="countValue">${this.counter}</span></div>
        <div class="message">${this.message}</div>
        <button class="button" @click=${this.add}>Increment</button>
        <button class="button" @click=${this.minus}>Decrement</button>
        <button class="button" @click=${this.reset}>Restart</button>
      `;
    }
  }

  customElements.define('counter-app', CounterApp);

