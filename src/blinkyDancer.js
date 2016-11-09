var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);

  this.$node.addClass('blinky');

  var repeat = {'background-repeat': 'repeat'};

  $('.blinky').mouseover(function() {
    $(this).css(repeat);
  });

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;



makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //oldStep();
  
  // setTimeout(this.step, this.timeBetweenSteps);

    // call the old version of step at the beginning of any call to this new version of step

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};



