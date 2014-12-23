;(function($){
	/**
		对页面的操作
		id:操作的主体
	**/
	$.fn.opeartHandler=function(){
		var $this=$(this);
		creatDom();
		function creatDom()
		{
			var $levelLeft=$("<i class='fa fa-arrows-h opera' style='top:-20px'></i>");
			var $levelRight=$("<i class='fa fa-arrows-h opera' style='top:-20px;right:20px;'></i>");
			var $verticalTop=$("<i class='fa fa-arrows-v opera' style='left:-20px;top:20px;'></i>");
			var $verticalBottom=$("<i class='fa fa-arrows-v opera' style='left:-20px;bottom:20px;'></i>");
			$this.append($levelLeft);
			$this.append($levelRight);
			$this.append($verticalTop);
			$this.append($verticalBottom);
			$levelLeft.dragHandler({"dir":"level"});
			$levelRight.dragHandler({"dir":"level"});
			$verticalTop.dragHandler({"dir":"vertical"});
			$verticalBottom.dragHandler({"dir":"vertical"});

		}
	}
})(jQuery)