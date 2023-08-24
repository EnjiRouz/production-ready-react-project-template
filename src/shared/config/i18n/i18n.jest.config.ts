import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// eslint-disable-next-line @typescript-eslint/no-floating-promises -- использование согласно документации i18next
i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,
        resources: { ru: { translations: {} } }
    });

export default i18n;
