var app = angular.module("memoryApp", []);
 
app.filter('matchedPairs', function() {
  return function(source) {
    var res = 0;
    angular.forEach(source, function(value, key) {
      if (value.matched) { res ++; }
    });
    return res / 2;
  };
});

app.filter('totalPairs', function() {
  return function(source) {
    if(source.length){ return source.length / 2; }
    return 0;
  };
});

app.filter('gameCompleted', function() {
  return function(source) {
    var res = false;
    var total = 0;
    angular.forEach(source, function(value, key) {
      if (value.matched) { total ++; }
    });
    res = source.length == total;
    return res;
  };
});
