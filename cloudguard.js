// CloudGuard 🛡️ Animated Protection

(function () {
  const LIMIT = 10;
  const KEY = "cloudguard_requests";

  let requests = localStorage.getItem(KEY);
  requests = requests ? Number(requests) + 1 : 1;
  localStorage.setItem(KEY, requests);

  if (requests <= LIMIT) return;

  document.documentElement.innerHTML = `
  <head>
    <title>CloudGuard Blocked</title>
    <style>
      body {
        margin: 0;
        height: 100vh;
        background: #0d1117;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        overflow: hidden;
      }

      .box {
        text-align: center;
        animation: fadeIn 1.2s ease forwards;
      }

      .cross {
        font-size: 80px;
        color: #ff5555;
        animation: flyIn 1s ease forwards;
      }

      h1 {
        opacity: 0;
        animation: textIn 1s ease forwards;
        animation-delay: 0.6s;
      }

      p {
        opacity: 0;
        animation: textIn 1s ease forwards;
        animation-delay: 1s;
      }

      @keyframes flyIn {
        from {
          transform: translateY(-200px) rotate(180deg);
          opacity: 0;
        }
        to {
          transform: translateY(0) rotate(0);
          opacity: 1;
        }
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes textIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="cross">✖</div>
      <h1>CloudGuard</h1>
      <p>DDoS активность обнаружена</p>
      <p>Доступ временно заблокирован</p>
    </div>
  </body>
  `;
})();
