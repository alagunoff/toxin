import Header from 'components/header/header';
import DatePicker from 'components/date-picker/date-picker';
import DropdownGuests from 'components/dropdown/dropdown-guests';

import './main.scss';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));

const dropdownsGuests = document.querySelectorAll('.js-dropdown_type_guests');
dropdownsGuests.forEach((dropdown) => new DropdownGuests(dropdown));

const $datePickers = $('.js-date-picker');
$datePickers.each((i, datePicker) => new DatePicker($(datePicker)));
