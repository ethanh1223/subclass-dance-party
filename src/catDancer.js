var makeCatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

  this.$node.addClass('cat');
  console.log(this.$node);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // $('.cat').mouseover(function() {
  //   $('.cat').css('height', auto);
  // });
};

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;

makeCatDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
  if (this.$node[0].offsetLeft > 0 && this.$node[0].offsetLeft < 600) {
    this.$node.animate({ 'left': '+=10px' }, 'fast' );
  } else if (this.$node[0].offsetLeft > 600) {
    this.$node.animate({ 'left': '-=10px' }, 'fast' );
  }
    

};