// Переключение тем JavaScript

(function() {
  'use strict'; // самовызывающаяся функция, строгий режим

  // Запускается только когда HTML уже загружен и элементы доступны в DOM
  document.addEventListener('DOMContentLoaded', function() {
    const themeRadios = document.querySelectorAll('input[name="theme"]'); 
    const stylesheet = document.getElementById('theme-stylesheet'); // находим радио-кнопки и стили

    // Функция возвращает путь css-файла для соответствующей темы
    function getStylesheetFilename(theme) {
      return 'css/' + theme + '.css';
    }

    // Функция переключения темы
    function switchTheme(theme) {

      stylesheet.href = getStylesheetFilename(theme); // изменяем ссылку на стили
      localStorage.setItem('theme', theme); // сохраняем выбранную тему в localStorage
      
      // Обновляем выбранную радио-кнопку
      const radio = document.getElementById('theme-' + theme);
      if (radio) {
        radio.checked = true;
      }
    }

    // Проходим по всем радио-кнопкам и добавляем обработчик события change
    themeRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        if (this.checked) { // если радио-кнопка выбрана, то получаем имя темы
          const theme = this.id.replace('theme-', '');
          switchTheme(theme); // вызываем функцию переключения темы
        }
      });
    });

    // Сохраняем тему при перезагрузке / переходе на другую страницу
    const savedTheme = localStorage.getItem('theme'); // читаем сохраненную тему из localStorage
    if (savedTheme) {
      const radio = document.getElementById('theme-' + savedTheme); // находим радио-кнопку для соответствующей темы
      if (radio) {
        radio.checked = true; // включаем радио-кнопку
        stylesheet.href = getStylesheetFilename(savedTheme); // изменяем ссылку на стили
      }
    } else {
      // Дефолтная тема, если никакая не выбрана
      const defaultRadio = document.getElementById('theme-default');
      if (defaultRadio) {
        defaultRadio.checked = true;
        stylesheet.href = 'css/default.css';
      }
    }
  });
})();