SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  // Song01
  SC.stream('/tracks/166055478',function(sound){
    $('#start-hi1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-hi1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });



  // Song02
  SC.stream('/tracks/307323174',function(sound){
    $('#start-hi2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-hi2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });




  // Song03
  SC.stream('/tracks/684897301',function(sound){
    $('#start-hi3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-hi3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });





  // Song04
  SC.stream('/tracks/157057662',function(sound){
    $('#start-hi4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-hi4').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });


});
