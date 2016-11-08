describe('makeBlinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(2);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(3);
    });
  });
});

describe ('makePokeDancer', function() {

  var PokeDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    PokeDancer = new makePokeDancer(10, 20, timeBetweenSteps);
  });

  it('should fade toggle', function() {
    sinon.spy(PokeDancer.$node, 'fadeToggle');
    PokeDancer.step();
    expect(PokeDancer.$node.fadeToggle.called).to.be.true;
  });
});

// describe ('makeCatDancer', function() {

//   var catDancer, clock;
//   var timeBetweenSteps = 100;

//   beforeEach(function() {
//     clock = sinon.useFakeTimers();
//     catDancer = new makeCatDancer(10, 20, timeBetweenSteps);
//   });

//   it('should animate', function() {
//     sinon.spy(catDancer, 'animate');
//     catDancer.step();
//     expect(catDancer.$node.animate.called).to.be.true;
//   });



// });