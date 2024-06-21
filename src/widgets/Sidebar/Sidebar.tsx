import { type FC, memo, useMemo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { type BaseProps, Button } from '@/shared/components';
import { ArrowLeftIcon, ArrowRightIcon } from '@/shared/icons';
import { getBemClasses } from '@/shared/lib/classNameUtils';

import classes from './Sidebar.module.scss';

// TODO добавить stories и test

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
        return collapsed
            ? <ArrowRightIcon data-testid={`${dataTestId}.CollapseSwitcher.ArrowRightIcon`} />
            : <ArrowLeftIcon data-testid={`${dataTestId}.CollapseSwitcher.ArrowLeftIcon`}/>;
    }, [collapsed, dataTestId]);

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
                data-testid={`${dataTestId}.CollapseSwitcher`}
            >
                {icon}
            </Button>
        </div>
    );
});
