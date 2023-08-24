import { type FC, memo } from 'react';

import { getBemClasses } from '@/shared/lib/classNameUtils';

import { type IconProps } from '../types';
import classes from '../Icon.module.scss';

export interface SpinnerIconProps extends IconProps {}

export const SpinnerIcon: FC<SpinnerIconProps> = memo<SpinnerIconProps>(
    function SpinnerIcon ({
        color = 'primary',
        size = 's',
        className,
        'data-testid': dataTestId = 'SpinnerIcon'
    }: SpinnerIconProps) {
        return (
            <svg className={getBemClasses(classes, '', { color, size }, [className])} data-testid={dataTestId} fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
            </svg>
        );
    }
);
