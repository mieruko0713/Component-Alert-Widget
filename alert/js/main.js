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
			width:300,
			height:150,
			y:50,
			hasCloseBtn:true,
			text4AlertBtn:"点一点",
			skinClassName:null,
			hasMask:true,
			dragHandle:".window_header"
		}).on("alert",function(){
			alert("you click the alert button");
		}).on("close",function(){
			alert("you click the close button");
		}).on("alert",function(){
			alert("you click the second alert button");
		});
	});
        $("#b").click(function(){
		var win = new w.Window().confirm({
			title:"提示",
			content:"welcome!",
			width:300,
			height:150,
			y:50,
			hasCloseBtn:true,
			text4AlertBtn:"点一点",
			skinClassName:null,
			hasMask:true,
			dragHandle:".window_header"
		}).on("confirm",function(){
			alert("the second alert handler");
		}).on("confirm",function(){
			alert("the third alert handler");
		}).on("cancel",function(){
			alert("the second close handler");
		});
	});
        $("#c").click(function(){
		var win = new w.Window().prompt({
			title:"提示",
			content:"welcome!",
			width:300,
			height:150,
			y:50,
			hasCloseBtn:true,
			text4PromptBtn:"输入",
			skinClassName:null,
			hasMask:true,
			dragHandle:".window_header",
			defaultValue4PromptInput:"请输入内容"
		}).on("prompt",function(inputValue){
			alert("您输入的内容是: "+inputValue);
		}).on("cancel",function(){
			alert("the second cancel handler");
		});
	});
        $("#d").click(function(){
		var win = new w.Window().common({
			content:"我是一个通用弹窗",
			width:300,
			height:150,
			y:50,
			hasMask:true,
			dragHandle:".window_header",
			timeout:3000
		}).on("common",function(inputValue){
			alert("您输入的内容是: "+inputValue);
		});
	});

});
	
});