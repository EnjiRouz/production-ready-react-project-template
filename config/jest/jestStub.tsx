/**
 * Компонент-заглушка для тестов.
 * Можно использовать вместо изображений и других неинтерактивных элементов
 */
export const JestStub = (): JSX.Element => {
    return <div data-testid="JestStub"/>;
}
