//GLOBAL VARIABLES TO BE EDITED//
/* --------------------------- */

//number of different foods in the spritesheet
var NUMBER_OF_ICONS=40;
//food drop area      [startX,startY,endX,endY]
var DROP_AREA_COORDINATES=[530,400,1400,960];

//the dimensions of the food icons
var ICON_DIM=[135,135];

//subdivide the food into categories
var categories=["frutta","verdura","carne","bevande","dolci"]

/* --------------------------- */



var game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'game');

game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

var days_selected = [];
var TEXT = text_localizations.it;
var ACTUAL_DAY = 0;

game.state.start('load');
