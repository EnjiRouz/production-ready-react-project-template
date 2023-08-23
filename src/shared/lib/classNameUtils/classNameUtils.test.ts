import { mixClassNames, getBemClasses } from './classNameUtils';

describe('classNameUtils', () => {
    describe('mixClassNames', () => {
        test('Должен вернуть один className', () => {
            const classNames = mixClassNames('block');
            expect(classNames).toBe('block');
        });

        test('Должен вернуть список classNames через пробел', () => {
            const classes = ['block', 'element', 'modifier'];
            const classNames = mixClassNames('  ', '', ...classes);
            expect(classNames).toBe('block element modifier');
        });
    });

    const cssModuleClasses = {
        Button: 'Button',
        Button_color_primary: 'Button_color_primary',
        Button_disabled: 'Button_disabled',
        Button_size_14: 'Button_size_14',
        Button__icon: 'Button__icon',
        Button__icon_color_primary: 'Button__icon_color_primary',
        Button__icon_disabled: 'Button__icon_disabled',
        Button__icon_size_14: 'Button__icon_size_14'
    };

    describe('getBemClasses', () => {
        test('Должен вернуть список classNames блока через пробел', () => {
            const classNames = getBemClasses(cssModuleClasses);
            expect(classNames).toBe('Button');
        });

        test('Должен вернуть список classNames блока с модификаторами через пробел', () => {
            const classNames = getBemClasses(cssModuleClasses, '', { color: 'primary', disabled: true, size: 14 });
            expect(classNames).toBe('Button Button_color_primary Button_disabled Button_size_14');
        });

        test('Должен вернуть список classNames блока с модификаторами и дополнительными классами через пробел', () => {
            const classNames = getBemClasses(cssModuleClasses, '', { color: 'primary', disabled: true, size: 14 }, ['className', 'test class']);
            expect(classNames).toBe('Button Button_color_primary Button_disabled Button_size_14 className test class');
        });

        test('Должен вернуть список classNames элемента через пробел', () => {
            const classNames = getBemClasses(cssModuleClasses, 'icon');
            expect(classNames).toBe('Button__icon');
        });

        test('Должен вернуть список classNames элемента с модификаторами через пробел', () => {
            const classNames = getBemClasses(cssModuleClasses, 'icon', { color: 'primary', disabled: true, size: 14 });
            expect(classNames).toBe('Button__icon Button__icon_color_primary Button__icon_disabled Button__icon_size_14');
        });

        test('Должен вернуть список classNames элемента с модификаторами и дополнительными классами через пробел', () => {
            const classNames = getBemClasses(cssModuleClasses, 'icon', { color: 'primary', disabled: true, size: 14 }, ['className', 'test class']);
            expect(classNames).toBe('Button__icon Button__icon_color_primary Button__icon_disabled Button__icon_size_14 className test class');
        });
    });
});
