var makeCatDancer = function(top, left, timeBetweenSteps) {
  var catDancer = makeDancer(top, left, timeBetweenSteps);

  catDancer.$node.addClass('cat');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // $('.cat').mouseover(function() {
  //   $('.cat').css('height', auto);
  // });

  var oldStep = catDancer.step;

  catDancer.step = function() {
    var x = 0;
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
    if (catDancer.$node[0].offsetLeft > 0 && catDancer.$node[0].offsetLeft < 600) {
      catDancer.$node.animate({ 'left': '+=10px' }, 'fast' );
    } else if (catDancer.$node[0].offsetLeft > 600) {
      catDancer.$node.animate({ 'left': '-=10px' }, 'fast' );
    }
    

  };

  return catDancer;
};