import Header from 'components/header/header';

import './login.scss';

const headers = document.querySelectorAll('.js-header');
headers.forEach((header) => new Header(header));
