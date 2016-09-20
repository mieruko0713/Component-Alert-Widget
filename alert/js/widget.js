define(["jquery"],function($){
	function Widget() {
		this.boundingBox = null;
	};
	Widget.prototype = {
		on: function(type,handler){
			if(typeof this.handlers[type]=="undefined"){
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
			return this;
		},
		fire: function(type,data) {
			if(this.handlers[type] instanceof Array) {
				var handlers = this.handlers[type];
				for(var i=0,len=handlers.length;i<len;i++) {
					handlers[i](data);
				}
			}
			return this;
		},
		// 添加dom节点
		renderUI: function(){},
		// 添加事件监听
        bindUI: function(){},
        // 初始化组件属性
        syncUI:function(){},
        render: function(container) {
        	this.renderUI();
        	this.handlers = {};
        	this.bindUI();
        	this.syncUI();
        	$(container||document.body).append(this.boundingBox);
        },
        destructor: function(){},
        destroy: function() {
        	this.destructor();
        	this.boundingBox.off();
        	this.boundingBox.remove();
        }

	}
	return {
		Widget:Widget
	}
});