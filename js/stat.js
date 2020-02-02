'use strict';

var MY_NICKNAME = 'Вы';

var WIDTH_RECT = 420;
var HEIGHT_RECT = 270;
var START_X_RECT = 100;
var START_Y_RECT = 10;
var START_X_SHADOW = 110;
var START_Y_SHADOW = 20;

var START_X_COLUMN = 120;
var START_Y_COLUMN = 240;
var WIDTH_COLUMN = 40;
var MAX_HEIGHT_COLUMN = 150;
var GAP_COLUMN = 50;

var START_Y_TEXT = 260;
var START_X_TEXT = 120;
var MARGIN_TEXT = 9;

var maxTimeInArray;
var colorPlayer;
var colorColumnPlayer;

var renderRectStatistic = function (ctx, x, y, rectWidth, rectHeight, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, rectWidth, rectHeight);
};

var findMax = function (array) {
  var maxTime = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxTime) {
      maxTime = array[i];
    }
  }
  return maxTime;
};

var getColorColumnPlayer = function (player) {
  if (player !== MY_NICKNAME) {
    colorPlayer = 'hsl(250' + ', ' + Math.floor(Math.random() * 100) + '%,  50%)';
    return colorPlayer;
  } else {
    colorPlayer = 'rgba(255, 0, 0, 1)';
    return colorPlayer;
  }
};

window.renderStatistics = function (ctx, names, times) {
  renderRectStatistic(ctx, START_X_SHADOW, START_Y_SHADOW, WIDTH_RECT, HEIGHT_RECT, 'rgba(0, 0, 0, 1)');
  renderRectStatistic(ctx, START_X_RECT, START_Y_RECT, WIDTH_RECT, HEIGHT_RECT, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'normal 16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  maxTimeInArray = findMax(times);

  for (var i = 0; i < names.length; i++) {
    colorColumnPlayer = getColorColumnPlayer(names[i]);

    ctx.fillStyle = colorColumnPlayer;
    ctx.fillText(Math.floor(times[i]), START_X_TEXT + (WIDTH_COLUMN + GAP_COLUMN) * i, START_Y_COLUMN - (MAX_HEIGHT_COLUMN / maxTimeInArray * times[i] + MARGIN_TEXT));
    ctx.fillRect(START_X_COLUMN + (WIDTH_COLUMN + GAP_COLUMN) * i, START_Y_COLUMN, WIDTH_COLUMN, -((MAX_HEIGHT_COLUMN / maxTimeInArray) * times[i]));
    ctx.fillText(names[i], START_X_TEXT + (WIDTH_COLUMN + GAP_COLUMN) * i, START_Y_TEXT);
  }
};

