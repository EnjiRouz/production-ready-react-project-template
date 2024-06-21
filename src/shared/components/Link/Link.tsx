import { type FC, memo } from 'react';
import {
    Link as ReactRouterDomLink,
    type LinkProps as ReactRouterDomLinkProps
} from 'react-router-dom';

import { getBemClasses } from '@/shared/lib/classNameUtils';

import { type BaseProps } from '../types';

import classes from './Link.module.scss';

type LinkColor = 'white' | 'blue';

export interface LinkProps extends BaseProps, ReactRouterDomLinkProps {
    /**
     * Цветовая тема элемента
     * @default 'white'
     */
    color?: LinkColor;

    /**
     * Подпись к ссылке при наведении мыши
     */
    title: string;
}

export const Link: FC<LinkProps> = memo<LinkProps>(function Link ({
    children,
    to,
    color = 'white',
    title,
    className,
    'data-testid': dataTestId = 'Link'
}: LinkProps) {
    // TODO сделать отдельные ссылки для Router и для обычных ссылок
    // TODO добавить isDisabled и onClick

    return (
        <ReactRouterDomLink
            to={to}
            title={title}
            className={getBemClasses(classes, '', { color }, [className])}
            data-testid={dataTestId}
        >
            {children}
        </ReactRouterDomLink>
    );
});

Link.defaultProps = {
    color: 'white',
    'data-testid': 'Links'
}
