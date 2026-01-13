// ==============================
// CloudGuard 🛡️
// Simple client-side Anti-DDoS
// ==============================

(function () {
  const LIMIT = 10; // максимум заходов
  const KEY = "cloudguard_requests";

  let requests = localStorage.getItem(KEY);

  if (requests === null) {
    localStorage.setItem(KEY, "1");
    return;
  }

  requests = Number(requests) + 1;
  localStorage.setItem(KEY, requests);

  if (requests > LIMIT) {
    document.documentElement.innerHTML = `
      <head>
        <title>CloudGuard Protection</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #0d1117;
            color: white;
            text-align: center;
            padding-top: 100px;
          }
          h1 { color: #ff5555; }
        </style>
      </head>
      <body>
        <h1>🚨 CloudGuard</h1>
        <p>DDoS activity detected</p>
        <p>Access temporarily blocked</p>
        <p>Protected by CloudGuard 🛡️</p>
      </body>
    `;
  }
})();
