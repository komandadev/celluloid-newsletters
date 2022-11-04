$( document ).ready(function() {
    $('.sel_bg').not('.act_all').click(function(){
		$(this).toggleClass('active');
		$(this).parents('.block_inner').toggleClass('active');
	});	
	$('.sel_all .sel_bg').click(function(){
		$('.sel_bg').addClass('active');
	});
});