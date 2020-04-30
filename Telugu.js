SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  // Song01
  SC.stream('/tracks/687936454',function(sound){
    $('#start-te1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-te1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });



  // Song02
  SC.stream('/tracks/375189998',function(sound){
    $('#start-te2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-te2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });




  // Song03
  SC.stream('tracks/431626029',function(sound){
    $('#start-te3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-te3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });





  // Song04
  SC.stream('/tracks/331052286',function(sound){
    $('#start-te4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-te4').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });


});
