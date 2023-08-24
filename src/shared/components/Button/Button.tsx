import { type ButtonHTMLAttributes, type FC, memo } from 'react';

import { getBemClasses } from '@/shared/lib/classNameUtils';

import { type BaseProps } from '../types';

import classes from './Button.module.scss';

type ButtonColor = 'primary' | 'secondary';

export type ButtonProps = BaseProps &
ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Обработчик нажатия на кнопку
     */
    onClick: () => void;

    /**
     * Подпись к кнопки при наведении мыши
     */
    title: string;

    /**
     * Цветовая тема элемента
     * @default 'primary'
     */
    color?: ButtonColor;

    /**
     * Отключение кнопки
     * @default false
     */
    isDisabled?: boolean;
};

export const Button: FC<ButtonProps> = memo<ButtonProps>(function Button ({
    children,
    title,
    onClick,
    isDisabled,
    color = 'primary',
    className,
    'data-testid': dataTestId = 'Button',
    ...otherProps
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            title={title}
            className={getBemClasses(classes, '', { color }, [className])}
            data-testid={dataTestId}
            {...otherProps}
        >
            {children}
        </button>
    );
});

Button.defaultProps = {
    color: 'primary',
    isDisabled: false,
    'data-testid': 'Button'
}
