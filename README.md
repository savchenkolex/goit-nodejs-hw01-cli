# goit-nodejs-hw01-cli

1. Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

[test result get all contacts 2023-09-30_01-33.png](https://lexsense.trial.rocks/images/hw01/2023-09-30_01-33.png)

2. Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
```
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
```

[test result get one contact by ID](https://lexsense.trial.rocks/images/hw01/2023-09-30_01-35.png)

3. Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
```
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
```

[test result get one contact by ID](https://lexsense.trial.rocks/images/hw01/2023-09-30_01-35_1.png)

4. Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
```
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
```

[test result get one contact by ID](https://lexsense.trial.rocks/images/hw01/2023-09-30_01-36.png)
