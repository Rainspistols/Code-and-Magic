'use strict';

(function renderStatistics() {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var BAR_WIDTH = 40;
  var FONT_WIDTH = 40;
  var FONT_GAP_Y = 250;
  var GAP_X = 50;
  var barHeight = -150;
  var GAP_BAR_BOT = 10;

  function renderCloud(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  function getMaxElement(arr) {
    var maxElement = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';

    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Hooray you won!', CLOUD_X + GAP_X, CLOUD_Y + 20);
    ctx.fillText('List of results:', CLOUD_X + GAP_X, CLOUD_Y + 40);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = 'black';
      ctx.fillText(
        players[i],
        CLOUD_X + GAP_X + (GAP_X + BAR_WIDTH) * i,
        CLOUD_Y + FONT_GAP_Y
      );
      ctx.fillText(
        times[i].toFixed(),
        CLOUD_X + GAP_X + (GAP_X + BAR_WIDTH) * i,
        CLOUD_Y +
          FONT_GAP_Y -
          GAP_BAR_BOT * 3 +
          (times[i] * barHeight) / maxTime
      );
      if (players[i] === 'You') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(250,' + Math.random().toFixed(3) * 100 + '%,50%)';
      }
      ctx.fillRect(
        CLOUD_X + GAP_X + (GAP_X + FONT_WIDTH) * i,
        CLOUD_Y + FONT_GAP_Y - GAP_BAR_BOT,
        BAR_WIDTH,
        (times[i] * barHeight) / maxTime
      );
    }
  };
})();
