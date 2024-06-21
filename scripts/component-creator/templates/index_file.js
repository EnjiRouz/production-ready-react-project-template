module.exports = function (componentName) {
    return `export { ${componentName} } from './${componentName}';`;
};
