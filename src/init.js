$(document).ready(function() {
  window.dancers = [];

  $('.lineUp').on('click', function() {
    
    var space = 10;
    for ( var i = 0; i < dancers.length; i++) { 
      var lineUpStyle = {top: space, left: 100};
      //dancers[i].hidden = true;
      dancers[i].css(lineUpStyle);
      // dancers[i].offsetTop = space;
      space += 50;
    }
  });

  $('.interact').on('click', function() {
    var rando = Math.floor(Math.random() * dancers.length);
    var chosen = dancers[rando];
    var rando2 = Math.floor(Math.random() * dancers.length);
    var chosen2 = dancers[rando2];
    if (rando === rando2) {
      rando2 = Math.floor(Math.random() * dancers.length);
      chosen2 = dancers[rando2];
    }
    var chosenLoc = {top: 400, left: 400};
    var chosenLoc2 = {top: 400, left: 600};
    var interactStyle = {top: 0, left: 0};

    for (var i = 0; i < dancers.length; i++) {
      dancers[i].css(interactStyle);
    }

    chosen.css(chosenLoc);
    chosen.css('animation', 'spin 4s linear infinite');
    chosen[0].draggable = true;
    chosen2.css(chosenLoc2);
    chosen2.css('animation', 'spin 4s linear infinite');
    chosen2[0].draggable = true;



  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  
});

