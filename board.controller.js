// Code goes here

 var app = angular.module("memoryApp");
 
 app.controller("boardController", ["$scope", "$log", boardController]);
 
 function boardController($scope, $log){
   $scope.cardDeck = [
      { id:1, text:"1" },
      { id:2, text:"2" },
      { id:3, text:"3" },
      { id:4, text:"4" },
      { id:5, text:"5" },
      { id:6, text:"6" },
      { id:7, text:"7" },
      { id:8, text:"8" },
      { id:9, text:"9" },
      { id:10, text:"10" },
      { id:11, text:"11" },
      { id:12, text:"12" }
    ];
  //set the game ready to start
  init();
   
  function init(){
     $scope.game = [];
     $scope.firstCard = null;
     $scope.secondCard = null;
     //add the card pairs to the carpet
     angular.forEach($scope.cardDeck, function(value, key){
       for(var i = 0; i<2; i++){
         var card = angular.copy(value);
         card.visible= false;
         card.matched= false;
         $scope.game.push(card);
       }
     });
     //sort randomly the cards
     shuffle($scope.game);
  }
   
   $scope.reset = function(){ $log.log('whats up?'); init(); };
   $scope.turnCard = function(card){
     //if the card is visible ignore the click
     if(card.visible){ return; }
     //if second card is set then reset the selectedCards
     if($scope.secondCard){ 
       $scope.secondCard.visible = false; 
       $scope.firstCard.visible = false; 
       $scope.secondCard= null; 
       $scope.firstCard= null; 
     }
      if(!$scope.firstCard){ 
        //set this card as first card
        $scope.firstCard = card;
        //and wait for second card to be selected.
        $scope.firstCard.visible = true;
      }
      else{
        //second card seleted
        $scope.secondCard = card;
        $scope.secondCard.visible = true;
        if($scope.firstCard.id == card.id){
          //is a match
          $scope.firstCard.matched = true;
          $scope.secondCard.matched = true;
          $scope.firstCard = null;
          $scope.secondCard = null;
        }else {
          //didnt match
        }
      }
   };
   
   function shuffle(o) {
  	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  	return o;
  };
   
 }