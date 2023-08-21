import { type FC, memo, useMemo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getBemClasses } from '@/shared/lib/classNameUtils';
import { type BaseProps, Button } from '@/shared/components';
import classes from './Sidebar.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';

export type SidebarProps = Omit<BaseProps, 'children'>;

export const Sidebar: FC<SidebarProps> = memo<SidebarProps>(function Sidebar ({
    className,
    'data-testid': dataTestId = 'Sidebar'
}: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const onToggleCollapsed = useCallback(() => {
        setCollapsed((collapsed) => !collapsed);
    }, []);

    const icon = useMemo(() => {
        return collapsed ? <ArrowRightIcon /> : <ArrowLeftIcon />;
    }, [collapsed]);

    const { t: translate } = useTranslation();

    return (
        <div
            className={getBemClasses(classes, '', { collapsed }, [className])}
            data-testid={dataTestId}
        >
            <Button
                title={
                    collapsed
                        ? translate('Развернуть панель')
                        : translate('Свернуть панель')
                }
                className={getBemClasses(classes, 'CollapseSwitcher')}
                onClick={onToggleCollapsed}
            >
                {icon}
            </Button>
        </div>
    );
});
