import { FC, memo, useMemo } from 'react';
import { Link as ReactRouterDomLink, LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';

import { getBemClasses } from '@/shared/lib/classNameUtils';

import { BaseProps } from '../types';
import classes from './Link.module.scss';

type LinkColorTheme = 'primary' | 'secondary';

export interface LinkProps extends BaseProps, ReactRouterDomLinkProps {
    /**
     * Цветовая тема элемента
     */
    themeMode?: LinkColorTheme;
}

export const Link: FC<LinkProps> = memo<LinkProps>(function Link({ children, to, themeMode = 'primary', className, "data-testid": dataTestId = "NavigationBar", ...otherProps }) {     
    return (
      <ReactRouterDomLink to={to} className={getBemClasses(classes, '', { themeMode }, [className])} data-testid={dataTestId} {...otherProps}>{children}</ReactRouterDomLink>
    );
  }
);