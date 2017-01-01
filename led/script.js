$(function(){
  //Create client
  var client = mqtt.connect('mqtt://01d5baa8:95d301e8dcf89cfd@broker.shiftr.io', {
    clientId: 'testingIOT'
  });
  //On red button press change led color to red
  $('#buttonRed').click(function(){
    client.publish('/color', 'red');
  });
  //On green button press change led color to green
  $('#buttonGreen').click(function(){
    client.publish('/color', 'green');
  });
  //On blue button press change led color to blue
  $('#buttonBlue').click(function(){
    client.publish('/color', 'blue');
  });
  //On range slider change led brightness
  $('#range').on('input change', function(event){
    var value = event.target.value;
    client.publish('/brightness', value);
  });
});
