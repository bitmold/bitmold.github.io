$(document).ready(function(){
  // tab switching functionality 
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
  // force open the first tab 
  $($('.nav-tabs a')[0]).tab('show');
});