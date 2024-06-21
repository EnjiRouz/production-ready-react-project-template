/* eslint-disable no-console -- здесь используются служебные логи */
const { existsSync, mkdirSync, writeFileSync } = require('fs');
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

if (existsSync(componentDirectory)) {
    throw new Error('Компонент с таким именем уже существует');
} else {
    mkdirSync(componentDirectory, { recursive: true });
}

// шаблоны файлов компонента
const templates = [
    { file: `${componentDirectory}/${componentName}.module.scss`, template: require('./templates/scss.js') },
    { file: `${componentDirectory}/${componentName}.tsx`, template: require('./templates/component.js') },
    { file: `${componentDirectory}/${componentName}.test.tsx`, template: require('./templates/rtl_unit_test.js') },
    { file: `${componentDirectory}/${componentName}.test.ts`, template: require('./templates/unit_test.js') },
    { file: `${componentDirectory}/${componentName}.stories.tsx`, template: require('./templates/stories.js') },
    { file: `${componentDirectory}/${componentName}.index.ts`, template: require('./templates/main.js') }
];

function createFile (file, template) {
    writeFileSync(file, template);
    console.log(file);
}

// создание файлов компонента по шаблонам
templates.forEach(item => {
    if (item.directory) {
        mkdirSync(item.directory);
    } else {
        createFile(item.file, item.template(componentName, pathToCreateComponent.replace('src/', '')));
    }
});

console.log(`Создан компонент в папке ${componentDirectory}`);

// TODO поставить и настроить конфиг prettier
// console.log(`Запуск Prettier в папке ${componentDirectory}`);
// exec(`pnpm exec prettier --write '${componentDirectory}/*.{js,jsx,ts,tsx,css,scss,json,yaml,yml,md}'`);

console.log(`Запуск ESLint в папке ${componentDirectory}`);
exec(`eslint --ext .ts,.tsx ${componentDirectory} --fix`);

console.log('Готово');
