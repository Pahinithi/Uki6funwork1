SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  // Song01 frreku penna-
  SC.stream('/tracks/502576323',function(sound){
    $('#start-ma1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ma1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });



  // Song02-jarum kana
  SC.stream('/tracks/578347833',function(sound){
    $('#start-ma2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ma2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });




  // Song03 malar
  SC.stream('/tracks/208641386',function(sound){
    $('#start-ma3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ma3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });





  // Song04
  SC.stream('/tracks/251370150',function(sound){
    $('#start-ma4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ma4').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });


});
