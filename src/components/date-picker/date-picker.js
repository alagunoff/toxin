import DropdownPlain from 'components/dropdown/dropdown-plain';
import Calendar from 'components/calendar/calendar';

class DatePicker {
  constructor(datePicker) {
    this.handleTickClick = this.handleTickClick.bind(this);
    this.handleConfirmDate = this.handleConfirmDate.bind(this);

    this.init(datePicker);
  }

  init(datePicker) {
    this.datePicker = datePicker;

    this.findDomElements();

    [this.dropdownFrom, this.dropdownTo] = [
      ...this.datePicker.querySelectorAll('.js-dropdown'),
    ].map((dropdown) => new DropdownPlain({ dropdown, onTickClick: this.handleTickClick }));

    this.calendarElement = new Calendar({
      calendar: datePicker.querySelector('.js-calendar'),
      onConfirmDate: this.handleConfirmDate,
    });
  }

  findDomElements() {
    this.calendar = this.datePicker.querySelector('.js-date-picker__calendar');
  }

  handleTickClick() {
    this.toggleDatePicker();
  }

  handleConfirmDate({ dateFrom, dateTo }) {
    this.dropdownFrom.update(dateFrom);
    this.dropdownTo.update(dateTo);

    this.toggleDatePicker();
  }

  toggleDatePicker() {
    this.calendar.classList.toggle('date-picker__calendar_hidden');
  }
}

export default DatePicker;
