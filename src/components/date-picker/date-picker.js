import DropdownPlain from 'components/dropdown/dropdown-plain';
import Calendar from 'components/calendar/calendar';

class DatePicker {
  constructor(datePicker) {
    this.init(datePicker);
  }

  init(datePicker) {
    this.datePicker = datePicker;

    this.bindHandlers();
    this.initInstancies();
  }

  bindHandlers() {
    this.handleTickClick = this.handleTickClick.bind(this);
    this.handleConfirmDate = this.handleConfirmDate.bind(this);
  }

  initInstancies() {
    [this.dropdownFrom, this.dropdownTo] = [
      ...this.datePicker.querySelectorAll('.js-dropdown_type_date'),
    ].map((dropdown) => new DropdownPlain({ dropdown, onTickClick: this.handleTickClick }));

    this.calendarElement = new Calendar({
      calendar: this.datePicker.querySelector('.js-calendar'),
      onConfirmDate: this.handleConfirmDate,
    });
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
    this.datePicker.classList.toggle('date-picker_expanded');
  }
}

export default DatePicker;
