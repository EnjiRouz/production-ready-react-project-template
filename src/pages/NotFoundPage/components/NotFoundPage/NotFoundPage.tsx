import { type FunctionComponent, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getBemClasses } from '@/shared/lib/classNameUtils';

import classes from './NotFoundPage.module.scss';

const NotFoundPage: FunctionComponent = memo(function NotFoundPage () {
    const { t: translate } = useTranslation('NotFoundPage');
    return (
        <div className={getBemClasses(classes)}>
            <h1 className={getBemClasses(classes, 'title')}>{translate('Страница не найдена')}</h1>
        </div>
    );
});

export default NotFoundPage;
