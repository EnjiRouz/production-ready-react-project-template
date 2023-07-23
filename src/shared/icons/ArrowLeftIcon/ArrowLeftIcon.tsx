import { FC, memo, useMemo, useCallback, useRef, useState } from "react";

import { getBemClasses } from "@/shared/lib/classNameUtils";
import { IconProps } from "../types";
import classes from "../Icon.module.scss";

export interface ArrowLeftIconProps extends IconProps {}

export const ArrowLeftIcon: FC<ArrowLeftIconProps> = memo<ArrowLeftIconProps>(
  function ArrowLeftIcon({
    color = "primary",
    size = "16",
    className,
    "data-testid": dataTestId = "ArrowLeftIcon",
  }) {
    return (
      <svg
        fill="none"
        viewBox="0 0 8 14"
        className={getBemClasses(classes, "", { color, size }, [className])}
        data-testid={dataTestId}
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
        />
      </svg>
    );
  }
);
