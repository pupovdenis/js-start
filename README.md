1. Добавление .gitattributes, настройка git для окончания строк
```
# Рекомендуемые настройки для всех участников
git config --global core.autocrlf input
git config --global core.eol lf

# Или для Windows-разработчиков [для Unix true = input]
git config --global core.autocrlf true
```
2. npm init -y
3. npm i lodash
4. npm i jest @types/jest -D
5. npx create-jest
```
√ Would you like to use Jest when running "test" script in "package.json"? ... yes
√ Would you like to use Typescript for the configuration file? ... no
√ Choose the test environment that will be used for testing » jsdom (browser-like)
√ Do you want Jest to add coverage reports? ... no
√ Which provider should be used to instrument code for coverage? » v8
√ Automatically clear mock calls, instances, contexts and results before every test? ... yes
```
6. npm i jest-environment-jsdom -D
7. npm i --save-dev babel-jest @babel/core @babel/preset-env > создать babel.config.js
8. Запуск тестов: npx jest
9. npm i eslint -D
10. npx eslint --init
```
√ What do you want to lint? · javascript
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
```
11. Линтирование npx eslint src/sum.js [--fix] [все файлы = .], npm run lint
12. npm i eslint-plugin-jest -D > поправить eslint.config.mjs
13. npm i prettier -D > создать .prettierrc
14. Проверка кода npx prettier src [--write для изменения]

### горячие клавиши
- Форматирование всего файла: Shift + Alt + F  
- Удалить строку (некоторые системы): Shift + Delete (Ctrl + Shift + K)  
- Дублировать строку вниз: Shift + Alt + ↓  
- Дублировать строку вверх: Shift + Alt + ↑  
