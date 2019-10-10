/* eslint-disable func-names */
/* global $ document */
/* eslint-disable no-new */

import '../../utilities/jquery-global';

import 'ion-rangeslider';
import 'air-datepicker';

import '../../utilities/polyfills';

import RangeSlider from '../../components/rangeSlider/rangeSlider';
import Header from '../../components/header/header';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const $sliders = $('.js-range-slider');
$sliders.each(function () { new RangeSlider($(this)); });
