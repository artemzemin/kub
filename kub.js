window.addEventListener("resize", function() {
  var container = document.getElementById("container");
  container.style.width = window.innerWidth + "px";
  container.style.height = window.innerHeight + "px";
});

// Инициализируем размеры контейнера при загрузке страницы
window.addEventListener("load", function() {
  window.dispatchEvent(new Event("resize"));
});
