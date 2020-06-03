# 对话框组件效果说明 #
<!--	/*=============================*/  -->
+ 组件介绍
+	内容包含点击显示，关闭，提交 对话框可移动
+	写好html代码 下面有现成的 然后引入css  同时要引入Jquery
+	
+ CSS部分
+ /* 标题部分 */
		 .modal {
			width: 100%;
			overflow: hidden;
		 }

		 .modal-dialog {
			width: 100%;
			/* margin: auto; */
			display: inline-block;
			display: flex;
			justify-content: center;
		}

		.modal-content {
			/* background: red; */
			border: 1px solid #C0C0C0;
			width: 600px;
			border-radius: 5px;
			box-shadow: 1px 7px 33px rgb(194, 194, 194);
			height: 200px;
		}

		.modal-header {
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #ccc;
		}

		.modal-header .modal-title {
			/* margin-left: 20px; */
			font-size: 14px;
			padding: 7px;
		}

		.modal-header .close {
			margin-right: 20px;
			background: #fff;
			overflow: none;
			border: none;
			/* border: 1px solid #ccc; modal-content*/
			height: 30px;
			line-height: 30px;
			margin-top: 2%;
			font-size: 18px;
			color: #ccc;
		}

		.modal-header .close {}

		/* 主题内容部分 */
		.modal-body {
			/* width: 600px; */
			/* background: red; */
			padding: 7px;
			border-bottom: 1px solid #ccc;
			height: 50px;
			line-height: 10px;
		}

		.modal-body p {
			font-size: 14px;
		}

		/* 关闭保存部分 */
		.modal-footer {
			height: 63px;
			/* background: red; */
			line-height: 63px;
			display: flex;
			justify-content: space-between;
		}

		.modal-footer button {
			margin-right: 10px;
			/* color: #353535; */
			/* background-color: #f2f2f2; */
			border-color: #bfbfbf;
		}

		.btn {
			display: inline-block;
			padding: 5px 12px;
			margin-bottom: 0;
			font-size: 13px;
			font-weight: 400;
			line-height: 1.53846154;
			text-align: center;
			white-space: nowrap;
			vertical-align: middle;
			cursor: pointer;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			border: 1px solid transparent;
			border-radius: 4px;
		}

		.btn-primary {
			color: #fff;
			background-color: #3280fc;
			border-color: rgb(50, 128, 252);
		}

## HTML部分

	 <body>
			<button type="button" id="xianshi" class="xianshi">显示按钮</button>
			<div id="box">
				<div class="modal fade">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title">标题</h4>
								<button type="button" class="close" data-dismiss="modal">
									<span aria-hidden="true" id="x">×</span>
									<!-- <span class="sr-only">关闭</span> -->
								</button>
							</div>
							<div class="modal-body">
								<p>主题内容...</p>
							</div>
							<div class="modal-footer">
								<div></div>
								<div>
									<button type="button" class="btn btn-default" data-dismiss="modal" id="btnDefault">关闭</button>
									<button type="button" class="btn btn-primary">保存</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</body>
		
		
		
		
## 使对话框移动部分
	 <script>
		$(function() {
			var $box = $("#box");
			//创建小方块的jquery对象
			//创建小方块的鼠标点按下事件
			$box.mousedown(function(event) {
				//获取鼠标按下的时候左侧偏移量和上侧偏移量
				var old_left = event.pageX; //左侧偏移量
				var old_top = event.pageY; //竖直偏移量

				//获取鼠标的位置
				var old_position_left = $(this).position().left;
				var old_position_top = $(this).position().top;

				//鼠标移动
				$(document).mousemove(function(event) {
					var new_left = event.pageX; //新的鼠标左侧偏移量
					var new_top = event.pageY; //新的鼠标竖直方向上的偏移量

					//计算发生改变的偏移量是多少
					var chang_x = new_left - old_left;
					var change_y = new_top - old_top;

					//计算出现在的位置是多少

					var new_position_left = old_position_left + chang_x;
					var new_position_top = old_position_top + change_y;
					//加上边界限制
					if (new_position_top < 0) { //当上边的偏移量小于0的时候，就是上边的临界点，就让新的位置为0
						new_position_top = 0;
					}
					//如果向下的偏移量大于文档对象的高度减去自身的高度，就让它等于这个高度
					if (new_position_top > $(document).height() - $box.height()) {
						new_position_top = $(document).height() - $box.height();
					}
					//右限制
					if (new_position_left > $(document).width() - $box.width()) {
						new_position_left = $(document).width() - $box.width();
					}
					if (new_position_left < 0) { //左边的偏移量小于0的时候设置 左边的位置为0
						new_position_left = 0;
					}

					$box.css({
						left: new_position_left + 'px',
						top: new_position_top + 'px'
					})
				});
				$box.mouseup(function() {
					$(document).off("mousemove");
				})
			});
		})
	 </script>

## 面向对象获取宽高位置等
	  <script>
		// var _w = 600;

		 // var modalContent = document.getElementsByClassName("modal-content")[0];
	  // modalContent.style.width = _w+"px";

		var obj = {
			id: "modal-content",
			_w: 400,
			_h: 200,
			title: "我是标题",
			content: "我是内容",
			callback: wancheng //用户自定义回调函数名称
		};

		function wancheng() {
			console.log("提交")
		}
		var Modal1 = new ModalContent(obj);

	+ 下面的外链的部分js
	 
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




	</script>

