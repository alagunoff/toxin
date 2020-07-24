class Header {
  constructor(header) {
    this.header = header;

    this.init();
  }

  init() {
    this.findDomElements();
    this.addEventListeners();
  }

  findDomElements() {
    this.navigation = this.header.querySelector('.js-header__navigation');
    this.burgerButton = this.header.querySelector('.js-header__burger-button');
  }

  addEventListeners() {
    this.burgerButton.addEventListener('click', this.handleBurgerButtonClick.bind(this));
  }

  handleBurgerButtonClick() {
    this.burgerButton.classList.toggle('header__burger-button_theme_cross');
    this.navigation.classList.toggle('header__navigation_opened');
  }
}

export default Header;
