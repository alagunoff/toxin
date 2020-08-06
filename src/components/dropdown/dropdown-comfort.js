import COUNTER_NUMBER_MIN from './constants';

class DropdownComfort {
  constructor(dropdown) {
    this.init(dropdown);
  }

  init(dropdown) {
    this.dropdown = dropdown;

    this.bindHandlers();
    this.findDomElements();
    this.addEventListeners();
  }

  bindHandlers() {
    this.handleTickClick = this.handleTickClick.bind(this);
    this.handleDecreaseButtonClick = this.handleDecreaseButtonClick.bind(this);
    this.handleIncreaseButtonClick = this.handleIncreaseButtonClick.bind(this);
  }

  findDomElements() {
    this.input = this.dropdown.querySelector('.js-dropdown__input');
    this.tick = this.dropdown.querySelector('.js-dropdown__tick');
    this.groups = this.dropdown.querySelectorAll('.js-dropdown__group');
    this.counterFields = [...this.dropdown.querySelectorAll('.js-dropdown__counter-value')];
    this.buttonsDecrease = this.dropdown.querySelectorAll(
      '.js-dropdown__counter-button_type_decrease',
    );
    this.buttonsIncrease = this.dropdown.querySelectorAll(
      '.js-dropdown__counter-button_type_increase',
    );
  }

  addEventListeners() {
    this.tick.addEventListener('click', this.handleTickClick);
    this.buttonsDecrease.forEach((button) => button.addEventListener('click', this.handleDecreaseButtonClick));
    this.buttonsIncrease.forEach((button) => button.addEventListener('click', this.handleIncreaseButtonClick));
  }

  handleTickClick() {
    this.dropdown.classList.toggle('dropdown_expanded');
  }

  handleDecreaseButtonClick(e) {
    const buttonDecrease = e.currentTarget;
    const counterField = buttonDecrease.nextElementSibling;

    if (counterField.textContent > COUNTER_NUMBER_MIN) {
      counterField.textContent -= 1;

      if (Number(counterField.textContent) === COUNTER_NUMBER_MIN) {
        buttonDecrease.classList.add('dropdown__control-button_disabled');
      }
    }

    this.apply();
  }

  handleIncreaseButtonClick(e) {
    const counterField = e.currentTarget.previousElementSibling;
    const buttonDecrease = counterField.previousElementSibling;

    counterField.textContent = Number(counterField.textContent) + 1;

    buttonDecrease.classList.remove('dropdown__counter-button_disabled');

    this.apply();
  }

  apply() {
    const counters = [
      { 0: ['спален', 'кроватей', 'ванных комнат'] },
      { 1: ['спальня', 'кровать', 'ванная комната'] },
      { 2: ['спальни', 'кровати', 'ванные комнаты'] },
      { 3: ['спальни', 'кровати', 'ванные комнаты'] },
      { 4: ['спальни', 'кровати', 'ванные комнаты'] },
      { 5: ['спален', 'кроватей', 'ванных комнат'] },
    ];

    this.input.value = this.groups.map((group, index) => {
      const value = group.querySelector('.js-dropdown__counter-value').textContent;

      return counters
        .map((counter) => Number(Object.keys(counter)[0]))
        .reduce(
          (acc, quantity, i) => (value >= quantity ? ` ${value} ${counters[i][quantity][index]}` : acc),
          '',
        );
    });

    this.input.value = this.input.value.trim();
  }
}

export default DropdownComfort;
