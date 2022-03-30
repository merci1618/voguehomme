$(function(){
	$(".menu").click(function(){
		$(this).fadeOut();
		$("nav").addClass("on");
		$("section").addClass("on");
	});
	$("#gnb li").click(function(){
		$(".menu").fadeIn();
		$("nav").removeClass("on");
		$("section").removeClass("on");
		var i = $(this).index();
		$("section div").removeClass("on");
		$("section div").eq(i).addClass("on");
	});
});