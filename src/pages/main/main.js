import Header from 'components/header/header';
import Calendar from 'components/calendar/calendar';
import DropdownGuests from 'components/dropdown/dropdown-guests';

import './main.scss';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const dropdownsGuests = document.querySelectorAll('.js-dropdown_type_guests');
dropdownsGuests.forEach((dropdown) => new DropdownGuests(dropdown));

const $calendars = $('.js-calendar');
$calendars.each((i, calendar) => new Calendar($(calendar)));
