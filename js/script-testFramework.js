
$("nav li").each(function() {
	$(this).attr("data-order", $(this).index());
});

$("nav li").on("click", function(e){
	e.stopPropagation();
	var clicked = $(this).attr("data-order");
	//alert(clicked);
	if(clicked != 0) {
		for(var i = clicked-1; i >= 0; i--)
		{
			$("[data-order="+i+"]").attr("data-order", i+1);
		}
		$(this).attr("data-order", 0);
	}
});