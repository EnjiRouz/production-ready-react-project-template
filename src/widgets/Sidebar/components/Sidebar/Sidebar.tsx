import { FC, memo, useMemo, useCallback, useRef } from "react";

import { getBemClasses } from "@/shared/lib/classNameUtils";
import { BaseProps } from "@/shared/components";
import classes from "./Sidebar.module.scss";

export type SidebarProps = BaseProps & {};

export const Sidebar: FC<SidebarProps> = memo<SidebarProps>(function Sidebar({
  children,
  className,
  "data-testid": dataTestId = "Sidebar",
  ...otherProps
}) {
  return (
    <div
      className={getBemClasses(classes, "", {}, [className])}
      data-testid={dataTestId}
      {...otherProps}
    >
      {children}
    </div>
  );
});
