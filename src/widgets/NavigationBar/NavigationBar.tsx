import { type FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@/features/languageSwitcher';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { type BaseProps, Link } from '@/shared/components';
import { routeConfig } from '@/shared/config/routeConfig';
import { getBemClasses } from '@/shared/lib/classNameUtils';

import classes from './NavigationBar.module.scss';

// TODO добавить stories и test

export interface NavigationBarProps extends Omit<BaseProps, 'children'> {}

export const NavigationBar: FC<NavigationBarProps> = memo<NavigationBarProps>(
    function NavigationBar ({
        className,
        'data-testid': dataTestId = 'NavigationBar'
    }: NavigationBarProps) {
        const { t: translate } = useTranslation();

        const navigationLinks = useMemo(() => {
            return Object.values(routeConfig).map(({ name, path }) => {
                if (!name || !path) return null;

                const fullLinkPath = new URL(path, document.baseURI).href;

                return (
                    <Link color="white" title={fullLinkPath} to={path} key={path}>
                        {translate(name)}
                    </Link>
                )
            });
        }, [translate]);

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
