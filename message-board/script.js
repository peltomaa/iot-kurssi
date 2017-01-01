$(function(){
  //Create client
  var client = mqtt.connect('mqtt://01d5baa8:95d301e8dcf89cfd@broker.shiftr.io', {
    clientId: 'testingIOT'
  });
});
