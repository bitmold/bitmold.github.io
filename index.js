$(document).ready(function(){

  if (document.location.href.includes('frecnotferc.com')) {
    document.body.innerHTML = 'Test';
  }

  // tab switching functionality
  $(".nav-tabs a").click(function(){
  	$('.nav-link').removeClass('active');
  	$(this.parentElement).addClass('active');
    $(this).tab('show');
  });
});
