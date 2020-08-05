class Button {
  constructor({ button, onClick }) {
    button.addEventListener('click', onClick);
  }
}

export default Button;
