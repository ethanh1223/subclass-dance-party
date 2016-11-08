var makePokeDancer = function(top, left, timeBetweenSteps) {
  var pokeDancer = makeDancer(top, left, timeBetweenSteps);

  pokeDancer.$node.addClass('poke');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = pokeDancer.step;

  pokeDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //pokeDancer.$node.fadeToggle();
  };

  return pokeDancer;
};