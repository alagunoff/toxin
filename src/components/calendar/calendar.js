/* eslint max-len: off */
import 'air-datepicker';

import Button from 'components/button/button';

import DEFAULT_PARAMETERS from './constants';

class Calendar {
  constructor(parameters) {
    this.init(parameters);
  }

  init({ calendar, onConfirmDate }) {
    this.$calendar = $(calendar);

    this.bindHandlers();

    this.$calendar.datepicker({
      ...DEFAULT_PARAMETERS,
      onSelect: this.handleDayClick,
    });
    this.$calendarData = this.$calendar.data('datepicker');
    this.$calendar.append(this.$calendar.find('.js-calendar__buttons'));

    this.onConfirmDate = onConfirmDate;
    this.dateFormatter = new Intl.DateTimeFormat('ru');

    this.initInstancies();
  }

  bindHandlers() {
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
  }

  initInstancies() {
    this.buttonClear = new Button({
      button: this.$calendar.find('.js-button_type_clear')[0],
      onClick: this.handleClearButtonClick,
    });

    this.buttonApply = new Button({
      button: this.$calendar.find('.js-button_type_apply')[0],
      onClick: this.handleApplyButtonClick,
    });
  }

  handleDayClick() {
    const { selectedDates } = this.$calendarData;

    if (selectedDates.length === 0) {
      this.buttonClear.hide();
    } else {
      this.buttonClear.show();
    }
  }

  handleClearButtonClick() {
    this.$calendarData.clear();
  }

  handleApplyButtonClick() {
    const { onConfirmDate } = this;

    if (onConfirmDate) {
      const { selectedDates } = this.$calendarData;

      switch (selectedDates.length) {
        case 2: {
          const [dateFrom, dateTo] = selectedDates.map((selectedDate) => this.dateFormatter.format(selectedDate));

          onConfirmDate({ dateFrom, dateTo });
        }
          break;
        case 1: {
          const dateFrom = this.dateFormatter.format(selectedDates[0]);

          onConfirmDate({ dateFrom, dateTo: '' });
        }
          break;
        default:
          onConfirmDate({ dateFrom: '', dateTo: '' });
      }
    }
  }
}

export default Calendar;
