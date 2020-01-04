class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;

    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    this.input = this.dropdown.querySelector('.dropdown__input');
    this.counterFields = this.dropdown.querySelectorAll('.dropdown__counter-value');
    this.groups = this.dropdown.querySelectorAll('.dropdown__group');
    this.buttonsDecrease = this.dropdown.querySelectorAll('.dropdown__control-button[data-dropdown-button-type=decrease]');
    this.buttonsIncrease = this.dropdown.querySelectorAll('.dropdown__control-button[data-dropdown-button-type=increase]');
  }

  addEventListeners() {
    this.input.addEventListener('click', this.handleInputClick.bind(this));
    this.buttonsDecrease.forEach((button) => button.addEventListener('click', this.handleDecreaseButtonClick.bind(this)));
    this.buttonsIncrease.forEach((button) => button.addEventListener('click', this.handleIncreaseButtonClick.bind(this)));
  }

  handleInputClick() {
    this.dropdown.classList.toggle('dropdown_expanded');
  }

  handleDecreaseButtonClick(evt) {
    const counterField = evt.currentTarget.nextElementSibling;
    const buttonDecrease = evt.currentTarget;

    if (counterField.textContent > 0) {
      counterField.textContent -= 1;

      if (Number(counterField.textContent) === 0) {
        buttonDecrease.classList.add('dropdown__control-button_disabled');
      }
    }
  }

  handleIncreaseButtonClick(evt) {
    const counterField = evt.currentTarget.previousElementSibling;
    const buttonDecrease = counterField.previousElementSibling;

    counterField.textContent = Number(counterField.textContent) + 1;

    buttonDecrease.classList.remove('dropdown__control-button_disabled');
  }
}

export default Dropdown;