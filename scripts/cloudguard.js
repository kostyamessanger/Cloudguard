// CloudGuard Core v1.1
// Redirect after too many reloads

(function () {
  var LIMIT = 5;
  var BLOCK_URL = "https://kostyamessanger.github.io/Cloudguard/Block/blocked.html";

  function getCount() {
    var match = document.cookie.match(/cloudguard_reload=(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  }

  function setCount(value) {
    document.cookie = "cloudguard_reload=" + value + "; path=/";
  }

  var count = getCount();
  count++;
  setCount(count);

  // Для проверки (можно потом убрать)
  console.log("CloudGuard reloads:", count);

  if (count >= LIMIT) {
    window.location.href = BLOCK_URL;
  }
})();
v1.1
