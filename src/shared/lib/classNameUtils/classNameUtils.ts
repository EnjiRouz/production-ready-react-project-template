import block from 'bem-css-modules';

/**
 * Тип для определения css-модуля
 */
type CssModule = Record<string, string>;

/**
 * Тип для указания модификаторов
 */
type Modifiers = Record<string, boolean | string | number | undefined>;

/**
 * Генерация названий классов элемента из массива
 * @param classNames названия классов элемента
 * @returns классы элемента
 */
export function mixClassNames (
    ...classNames: Array<string | undefined | null>
): string {
    return classNames
        .filter((className) => className != null && className.trim() !== '')
        .join(' ');
}

/**
 * Генерация названий классов элемента по методологии БЭМ
 * Документация по БЭМ: https://ru.bem.info/methodology/quick-start/
 * @param cssModuleClasses css-модуль, в котором находятся определения классов элемента
 * @param elementName название элемента
 * @param modifiers модификаторы элемента
 * @param additionalClassNames дополнительные классы элемента
 * @returns классы элемента
 */
export function getBemClasses (
    cssModuleClasses: CssModule,
    elementName: string = '',
    modifiers: Modifiers = {},
    additionalClassNames: string[] = []
): string {
    const classes = block(cssModuleClasses);
    const bemClasses = classes(elementName, modifiers);

    return mixClassNames(bemClasses, ...additionalClassNames);
}
