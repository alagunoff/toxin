class DropdownPlain {
  constructor(parameters) {
    this.init(parameters);
  }

  init({ dropdown, onTickClick }) {
    this.dropdown = dropdown;
    this.onTickClick = onTickClick;

    this.bindHandlers();
    this.findDomElements();
    this.addEventListeners();
  }

  update(value) {
    this.input.value = value;
  }

  bindHandlers() {
    this.handleTickClick = this.handleTickClick.bind(this);
  }

  findDomElements() {
    this.input = this.dropdown.querySelector('.js-dropdown__input');
    this.tick = this.dropdown.querySelector('.js-dropdown__tick');
  }

  addEventListeners() {
    this.tick.addEventListener('click', this.handleTickClick);
  }

  handleTickClick() {
    this.onTickClick();
  }
}

export default DropdownPlain;
