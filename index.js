$(document).ready(function(){
  // tab switching functionality 
  $(".nav-tabs a").click(function(){
  	$('.nav-link').removeClass('active');
  	$(this.parentElement).addClass('active');
    $(this).tab('show');
  });
});