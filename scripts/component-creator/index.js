const fs = require('fs');
const { resolve } = require('path');
const { exec } = require('node:child_process');

const argv = process.argv.slice(2);
const rawComponentName = argv[0];
const pathToCreateComponent = argv[1];

// преобразование первого символа в верхний регистр
const componentName = rawComponentName[0].toUpperCase() + rawComponentName.slice(1);

// создание папки для размещения файлов компонента
const componentDirectory = resolve(__dirname, `../../${pathToCreateComponent}/${componentName}`);
console.log(`Создание компонента с названием ${componentName} в папке ${componentDirectory}`);

if (fs.existsSync(componentDirectory)) {
    throw new Error('Компонент с таким именем уже существует');
} else {
    fs.mkdirSync(componentDirectory, { recursive: true });
}

// шаблоны файлов компонента
const templates = [
    { file: `${componentDirectory}/index.ts`, template: require('./templates/main.js') },
    { directory: `${componentDirectory}/components/` },
    { file: `${componentDirectory}/components/${componentName}.module.scss`, template: require('./templates/scss.js') },
    { file: `${componentDirectory}/components/${componentName}.tsx`, template: require('./templates/component.js') },
    { file: `${componentDirectory}/components/${componentName}.test.tsx`, template: require('./templates/rtl_unit_test.js') },
    { file: `${componentDirectory}/components/${componentName}.test.ts`, template: require('./templates/unit_test.js') }
];

function createFile (file, template) {
    fs.writeFileSync(file, template);
    console.log(file);
}

// создание файлов компонента по шаблонам
templates.forEach(item => {
    if (item.directory) {
        fs.mkdirSync(item.directory);
    } else {
        createFile(item.file, item.template(componentName));
    }
});

console.log(`Создан компонент в папке ${componentDirectory}`);

// console.log(`Запуск Prettier в папке ${componentDirectory}`);
// exec(`pnpm exec prettier --write '${componentDirectory}/*.{js,jsx,ts,tsx,css,scss,json,yaml,yml,md}'`);

console.log(`Запуск ESLint в папке ${componentDirectory}`);
exec(`eslint --ext .ts,.tsx ${componentDirectory} --fix`);

console.log('Готово');
