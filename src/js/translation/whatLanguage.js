import { refs } from '../refs';

const { html } = refs;

export const whatLanguage = () => {
  const language = html.getAttribute('lang');

  if (language === 'en') {
    return 'en-US';
  } else {
    return 'uk-UA';
  }
};
