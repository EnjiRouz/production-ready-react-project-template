# Скрипт для создания нового компонента

Скрипт позволяет создать папку компонента с базовым наполнением.

При запуске скрипта нужно указать название компонента и путь к нему, например `Sidebar src/widgets` или `FileUploader src/shared/components`.
Можно скопировать в IDE относительный (relative) путь к той папке, куда нужно положить компонент.

Пример использования:
`npm run create-component Sidebar src/widgets`

Скрипт создаст набор файлов:

```bash
# файлы в папке компонента
./src/widgets/Sidebar/index.ts // заготовка для экспорта модуля с компонентом
./src/widgets/Sidebar/Sidebar.module.scss // заготовка для SCSS-модуля
./src/widgets/Sidebar/Sidebar.tsx // заготовка для компонента
./src/widgets/Sidebar/Sidebar.test.tsx // заготовка для RTL-тестов (react-testing-library)
./src/widgets/Sidebar/Sidebar.test.ts // заготовка для unit-тестов (можно переименовать или удалить, если не требуется)
./src/widgets/Sidebar/Sidebar.stories.tsx // заготовка для Storybook и скриншотных тестов
```
