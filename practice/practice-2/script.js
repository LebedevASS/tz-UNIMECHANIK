function displayPosts() {
    // Создаем объект XMLHttpRequest для выполнения HTTP запроса
    const xhr = new XMLHttpRequest();
  
    // Открываем GET запрос на указанный URL
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  
    // Устанавливаем обработчик события onload, который будет вызван, когда запрос завершится
    xhr.onload = function () {
      // Проверяем статус ответа. Код 200 означает успешный запрос
      if (xhr.status === 200) {
        // Преобразуем полученный JSON в массив объектов
        const posts = JSON.parse(xhr.responseText);
  
        // Создаем таблицу и заголовки столбцов
        let table = "<table><tr><th>UserID</th><th>ID</th><th>Title</th><th>Body</th></tr>";
  
        // Итерируемся по каждому посту и создаем строки таблицы
        posts.forEach(function (post) {
          table += `<tr><td>${post.userId}</td><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr>`;
        });
  
        // Закрываем таблицу
        table += "</table>";
  
        // Выводим таблицу на страницу
        document.getElementById("postsTable").innerHTML = table;
      }
    };
  
    // Отправляем запрос
    xhr.send();
  }
  
  // Вызываем функцию для отображения постов
  displayPosts();