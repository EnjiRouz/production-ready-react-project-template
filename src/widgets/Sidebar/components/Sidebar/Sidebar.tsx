import { FC, memo, useMemo, useCallback, useRef, useState } from "react";

import { getBemClasses } from "@/shared/lib/classNameUtils";
import { BaseProps, Button } from "@/shared/components";
import classes from "./Sidebar.module.scss";
import { ArrowLeftIcon, ArrowRightIcon } from "@/shared/icons";

export type SidebarProps = Omit<BaseProps, "children"> & {};

export const Sidebar: FC<SidebarProps> = memo<SidebarProps>(function Sidebar({
  className,
  "data-testid": dataTestId = "Sidebar",
  ...otherProps
}) {
  const [collapsed, setCollapsed] = useState(false);
  const onToggleCollapsed = useCallback(() => {
    setCollapsed((collapsed) => !collapsed);
  }, []);

  const icon = useMemo(() => {
    return collapsed ? <ArrowRightIcon /> : <ArrowLeftIcon />;
  }, [collapsed]);

  return (
    <div
      className={getBemClasses(classes, "", { collapsed }, [className])}
      data-testid={dataTestId}
      {...otherProps}
    >
      <Button
        className={getBemClasses(classes, "CollapseSwitcher")}
        onClick={onToggleCollapsed}
      >
        {icon}
      </Button>
    </div>
  );
});
