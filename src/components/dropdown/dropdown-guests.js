import Button from 'components/button/button';

import COUNTER_NUMBER_MIN from './constants';

class DropdownGuests {
  constructor(dropdown) {
    this.init(dropdown);
  }

  init(dropdown) {
    this.dropdown = dropdown;

    this.bindHandlers();
    this.initInstancies();
    this.findDomElements();
    this.addEventListeners();
  }

  bindHandlers() {
    this.handleTickClick = this.handleTickClick.bind(this);
    this.handleDecreaseButtonClick = this.handleDecreaseButtonClick.bind(this);
    this.handleIncreaseButtonClick = this.handleIncreaseButtonClick.bind(this);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
  }

  initInstancies() {
    this.buttonClear = new Button({
      button: this.dropdown.querySelector('.js-button_type_clear'),
      onClick: this.handleClearButtonClick,
    });

    this.buttonApply = new Button({
      button: this.dropdown.querySelector('.js-button_type_apply'),
      onClick: this.handleApplyButtonClick,
    });
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
    this.dropdown.classList.add('dropdown_expanded');
  }

  handleDecreaseButtonClick(e) {
    const buttonDecrease = e.currentTarget;
    const counterField = buttonDecrease.nextElementSibling;

    if (counterField.textContent > COUNTER_NUMBER_MIN) {
      counterField.textContent -= 1;

      if (Number(counterField.textContent) === COUNTER_NUMBER_MIN) {
        buttonDecrease.disabled = true;
      }
    }

    const isNeedToHideButtonClear = this.isCounterFieldsEmpty();

    if (isNeedToHideButtonClear) {
      this.buttonClear.hide();
    }
  }

  handleIncreaseButtonClick(e) {
    const counterField = e.currentTarget.previousElementSibling;
    const buttonDecrease = counterField.previousElementSibling;

    counterField.textContent = Number(counterField.textContent) + 1;

    buttonDecrease.disabled = false;

    this.buttonClear.show();
  }

  handleClearButtonClick() {
    this.buttonClear.hide();

    this.buttonsDecrease.forEach((button) => button.disabled = true);
    this.counterFields.forEach((counterField) => counterField.textContent = COUNTER_NUMBER_MIN);
  }

  handleApplyButtonClick() {
    if (this.isCounterFieldsEmpty()) {
      this.input.value = '';
    } else {
      const counters = [
        { guest: 'гостей', baby: 'младенцев' },
        { guest: 'гость', baby: 'младенец' },
        { guest: 'гостя', baby: 'младенца' },
        { guest: 'гостя', baby: 'младенца' },
        { guest: 'гостя', baby: 'младенца' },
        { guest: 'гостей', baby: 'младенцев' },
      ];

      const guestsAmount = this.counterFields.reduce((acc, it) => Number(it.textContent) + acc, 0);
      const amountBabies = this.counterFields[2].textContent;

      this.input.value = counters.reduce((acc, it, i) => {
        const babies = amountBabies >= i ? it.baby : counters[amountBabies].baby;

        return guestsAmount >= i ? `${guestsAmount} ${it.guest}, ${amountBabies} ${babies}` : acc;
      }, '');
    }

    this.dropdown.classList.remove('dropdown_expanded');
  }

  isCounterFieldsEmpty() {
    return this.counterFields.every((field) => Number(field.textContent) === COUNTER_NUMBER_MIN);
  }
}

export default DropdownGuests;
