import 'ion-rangeslider';

import DEFAULT_RANGE_SLIDER_PARAMETERS from './constants';

class RangeSlider {
  constructor($slider) {
    this.init($slider);
  }

  init($slider) {
    this.$slider = $slider;

    this.bindHandlers();
    this.findDomElements();

    this.$sliderField.ionRangeSlider({
      ...DEFAULT_RANGE_SLIDER_PARAMETERS,
      onStart: this.handleSliderStart,
      onChange: this.handleRunnerDrag,
    });
  }

  bindHandlers() {
    this.handleSliderStart = this.handleSliderStart.bind(this);
    this.handleRunnerDrag = this.handleRunnerDrag.bind(this);
  }

  findDomElements() {
    this.$sliderField = this.$slider.find('.js-range-slider__field');
    this.$sliderPrice = this.$slider.find('.js-range-slider__price');
  }

  handleSliderStart(value) {
    this.changePrice(value);
  }

  handleRunnerDrag(value) {
    this.changePrice(value);
  }

  changePrice(value) {
    this.$sliderPrice.html(`${value.from}₽ - ${value.to}₽`);
  }
}

export default RangeSlider;
