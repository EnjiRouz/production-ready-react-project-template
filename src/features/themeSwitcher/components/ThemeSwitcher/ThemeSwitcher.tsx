import { FC, memo, useMemo } from "react";

import { BaseProps, Button } from "@/shared/components";
import { Theme, useTheme } from "@/shared/lib/theme";
import { MoonIcon, SunIcon } from "@/shared/icons";

export interface ThemeSwitcherProps extends Omit<BaseProps, "children"> {}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo<ThemeSwitcherProps>(
  function ThemeSwitcher({
    className,
    "data-testid": dataTestId = "ThemeSwitcher",
  }) {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = useMemo(() => {
      return theme === Theme.LIGHT ? <MoonIcon /> : <SunIcon />;
    }, [theme]);

    return (
      <Button
        title="Switch Theme"
        onClick={toggleTheme}
        className={className}
        data-testid={dataTestId}
      >
        {themeIcon}
      </Button>
    );
  }
);
