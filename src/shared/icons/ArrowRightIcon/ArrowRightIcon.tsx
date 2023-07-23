import { FC, memo, useMemo, useCallback, useRef, useState } from "react";

import { getBemClasses } from "@/shared/lib/classNameUtils";
import { IconProps } from "../types";
import classes from "../Icon.module.scss";

export interface ArrowRightIconProps extends IconProps {}

export const ArrowRightIcon: FC<ArrowRightIconProps> =
  memo<ArrowRightIconProps>(function ArrowRightIcon({
    color = "primary",
    size = "16",
    className,
    "data-testid": dataTestId = "ArrowRightIcon",
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
          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
        />
      </svg>
    );
  });
