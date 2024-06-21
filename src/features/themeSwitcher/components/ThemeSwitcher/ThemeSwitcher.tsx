import { type FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { type BaseProps, Button } from '@/shared/components';
import { MoonIcon, SunIcon } from '@/shared/icons';
import { Theme, useTheme } from '@/shared/lib/theme';

export interface ThemeSwitcherProps extends Omit<BaseProps, 'children'> {}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo<ThemeSwitcherProps>(
    function ThemeSwitcher ({
        className,
        'data-testid': dataTestId = 'ThemeSwitcher'
    }: ThemeSwitcherProps) {
        const { theme, toggleTheme } = useTheme();

        const themeIcon = useMemo(() => {
            return theme === Theme.LIGHT
                ? <MoonIcon data-testid={`${dataTestId}.MoonIcon`}/>
                : <SunIcon data-testid={`${dataTestId}.SunIcon`}/>;
        }, [dataTestId, theme]);

        const { t: translate } = useTranslation();

        return (
            <Button
                title={translate('Переключить тему')}
                onClick={toggleTheme}
                className={className}
                data-testid={dataTestId}
            >
                {themeIcon}
            </Button>
        );
    }
);
