require.config({
	paths:{
		jquery:"lib/jquery",
		window:"window",
		jqueryUI:"lib/jquery-ui.min"
	}
});

require(["jquery","window"],function($,w){
	$(function(){
        $("#a").click(function(){
		var win = new w.Window().alert({
			title:"提示",
			content:"welcome!",
			handler: function(){
				alert("you click the button");
			},
			width:300,
			height:150,
			y:50,
			hasCloseBtn:true,
			handler4AlertBtn:function(){
				alert("you click the alert button");
			},
			handler4CloseBtn:function() {
				alert("you click the close button");
			},
			text4AlertBtn:"点一点",
			skinClassName:null,
			hasMask:true,
			dragHandle:".window_header"
		}).on("alert",function(){
			alert("the second alert handler");
		}).on("alert",function(){
			alert("the third alert handler");
		}).on("close",function(){
			alert("the second close handler");
		});
	});
});
	
});