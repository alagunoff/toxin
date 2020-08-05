import 'air-datepicker';

import DEFAULT_PARAMETERS from './constants';

class DatePicker {
  constructor($datePicker) {
    this.$datePicker = $datePicker;

    this.init();
  }

  init() {
    this.findDomElements();
    this.addEventListeners();

    this.$container.datepicker({
      ...DEFAULT_PARAMETERS,
      onSelect: this.handledatePickerSelectedData.bind(this),
    });

    this.$datePickerData = this.$container.data('datepicker');
  }

  findDomElements() {
    this.$container = this.$datePicker.find('.js-date-picker__container');
    this.$tick = this.$datePicker.find('.js-date-picker__tick');
    this.$fieldInit = this.$datePicker.find('.js-date-picker__field_type_init');
    this.$fieldFrom = this.$datePicker.find('.js-date-picker__field_type_from');
    this.$fieldTo = this.$datePicker.find('.js-date-picker__field_type_to');
    this.$applyButton = this.$datePicker.find('.js-date-picker__button_type_apply');
    this.$clearButton = this.$datePicker.find('.js-date-picker__button_type_clear');
  }

  addEventListeners() {
    this.$tick.on('click', this.handleTickClick.bind(this));
    this.$applyButton.on('click', this.handleApplyButtonClick.bind(this));
    this.$clearButton.on('click', this.handleClearButtonClick.bind(this));
  }

  handleTickClick() {
    this.toggledatePicker();
  }

  handleApplyButtonClick() {
    this.toggledatePicker();
  }

  handleClearButtonClick() {
    this.$datePickerData.clear();
  }

  handledatePickerSelectedData(formattedDate) {
    const [dateFrom, dateTo] = formattedDate.split('-');

    this.$fieldFrom.val(dateFrom);
    this.$fieldTo.val(dateTo);
  }

  toggledatePicker() {
    this.$container.toggleClass('date-picker__container_hidden');
  }
}

export default DatePicker;
