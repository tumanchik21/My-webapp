# My-webapp
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Магазин</title>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; padding: 20px; }
        .product { border: 1px solid #ccc; padding: 15px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Добро пожаловать в магазин!</h1>
    <div class="grid">
        <div class="product" onclick="openProduct('A')">
            <h2>Товар A</h2>
            <p>Цена: 100₽</p>
        </div>
        <div class="product" onclick="openProduct('B')">
            <h2>Товар B</h2>
            <p>Цена: 200₽</p>
        </div>
        <div class="product" onclick="openProduct('C')">
            <h2>Товар C</h2>
            <p>Цена: 300₽</p>
        </div>
        <div class="product" onclick="openProduct('D')">
            <h2>Товар D</h2>
            <p>Цена: 400₽</p>
        </div>
    </div>

    <script>
        function openProduct(product) {
            window.location.href = "product.html?name=" + product;
        }
    </script>
</body>
</html>