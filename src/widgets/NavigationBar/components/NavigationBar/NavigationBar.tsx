import { type FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/features/languageSwither/LanguageSwitcher';
import { ThemeSwitcher } from '@/features/themeSwitcher/components';
import { routeConfig } from '@/shared/config/routeConfig';
import { getBemClasses } from '@/shared/lib/classNameUtils';
import { type BaseProps, Link } from '@/shared/components';

import classes from './NavigationBar.module.scss';

export interface NavigationBarProps extends Omit<BaseProps, 'children'> {}

export const NavigationBar: FC<NavigationBarProps> = memo<NavigationBarProps>(
    function NavigationBar ({
        className,
        'data-testid': dataTestId = 'NavigationBar'
    }: NavigationBarProps) {
        const { t: translate, i18n } = useTranslation();
        const currentLanguage = i18n.language;

        const navigationLinks = useMemo(() => {
            return Object.values(routeConfig).map(({ name, path }) => (
                <Link color="secondary" to={path} key={path}>
                    {translate(name)}
                </Link>
            ));
        }, [currentLanguage]);

        return (
            <div
                className={getBemClasses(classes, '', {}, [className])}
                data-testid={dataTestId}
            >
                <ThemeSwitcher />
                <LanguageSwitcher />
                <div className={getBemClasses(classes, 'Links')}>{navigationLinks}</div>
            </div>
        );
    }
);
