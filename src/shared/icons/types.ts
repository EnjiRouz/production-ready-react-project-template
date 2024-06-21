import { type BaseProps } from '../components';

type IconColor = 'white' | 'blue';
type IconSize = 's' | 'm' | 'l';

export interface IconProps extends Omit<BaseProps, 'children'> {
    /**
     * Цвет иконки
     * @default 'primary'
     */
    color?: IconColor;

    /**
     * Размер иконки
     * @default '16'
     */
    size?: IconSize;
}
