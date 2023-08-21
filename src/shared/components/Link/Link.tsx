import { type FC, memo } from 'react';
import {
    Link as ReactRouterDomLink,
    type LinkProps as ReactRouterDomLinkProps
} from 'react-router-dom';

import { getBemClasses } from '@/shared/lib/classNameUtils';

import { type BaseProps } from '../types';
import classes from './Link.module.scss';

type LinkColor = 'primary' | 'secondary';

export interface LinkProps extends BaseProps, ReactRouterDomLinkProps {
    /**
     * Цветовая тема элемента
     * @default 'primary'
     */
    color?: LinkColor;
}

export const Link: FC<LinkProps> = memo<LinkProps>(function Link ({
    children,
    to,
    color = 'primary',
    className,
    'data-testid': dataTestId = 'Link',
    ...otherProps
}: LinkProps) {
    return (
        <ReactRouterDomLink
            to={to}
            className={getBemClasses(classes, '', { color }, [className])}
            data-testid={dataTestId}
            {...otherProps}
        >
            {children}
        </ReactRouterDomLink>
    );
});

Link.defaultProps = {
    color: 'primary',
    'data-testid': 'Links'
}
