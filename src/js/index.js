function ModalContent(obj){
		this._w = obj._w;
		this._h = obj._h;
		this.mC = document.getElementsByClassName(obj.id)[0];
		this.titleId = document.getElementsByClassName("modal-title")[0];
		this.contentid = document.getElementsByClassName("modal-body")[0].getElementsByTagName("p")[0];
		this.title = obj.title;
		this.content = obj.content;
		this.xx = document.getElementById("x");
		this.btnDefault = document.getElementsByClassName("btn-default")[0];
		this.callback = obj.callback;//用户自定义的函数名
		this.btnPrimary = document.getElementsByClassName("btn-primary")[0];
		this.zz();
		this.addEvent();
	}
	
	ModalContent.prototype.zz = function(){
		this.mC.style.width = this._w + "px";
		this.mC.style.height = this._h + "px";
		this.titleId.innerHTML = this.title;
		this.contentid.innerHTML = this.content;
	}
	ModalContent.prototype.addEvent = function(){
		var that = this;
		
		$("#xianshi").on("click", function() {
			console.log("ok")
			$("#box").show();
		})
		$(this.btnDefault).on("click",function() {
			console.log("okle ")
			$("#box").hide();
		})
		$(this.xx).on("click",function() {
			$("#box").hide();
		})
		$(this.btnPrimary).on("click",function() {
			$("#box").hide();
			that.callback.call(null);
		})
		// this.btnPrimary.addEventListener("click",function(){
		// 	that.mC.style.display = "none";
		// })
	}