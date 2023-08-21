module.exports = function (componentName) {
    return `export { ${componentName} } from './components/${componentName}';
`;
};
