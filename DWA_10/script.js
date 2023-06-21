const dataButtonSubtract = document.querySelector("[data-button-subtract]");
const dataButtonAdd = document.querySelector('[data-button-add]');
const dataButtonReset = document.querySelector('[data-button-reset]');
const tallyNum = document.querySelector('[data-type="tally"]');

    class Button {
      constructor(element) {
        this.element = element;
      }

   /**
     * Executes the button's action. This method should be overridden by subclasses.
     * @abstract
     */
      execute() {
      }
    }
  
    class AddButton extends Button {
      execute() {
        const currentValue = parseInt(tallyNum.value, 10);
        tallyNum.value = currentValue + 1;
      }
    }
  
    class SubtractButton extends Button {
      execute() {
        const currentValue = parseInt(tallyNum.value, 10);
        tallyNum.value = currentValue - 1;
      }
    }
  
    class ResetButton extends Button {
      execute() {
        tallyNum.value = 0;
      }
    }
   
  /**
   * An array of button instances.
   * @type {Button[]}
   */ 

    const buttons = [
      new AddButton(dataButtonAdd),
      new SubtractButton(dataButtonSubtract),
      new ResetButton(dataButtonReset)
    ];
  
    /**
   * Attaches click event listeners to each button instance in the array.
   */
    buttons.forEach(button => {
      button.element.addEventListener('click', () => {
        button.execute();
      });
    });
  