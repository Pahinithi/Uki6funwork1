SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {

  // Song01 Dhoom-Nan srithal
  SC.stream('/tracks/733818808',function(sound){
    $('#start-ta1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ta1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });



  // Song02 Enna Nadathalum-meesija Mruku
  SC.stream('/tracks/319293252',function(sound){
    $('#start-ta2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ta2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });




  // Song03 vadi pulla vadi
  SC.stream('/tracks/283982637',function(sound){
    $('#start-ta3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ta3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });





  // Song04 Singa penna
  SC.stream('/tracks/652012811',function(sound){
    $('#start-ta4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop-ta4').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });


});
