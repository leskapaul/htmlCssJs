// depends on jquery
$(document).ready(function() {
	var original = $("body").css("background-color");
	setTimeout(function(){
		$("body").css("background-color","blue");
		setTimeout(function(){
                	$("body").css("background-color","red");
			setTimeout(function(){
				$("body").css("background-color",original);
			}, 50);
        	},50);
	},50);
});
