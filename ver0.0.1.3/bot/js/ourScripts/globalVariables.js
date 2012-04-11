/* xanduCanvas.js */
var botInfo = ["0", "0", "0:0:0:0:0:0:0:0:0", "0:0:0:0:0:0:0:0:0:0:0:0", "0", "0", "10", "10"];
var canvas;
var x = 142.5;
var y = 147.5;
var scale = 1.0;

/* handleKeyEvent.js */
var MIN_DELTA = 4; // pixels to move by
var keys = { /*up*/38:0, /*down*/40:0, /*left*/37:0, /*right*/39:0 };
var prevActionTaken;

/* botPosition.js */
var lCount = 0;
var rCount = 0;
var dist = 0, theta = 0, alpha = 0;
var botX = 0; botY = 0;

/* daemon.js */
var botId = -1;

