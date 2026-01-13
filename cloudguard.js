<script>
(function () {
  function getCount() {
    const match = document.cookie.match(/cloudguard_count=(\d+)/);
    return match ? Number(match[1]) : 0;
  }

  function setCount(value) {
    document.cookie = "cloudguard_count=" + value + "; path=/";
  }

  let count = getCount();
  count++;
  setCount(count);

  // для проверки — видно, что код работает
  console.log("CloudGuard reloads:", count);

  if (count >= 5) {
    document.documentElement.innerHTML = `
      <head>
        <title>CloudGuard Blocked</title>
        <style>
          body {
            margin: 0;
            background: #0d1117;
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .box {
            text-align: center;
            animation: fade 1s ease;
          }
          .x {
            font-size: 80px;
            color: red;
            animation: drop 0.8s ease;
          }
          @keyframes drop {
            from { transform: translateY(-200px); opacity: 0; }
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
</script>
