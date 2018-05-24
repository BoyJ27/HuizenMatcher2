<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/jquery.raty.css">
              <style>
            body {
                padding-top: 50px;
                padding-bottom: 20px;
            }
        </style>
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/main.css">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <div class="wrapper helper">
        <div class="container">
            <header class="row" id="topbar">
                <div class="col-md-12 col-md-offset-0" style='width:100%'>
                    <div class="row">
                    <div class="col-md-6" id="left-header"><p>0HM270: HuizenMatcher</p></div>
                    <div class="col-md-6" id="right-header"><img id='tuelogo' src="img/tue.svg" alt="TU/e" title="Technische Universiteit Eindhoven"></div>
                    </div>
                </div>
            </header>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div id="boxHeader" class='col-md-12 col-md-offset-0' style='width:100%'>

            </div>
            <div id="mainApplication" class='col-md-12 col-md-offset-0' style='width:100%'>

                <div id="toosmallView" >
                </div>

                <div id="informedConsent" >
                </div>

                <div id="initialPreferences">
                </div>

                <div id="instructions">
                </div>

                <div id="dilemma1" >
                </div>

                <div id="dilemma2" >
                </div>

                <div id="dilemma3" >
                </div>

                <div id="dilemma4" >
                </div>

                <div id="dilemma5" >
                </div>

                <div id="dilemma6" >
                </div>

                <div id="dilemma7" >
                </div>

                <div id="dilemma8" >
                </div>

                <div id="dilemma9" >
                </div>

                <div id="dilemma10" >
                </div>

                <div id="profile" >
                </div>

                <div id="setA" >
                </div>

                <div id="setB" >
                </div>

                <div id="evaluationQuestions">
                </div>

                <div id="endView" >
                </div>

            </div>

          <div id="boxFooter" class='col-md-12 col-md-offset-0' style='width:100%'>
        </div>
    </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.min.js"><\/script>')</script>
        <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/themes/smoothness/jquery-ui.css" />
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js"></script>
        <script  type="text/javascript"  src="js/vendor/jquery.ui.touch-punch.min.js"></script>

        <script src="js/vendor/bootstrap.min.js"></script>

        <script src="js/main.js"></script>
        <script src="js/housingModel.js"></script>

        <script src="js/view/headerView.js"></script>
        <script src="js/controller/headerController.js"></script>

        <script src="js/view/informedConsentView.js"></script>
        <script src="js/controller/informedConsentController.js"></script>

        <script src="js/view/initialPreferencesView.js"></script>
        <script src="js/controller/initialPreferencesController.js"></script>

        <script src="js/view/instructionsView.js"></script>
        <script src="js/controller/instructionsController.js"></script>

        <script src="js/view/dilemma1View.js"></script>
        <script src="js/controller/dilemma1Controller.js"></script>

        <script src="js/view/dilemma2View.js"></script>
        <script src="js/controller/dilemma2Controller.js"></script>

        <script src="js/view/dilemma3View.js"></script>
        <script src="js/controller/dilemma3Controller.js"></script>

        <script src="js/view/dilemma4View.js"></script>
        <script src="js/controller/dilemma4Controller.js"></script>

        <script src="js/view/dilemma5View.js"></script>
        <script src="js/controller/dilemma5Controller.js"></script>

        <script src="js/view/dilemma6View.js"></script>
        <script src="js/controller/dilemma6Controller.js"></script>

        <script src="js/view/dilemma7View.js"></script>
        <script src="js/controller/dilemma7Controller.js"></script>

        <script src="js/view/dilemma8View.js"></script>
        <script src="js/controller/dilemma8Controller.js"></script>

        <script src="js/view/dilemma9View.js"></script>
        <script src="js/controller/dilemma9Controller.js"></script>

        <script src="js/view/dilemma10View.js"></script>
        <script src="js/controller/dilemma10Controller.js"></script>

        <script src="js/view/profileView.js"></script>
        <script src="js/controller/profileController.js"></script>

        <script src="js/view/setAView.js"></script>
        <script src="js/controller/setAController.js"></script>

        <script src="js/view/setBView.js"></script>
        <script src="js/controller/setBController.js"></script>

        <script src="js/view/evaluationView.js"></script>
        <script src="js/controller/evaluationController.js"></script>

        <script src="js/view/endView.js"></script>
        <script src="js/controller/endController.js"></script>

        <script src="js/view/toosmallView.js"></script>
        <script src="js/controller/toosmallController.js"></script>
    </body>
</html>
