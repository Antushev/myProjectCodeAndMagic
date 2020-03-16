'use strict';

(function () {
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_MAX = 10000;
  var RESPONSE_TYPE = 'json';
  var URL_GET = 'https://js.dump.academy/code-and-magick/data';
  var URL_POST = 'https://js.dump.academy/code-and-magick';

  var settingXhr = function (xhr, onLoad, onError, timeout, responseType) {
    xhr.timeout = timeout;
    xhr.responseType = responseType;

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа сервера: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Превышено время ожидания сервера равное ' + TIMEOUT_MAX);
    });
  };

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    settingXhr(xhr, onLoad, onError, TIMEOUT_MAX, RESPONSE_TYPE);

    xhr.open('GET', URL_GET);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    settingXhr(xhr, onLoad, onError, TIMEOUT_MAX, RESPONSE_TYPE);

    xhr.open('POST', URL_POST);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
