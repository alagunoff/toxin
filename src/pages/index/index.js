/* eslint-disable no-new */
/* global document $ */
import '../../utilities/jquery-global';

import 'air-datepicker';
import Header from '../../components/header/header';
import DropdownGuests from '../../components/dropdown/dropdownGuests';

const header = document.querySelector('.js-header');
new Header(header);

// Dropdown
const dropdownGuests = document.querySelector('.js-dropdown');
new DropdownGuests(dropdownGuests);

// Calendar
const $from = $('.js-dropdown-date-from');
const $to = $('.js-dropdown-date-to');

$from.datepicker({
  clearButton: true,
  todayButton: true,
  language: {
    today: 'Применить',
  },
  prevHtml:
        '<svg style="width: 24px; height: 24px;" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Предыдущий месяц"><path style="transform:translate(-15%,-15%) rotate(180deg); transform-origin: center center; fill: #BC9CFF; stroke: none" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',
  nextHtml:
        '<svg style="width: 24px; height: 24px;" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Следующий месяц"><path style="transform:translate(15%,15%); fill: #BC9CFF; stroke: none" d="M8.363.984L16.378 9l-8.015 8.016-1.407-1.407 5.578-5.625H.347V8.016h12.187L6.956 2.39 8.363.984z" fill="#BC9CFF"/></svg>',
  navTitles: {
    days: 'MM yyyy',
  },
  minDate: new Date(),
  offset: 9,
  range: true,
  multipleDatesSeparator: '-',
  onSelect(fd) {
    const arrDates = fd.split('-');

    if (arrDates.length === 1) {
      $from.val(arrDates[0]);
    } else {
      $from.val(arrDates[0]);
      $to.val(arrDates[1]);
    }
  },
});

const myDatepicker = $from.data('datepicker');
$('.datepicker--button[data-action=today]').click(() => myDatepicker.hide());
$('.datepicker--button[data-action=clear]').click(() => $to.val(''));
