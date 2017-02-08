$(document).ready(function(){

	$('.list-group-item').on('click', function() {
		$('.list-group-item').removeClass('active');
		$(this).addClass('active');
	});
	
	$('#button-profile').on('click', function() {
		$('#dropdown-profile').toggle();
	});

});
