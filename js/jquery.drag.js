;(function($){
	/**
		拖动的工具类.
	**/
	$.fn.dragHandler=function(ops){
		var $this=$(this);
		var defaults={"drag":$this};
		var op=$.extend(defaults,ops);
		var control=op.dir;
		$this.bind("mousedown",function(e){
			e=e||window.event;
			var offsetT=$this.position().top;
			var offsetL=$this.position().left;
			var downX=e.clientX;
			var downY=e.clientY;
			$(document).bind("mousemove",function(e){
				e=e||window.event;
				var newX=e.clientX;
				var newY=e.clientY;
				var top = parseInt(offsetT) + parseInt(newY - downY);
            	var left = parseInt(offsetL) + parseInt(newX - downX);
            	if(control=="level")
            	{
            		$this.css("left",left+"px");
            	}
            	else
            	{
            		$this.css("top",top+"px");
            	}
            	
            	console.log("downX: "+downX+"|newX: "+newX+"|offsetL: "+offsetL);
			});
			$(document).bind("mouseup",function(){
				$(document).unbind("mousemove");
			})
		})
	}

})(jQuery)