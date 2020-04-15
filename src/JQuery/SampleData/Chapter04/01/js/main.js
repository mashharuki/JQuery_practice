$(function(){
    
    var duration = 300;
	
	$('#buttons1 button:nth-child(4-n)')
		.on('mouseover',function(){
			$(this).stop(true).animate({
				backgroundColor: '#ae5e9b',
				color: '#fff'
			},duration);
		})
		.on('mouseout',function(){
			$(this).stop(true).animate({
				backgroundColor: '#fff',
				color: '#ebc000'
			},duration);
		});
		
	$('#buttons1 button:nth-child(n+5):nth-child(8-n)')
		.on('mouseover',function(){
			$(this).stop(true).animate({
				borderWidth: '12px',
				color: '#ae5e9b'
			},duration,'easeOutSine');
		})
		.on('mouseout',function(){
			$(this).stop(true).animate({
				borderWidth: '0px',
				color: '#ebc000'
			},duration,'easeOutSine');
		});
		
	$('#buttons1 button:nth-child(n+9)')
		.on('mouseenter',function(){
			$(this).find('> span').stop(true).animate({
				width: '100%'
			},duration,'easeOutQuad');
		})
		.on('mouseleave',function(){
			$(this).find('> span').stop(true).animate({
				width: '0%'
			},duration,'easeOutQuad');
		});
	
});
