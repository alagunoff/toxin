import 'components/calendar/calendar';
import RangeSlider from 'components/range-slider/range-slider';
import Header from 'components/header/header';

import './components.scss';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const $sliders = $('.js-range-slider');
$sliders.each((i, el) => new RangeSlider($(el)));
