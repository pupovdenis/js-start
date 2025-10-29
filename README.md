1. Добавление .gitattributes, настройка git для окончания строк
```
# Рекомендуемые настройки для всех участников
git config --global core.autocrlf input
git config --global core.eol lf

# Или для Windows-разработчиков [для Unix true = input]
git config --global core.autocrlf true
```
