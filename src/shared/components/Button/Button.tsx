import { type FC, memo } from 'react';

import { getBemClasses } from '@/shared/lib/classNameUtils';

import { type BaseProps } from '../types';

import classes from './Button.module.scss';

type ButtonColor = 'white' | 'blue';

export type ButtonProps = BaseProps & {
    /**
     * Обработчик нажатия на кнопку
     */
    onClick: () => void;

    /**
     * Подпись к кнопке при наведении мыши
     */
    title: string;

    /**
     * Цветовая тема элемента
     * @default 'white'
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
    color = 'white',
    type = 'button',
    className,
    'data-testid': dataTestId = 'Button'
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            title={title}
            type={type}
            className={getBemClasses(classes, '', { color, disabled: isDisabled }, [className])}
            data-testid={dataTestId}
        >
            {children}
        </button>
    );
});

Button.defaultProps = {
    type: 'button',
    color: 'white',
    isDisabled: false,
    'data-testid': 'Button'
}
