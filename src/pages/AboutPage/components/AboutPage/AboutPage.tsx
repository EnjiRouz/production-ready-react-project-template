import { type FunctionComponent, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { getBemClasses } from '@/shared/lib/classNameUtils';
import classes from './AboutPage.module.scss';

const AboutPage: FunctionComponent = memo(function AboutPage () {
    const { t: translate } = useTranslation('AboutPage');
    return (
        <div className={getBemClasses(classes)}>
            <h1 className={getBemClasses(classes, 'title')}>{translate("Страница 'О проекте'")}</h1>
        </div>
    );
});

export default AboutPage;
