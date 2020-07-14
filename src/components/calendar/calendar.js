import 'air-datepicker';

import DEFAULT_PARAMETERS from './constants';

class Calendar {
  constructor($calendar) {
    this.$calendar = $calendar;

    this.init();
  }

  init() {
    this.findDomElements();
    this.addEventListeners();

    this.$fieldInit.datepicker({
      ...DEFAULT_PARAMETERS,
      onSelect: this.handleCalendarSelectedData.bind(this),
    });

    this.$calendarData = this.$fieldInit.data('datepicker');
  }

  findDomElements() {
    this.$container = this.$calendar.find('.js-calendar__container');
    this.$tick = this.$calendar.find('.js-calendar__tick');
    this.$fieldInit = this.$calendar.find('.js-calendar__field_type_init');
    this.$fieldFrom = this.$calendar.find('.js-calendar__field_type_from');
    this.$fieldTo = this.$calendar.find('.js-calendar__field_type_to');
    this.$applyButton = this.$calendar.find('.js-calendar__button_type_apply');
    this.$clearButton = this.$calendar.find('.js-calendar__button_type_clear');
  }

  addEventListeners() {
    this.$tick.on('click', this.handleTickClick.bind(this));
    this.$applyButton.on('click', this.handleApplyButtonClick.bind(this));
    this.$clearButton.on('click', this.handleClearButtonClick.bind(this));
  }

  handleTickClick() {
    this.toggleCalendar();
  }

  handleApplyButtonClick() {
    this.toggleCalendar();
  }

  handleClearButtonClick() {
    this.$calendarData.clear();
  }

  handleCalendarSelectedData(formattedDate) {
    const [dateFrom, dateTo] = formattedDate.split('-');

    this.$fieldFrom.val(dateFrom);
    this.$fieldTo.val(dateTo);
  }

  toggleCalendar() {
    this.$container.toggleClass('calendar__container_hidden');
  }
}

export default Calendar;
