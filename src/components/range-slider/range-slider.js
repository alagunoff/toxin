/* global $ */

const $range = $('.js-range-slider');
const $rangeField = $range.find('.range-slider__field');
const $rangePrice = $range.find('.range-slider__price');

$rangeField.ionRangeSlider({
  skin: 'custom',
  type: 'double',
  min: 0,
  max: 15000,
  hide_min_max: true,
  from: 5000,
  to: 10000,
  hide_from_to: true,
  onStart: (data) => $rangePrice.html(`${data.from}₽ - ${data.to}₽`),
  onChange: (data) => $rangePrice.html(`${data.from}₽ - ${data.to}₽`),
});
