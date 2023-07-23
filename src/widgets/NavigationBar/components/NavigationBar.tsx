import { FC, memo, useMemo } from "react";

import { routeConfig } from "@/shared/config/routeConfig";
import { getBemClasses } from '@/shared/lib/classNameUtils';
import { BaseProps } from "@/shared/components/types";
import { Link } from "@/shared/components/Link";

import classes from './NavigationBar.module.scss';

export interface NavigationBarProps extends Omit<BaseProps, 'children'> {}

export const NavigationBar: FC<NavigationBarProps> = memo<NavigationBarProps>(function NavigationBar({ className, "data-testid": dataTestId = "NavigationBar" }) {   
  const navigationLinks = useMemo(() => {
        return Object.values(routeConfig).map(({ name, path }) => <Link themeMode="secondary" to={path} key={path}>{name}</Link>);
    }, []);

    return (
      <div className={getBemClasses(classes, '', {}, [className])} data-testid={dataTestId}>
        <div className={getBemClasses(classes, 'Links', {}, [])}>{navigationLinks}</div>
      </div>
    );
  }
);