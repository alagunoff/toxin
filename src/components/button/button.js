class Button {
  constructor(parameters) {
    this.init(parameters);
  }

  init({ button, onClick }) {
    this.button = button;

    this.button.addEventListener('click', onClick);
  }

  hide() {
    this.button.classList.add('button_hidden');
  }

  show() {
    this.button.classList.remove('button_hidden');
  }
}

export default Button;
