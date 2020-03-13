'use strict';

(function () {
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_MAX = 10000;
  var RESPONSE_TYPE = 'json';
  var urlGet = 'https://js.dump.academy/code-and-magick/data';
  var urlPost = 'https://js.dump.academy/code-and-magick';

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = TIMEOUT_MAX;
    xhr.responseType = RESPONSE_TYPE;

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case StatusCode.OK:
          onLoad(xhr.response);
          break;
        default:
          onError('Статус ответа сервера:' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Превышено время ожидания сервера равное ' + TIMEOUT_MAX);
    });

    xhr.open('GET', urlGet);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = TIMEOUT_MAX;
    xhr.responseType = RESPONSE_TYPE;

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case StatusCode.OK:
          onLoad('Данные успешно переданы');
          break;
        default:
          onError('Статус ответа сервера: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Ошибка при передаче запроса');
    });

    xhr.addEventListener('timeout', function () {
      onError('Превышено время ожидания сервера равное: ' + TIMEOUT_MAX + 'мс');
    });

    xhr.open('POST', urlPost);
    xhr.send();
  };

  window.backend = {
    load: load,
    save: save
  };
})();
