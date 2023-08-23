module.exports = function (componentName) {
    return `import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
    test('Должен TODO', () => {
        const result = {};
        const expected = {};
        
        expect(result).toBe(expected);
    });
});
`;
};
