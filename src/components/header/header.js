class Header {
  constructor(header) {
    this.init(header);
  }

  init(header) {
    this.header = header;

    this.bindHandlers();
    this.findDomElements();
    this.addEventListeners();
  }

  bindHandlers() {
    this.handleBurgerButtonClick = this.handleBurgerButtonClick.bind(this);
  }

  findDomElements() {
    this.navigation = this.header.querySelector('.js-header__navigation');
    this.burgerButton = this.header.querySelector('.js-header__burger-button');
  }

  addEventListeners() {
    this.burgerButton.addEventListener('click', this.handleBurgerButtonClick);
  }

  handleBurgerButtonClick() {
    this.burgerButton.classList.toggle('header__burger-button_theme_cross');
    this.navigation.classList.toggle('header__navigation_opened');
  }
}

export default Header;
