import Header from 'components/header/header';
import CheckboxExpandable from 'components/checkbox-expandable/checkbox-expandable';
import DropdownComfort from 'components/dropdown/dropdown-comfort';
import RangeSlider from 'components/range-slider/range-slider';

import RoomsFilter from './rooms-filter';
import './rooms.scss';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const dropdownsComfort = document.querySelectorAll('.js-dropdown_type_comfort');
dropdownsComfort.forEach((dropdown) => new DropdownComfort(dropdown));

const checkboxes = document.querySelectorAll('.js-checkbox-expandable');
checkboxes.forEach((checkbox) => new CheckboxExpandable(checkbox));

const $sliders = $('.js-range-slider');
$sliders.each((i, el) => new RangeSlider($(el)));

const filters = document.querySelectorAll('.js-rooms-page__filter');
filters.forEach((filter) => new RoomsFilter(filter));
