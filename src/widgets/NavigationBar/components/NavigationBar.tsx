import { FC, memo, useMemo } from "react";
import { Link, Route } from "react-router-dom";

import { routeConfig } from "@/shared/config/routeConfig";
import { classNames } from "@/shared/lib/classNames";
import { BaseProps } from "@/shared/lib/types";

import classes from './NavigationBar.module.scss';

export interface NavigationBarProps extends BaseProps {}

export const NavigationBar: FC<NavigationBarProps> = memo<NavigationBarProps>(function NavigationBar({ className, "data-testid": dataTestId = "NavigationBar" }) { 
    const navigationLinks = useMemo(() => {
        return Object.values(routeConfig).map(({ name, path }) => <Link to={path} key={path}>{name}</Link>);
    }, []);

    return (
      <div className={classNames(classes.NavigationBar, {}, [className])} data-testid={dataTestId}>
        <div className={classNames(classes.NavigationBar__Links)}>{navigationLinks}</div>
      </div>
    );
  }
);