var makePokeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  this.$node.addClass('poke');

  

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makePokeDancer.prototype = Object.create(makeDancer.prototype);
makePokeDancer.prototype.constructor = makePokeDancer;

makePokeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.fadeToggle();
};