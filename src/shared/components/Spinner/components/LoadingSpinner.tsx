import { type FC, memo } from 'react';

import { getBemClasses } from '@/shared/lib/classNameUtils';
import { type BaseProps } from '@/shared/components';
import { SpinnerIcon } from '@/shared/icons';
import { type IconProps } from '@/shared/icons/types';

import classes from './LoadingSpinner.module.scss';

export type LoadingSpinnerProps = Omit<BaseProps, 'children'> & IconProps;

export const LoadingSpinner: FC<LoadingSpinnerProps> = memo<LoadingSpinnerProps>(function LoadingSpinner ({
    size,
    color = 'secondary',
    className,
    'data-testid': dataTestId = 'LoadingSpinner'
}: LoadingSpinnerProps) {
    return (
        <div className={getBemClasses(classes, '', {}, [className])} data-testid={dataTestId}>
            <SpinnerIcon size={size} color={color} className={getBemClasses(classes, 'icon')}/>
        </div>
    );
});