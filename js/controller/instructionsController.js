var InstructionsController = function ( model, view ){

    /*********************************
    TESTING
    *********************************/
    // view.testButton.click(function(){
    //   model.shuffleHouses(model.houses);
    // });
    /*********************************
    END OF TESTING
    *********************************/

    view.volgendeButton.click(function(){
          model.instructionsDone();
        });
}
