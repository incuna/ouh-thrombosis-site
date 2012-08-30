$(document).ready(function() {    
	$(".iphone, .iphoneLeft").mouseenter(function(){
		$(".iphoneLeft").css("left","-115px");
	});
	$(".iphone, .iphoneLeft").mouseleave(function(){
		$(".iphoneLeft").css("left","-5px");
	});
});
