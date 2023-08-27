import { type FC, memo } from 'react';

import { getBemClasses } from '@/shared/lib/classNameUtils';

import { type BaseProps } from '../types';

import classes from './Button.module.scss';

type ButtonColor = 'primary' | 'secondary';

export type ButtonProps = BaseProps & {
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

    /**
     * Тип кнопки
     * @default 'button'
     */
    type?: 'submit' | 'reset' | 'button';
};

export const Button: FC<ButtonProps> = memo<ButtonProps>(function Button ({
    children,
    title,
    onClick,
    isDisabled,
    color = 'primary',
    type = 'button',
    className,
    'data-testid': dataTestId = 'Button',
    ...otherProps
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            title={title}
            className={getBemClasses(classes, '', { color, disabled: isDisabled }, [className])}
            data-testid={dataTestId}
            {...otherProps}
        >
            {children}
        </button>
    );
});

Button.defaultProps = {
    type: 'button',
    color: 'primary',
    isDisabled: false,
    'data-testid': 'Button'
}
