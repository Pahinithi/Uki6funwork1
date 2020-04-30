SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  // Song01
  SC.stream('/tracks/551557314',function(sound){
    $('#start-ka1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ka1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });



  // Song02
  SC.stream('/tracks/736947106',function(sound){
    $('#start-ka2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ka2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });




  // Song03
  SC.stream('/tracks/544356693',function(sound){
    $('#start-ka3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ka3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });





  // Song04
  SC.stream('/tracks/551792247',function(sound){
    $('#start-ka4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ka4').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });


});
