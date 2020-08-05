import 'air-datepicker';

import Button from 'components/button/button';

import DEFAULT_PARAMETERS from './constants';

class Calendar {
  constructor(parameters) {
    this.handleApplyButtonClick = this.handleApplyButtonClick.bind(this);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);

    this.init(parameters);
  }

  init({ calendar, onConfirmDate }) {
    this.$calendar = $(calendar);
    this.onConfirmDate = onConfirmDate;
    this.dateFormatter = new Intl.DateTimeFormat('ru');

    this.$calendar.datepicker({
      ...DEFAULT_PARAMETERS,
    });

    calendar.append(calendar.querySelector('.js-calendar__buttons'));

    this.buttonClear = new Button({
      button: calendar.querySelectorAll('.js-button')[0],
      onClick: this.handleClearButtonClick,
    });

    this.buttonApply = new Button({
      button: calendar.querySelectorAll('.js-button')[1],
      onClick: this.handleApplyButtonClick,
    });

    this.$calendarData = this.$calendar.data('datepicker');
  }

  handleClearButtonClick() {
    this.$calendarData.clear();
  }

  handleApplyButtonClick() {
    const { selectedDates } = this.$calendarData;

    switch (selectedDates.length) {
      case 2: {
        const [dateFrom, dateTo] = selectedDates.map((selectedDate) => this.dateFormatter.format(selectedDate));

        this.onConfirmDate({
          dateFrom,
          dateTo,
        });
      }
        break;
      case 1: {
        const dateFrom = this.dateFormatter.format(selectedDates[0]);

        this.onConfirmDate({
          dateFrom,
          dateTo: '',
        });
      }
        break;
      default:
        this.onConfirmDate({
          dateFrom: '',
          dateTo: '',
        });
    }
  }
}

export default Calendar;
