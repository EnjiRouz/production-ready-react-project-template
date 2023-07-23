# Скрипт для создания нового компонента

Скрипт позволяет создать папку компонента с базовым наполнением.

При запуске скрипта нужно указать название компонента и путь к нему, например `Sidebar src/widgets` или `FileUploader src/shared/components`.
Можно скопировать в IDE относительный (relative) путь к той папке, куда нужно положить компонент.

Пример использования:
`npm run create-component Sidebar src/widgets`

Скрипт создаст набор файлов:

```bash
# файлы в папке компонента
./src/widgets/Sidebar/index.ts
./src/widgets/Sidebar/Sidebar.module.scss
./src/widgets/Sidebar/Sidebar.tsx
```
