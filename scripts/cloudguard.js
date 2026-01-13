// CloudGuard Core v1.0
// Simple reload protection (cookie-based)

(function () {
  var LIMIT = 5; // сколько перезагрузок разрешено

  function getCount() {
    var match = document.cookie.match(/cloudguard_count=(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  }

  function setCount(value) {
    document.cookie = "cloudguard_count=" + value + "; path=/";
  }

  var count = getCount();
  count++;
  setCount(count);

  // Если лимит превышен — блокируем страницу
  if (count >= LIMIT) {
    document.documentElement.innerHTML = `
      <head>
        <meta charset="UTF-8">
        <title>CloudGuard</title>
        <style>
          body {
            margin: 0;
            background: #0d1117;
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
          }
          .box {
            text-align: center;
            animation: fade 0.8s ease;
          }
          .x {
            font-size: 72px;
            color: red;
            animation: drop 0.6s ease;
          }
          @keyframes drop {
            from { transform: translateY(-150px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fade {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        </style>
      </head>
      <body>
        <div class="box">
          <div class="x">✖</div>
          <h1>CloudGuard</h1>
          <p>Слишком много перезагрузок</p>
          <p>Доступ временно заблокирован</p>
        </div>
      </body>
    `;
  }
})();
v1.0
