/**
 *@fileOverview div模拟select下拉菜单
 *@author lhz
 *@version 2014.7.24
 *@example 
    $("#divSelect").selecter({
			"header":"#header",
			"list":"#list",
			"toggleTimer":500
	});
 */

;(function($)
{
	$.fn.selectHandler=function(ops)
	{
		
		var defaults={
				"header":"#header",
				"list":"#list",
				"toggleTimer":500
			}
		var op=$.extend(defaults,ops);
		var $header=$(op.header);
		var $list=$(op.list);
		var $this=$(this);
		var toggleTimer=op.toggleTimer;
		$header.focusin(function(e) {
            $list.fadeIn(toggleTimer);
        });
		$header.focusout(function(e) {
            $list.fadeOut(toggleTimer);
        });
		$list.click(function(e) {
            var e=window.event||e;
			var target=e.target||e.srcElement;
			$header.val($(target).text());
			$header.attr("option",$(target).attr("option"));
        });
		$(document).click(function(e) {
            var target=e.target||e.srcElement;
			var parentTarget=$(target).parents("div");
			if(parentTarget.attr("id")!=$this.attr("id"))
			{
				 $list.fadeOut(toggleTimer);
			}
        });
	}
}
)(jQuery);