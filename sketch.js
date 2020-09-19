var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var page;




function setup(){
  canvas = createCanvas(displayWidth - 70, displayHeight-80);
  database = firebase.database();
  page = new Page();

}


function draw(){

}
