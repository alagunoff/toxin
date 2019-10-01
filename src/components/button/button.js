export default class ButtonLike {
  constructor(button) {
    this.button = button;
    this.buttonText = button.querySelector('.button__text');

    this.button.addEventListener('click', this.toggleLike.bind(this));
  }

  toggleLike(evt) {
    evt.preventDefault();

    this.button.classList.toggle('button_theme_liked');

    this.buttonText.textContent = this.button.classList.contains('button_theme_liked')
      ? +this.buttonText.textContent + 1
      : +this.buttonText.textContent - 1;
  }
}
