$(document).ready(function() {
  // Constants
  var dialingOptions = {
    GOOGLE_HANGOUT : "ghangout",
    SKYPE : "skype"
  };

  var NO_NUMBER_PROVIDED = "NO_NUMBER_PROVIDED";

  // Fetch URL paramters
  var dialUsing = getUrlParameter("dial_using");
  var dialDestination = getUrlParameter("dial_destination");

  console.log("Dial Using = " + dialUsing);
  console.log("Dial Destination = " + dialDestination);

  // Perform basic null or empty check
  if(dialUsing == "" || dialUsing == null) {
    dialUsing = dialingOptions.GOOGLE_HANGOUT;
  }
  if(dialDestination == "" || dialDestination == null) {
    dialDestination = NO_NUMBER_PROVIDED;
  }

  console.log("** Dial Using = " + dialUsing);
  console.log("** Dial Destination = " + dialDestination);

  // Based on dial option - prepare the div
  var randomNumber = Math.floor( (Math.random() * 10 * 7) + 1 );
  var divTag, scriptBody;
  if(dialUsing == dialingOptions.GOOGLE_HANGOUT) {
    var gHangoutDivId = "gh-" + randomNumber;
    divTag = "<div id='" + gHangoutDivId + "'></div>";
    scriptBody = "gapi.hangout.render('" + gHangoutDivId+ "'," +
      " { " +
      "'render': 'createhangout', 'hangout_type': 'normal', 'widget_size': 72," +
      "'invites': [{ 'id' : '" + dialDestination + "', 'invite_type' : 'PHONE' }]" +
      " } );";
  } else if(dialUsing == dialingOptions.SKYPE) {
    var skypeDivId = "SkypeButton_Call_" + randomNumber;
    divTag = "<div id='" + skypeDivId + "'></div>";
    scriptBody = 'Skype.ui({ name : "call", element : "' + skypeDivId + '",' +
      ' participants : ["' + dialDestination + '"], imageSize: 32 });';

    $("#callingWrapper").addClass('skype-icon');
  } else {
    divTag = "Invalid calling option provided. Valid values are : " +
      dialingOptions.GOOGLE_HANGOUT + ", " + dialingOptions.SKYPE;
    $("#callingWrapper").append(divTag);
    console.log("ERROR: " + divTag);

    return;
  }

  $("#callingWrapper").append(divTag);
  $('<script>').attr('type','text/javascript').text(scriptBody).appendTo('head');

});

function getUrlParameter(paramName) {
  var urlParamsStr = window.location.search.substring(1);
  var urlParams = urlParamsStr.split('&');
  for (var i = 0; i < urlParams.length; i++) {
    var paramNameValue = urlParams[i].split('=');
    if (paramNameValue[0] == paramName) {
        return paramNameValue[1];
    }
  }
}
