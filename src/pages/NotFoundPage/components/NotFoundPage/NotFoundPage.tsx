import { type FunctionComponent, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getBemClasses } from '@/shared/lib/classNameUtils';
import classes from './NotFoundPage.module.scss';

const NotFoundPage: FunctionComponent = memo(function NotFoundPage () {
    const { t: translate } = useTranslation('NotFoundPage');
    return (
        <div className={getBemClasses(classes)}>
            {translate('Страница не найдена')}
        </div>
    );
});

export default NotFoundPage;
