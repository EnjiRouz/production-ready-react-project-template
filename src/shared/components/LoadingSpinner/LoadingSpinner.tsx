import { type FC, memo } from 'react';

import { type BaseProps } from '@/shared/components';
import { SpinnerIcon } from '@/shared/icons';
import { type IconProps } from '@/shared/icons/types';
import { getBemClasses } from '@/shared/lib/classNameUtils';

import classes from './LoadingSpinner.module.scss';

export type LoadingSpinnerProps = Omit<BaseProps, 'children'> & IconProps;

export const LoadingSpinner: FC<LoadingSpinnerProps> = memo<LoadingSpinnerProps>(function LoadingSpinner ({
    size,
    color = 'blue',
    className,
    'data-testid': dataTestId = 'LoadingSpinner'
}: LoadingSpinnerProps) {
    return (
        <div className={getBemClasses(classes, '', {}, [className])} data-testid={dataTestId}>
            <SpinnerIcon size={size} color={color} className={getBemClasses(classes, 'icon')}/>
        </div>
    );
});
