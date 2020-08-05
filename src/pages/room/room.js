import Header from 'components/header/header';
import Donut from 'components/donut/donut';

import './room.scss';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const $donuts = $('.js-donut');
$donuts.each((i, el) => new Donut($(el)));
