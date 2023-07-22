/**
 * Тип для указания модификаторов
 */
type Modifiers = Record<string, boolean | string>;

/**
 * Генерация названий классов элемента по методологии БЭМ
 * @param elementName название элемента
 * @param modifiers модификаторы
 * @param additionalClassNames дополнительные классы
 */
export function classNames(elementName: string, modifiers?: Modifiers, additionalClassNames?: string[]): string {
    const enabledModifiers = Object.entries(modifiers).filter(([className, isEnabled]) => Boolean(isEnabled))
    const modifiersClassNames = enabledModifiers.map(([className]) => className);

    return [
        elementName,
        ...modifiersClassNames,
        ...additionalClassNames
    ].join(' ');
}