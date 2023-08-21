import { type FunctionComponent, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getBemClasses } from '@/shared/lib/classNameUtils';
import classes from './AboutPage.module.scss';

const AboutPage: FunctionComponent = memo(function AboutPage () {
    const { t: translate } = useTranslation('AboutPage');
    return (
        <div className={getBemClasses(classes)}>
            {translate("Страница 'О проекте'")}
        </div>
    );
});

export default AboutPage;
