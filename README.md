# My-webapp
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Магазин</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
</head>
<body>
    <h1>Добро пожаловать в магазин!</h1>
    <div id="products">
        <div class="product">
            <h2>Товар A</h2>
            <p>Цена: 100₽</p>
            <button onclick="sendData('Товар A', 100)">Купить</button>
        </div>
        <div class="product">
            <h2>Товар B</h2>
            <p>Цена: 200₽</p>
            <button onclick="sendData('Товар B', 200)">Купить</button>
        </div>
    </div>

    <script>
        function sendData(product, price) {
            let data = { product: product, price: price };
            Telegram.WebApp.sendData(JSON.stringify(data));
        }
    </script>
</body>
</html>