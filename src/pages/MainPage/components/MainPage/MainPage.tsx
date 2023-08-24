import { type FunctionComponent, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getBemClasses } from '@/shared/lib/classNameUtils';
import classes from './MainPage.module.scss';

const MainPage: FunctionComponent = memo(function MainPage () {
    const { t: translate } = useTranslation('MainPage');

    return (
        <div className={getBemClasses(classes)}>
            <h1 className={getBemClasses(classes, 'title')}>{translate('Главная страница')}</h1>
        </div>
    );
});

export default MainPage;
