import { type FC, memo } from 'react';

import { getBemClasses } from '@/shared/lib/classNameUtils';
import { type IconProps } from '../types';
import classes from '../Icon.module.scss';

export interface MoonIconProps extends IconProps {}

export const MoonIcon: FC<MoonIconProps> = memo<MoonIconProps>(
    function MoonIcon ({
        color = 'primary',
        size = 's',
        className,
        'data-testid': dataTestId = 'MoonIcon'
    }: MoonIconProps) {
        return (
            <svg
                fill="currentColor"
                viewBox="0 0 18 20"
                className={getBemClasses(classes, '', { color, size }, [className])}
                data-testid={dataTestId}
            >
                <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
            </svg>
        );
    }
);
