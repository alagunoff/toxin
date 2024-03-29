const DEFAULT_CALENDAR_PARAMETRS = {
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
  inline: true,
};

export default DEFAULT_CALENDAR_PARAMETRS;
