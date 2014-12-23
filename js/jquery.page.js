$.page={
	/*
		改变页面大小
	*/
	resizeHandler:function(ops)
	{
		var width=ops.width;
		var height=ops.height;
		var $elem=$(ops.id);
		$elem.animate({	width:width+"px",
						height:height+"px"
						},"slow");
	},
	/*
		改变纸张方向
	*/
	changeDir:function(ops)
	{
		var $elem=$(ops.id);
		var width=$elem.width();
		var height=$elem.height();
		$.page.resizeHandler({"id":ops.id,"width":height,"height":width});
	}
}