	
	/*----------------------------------去掉浏览器 纵向滚动条效果-------------------------------*/
	var h = "";
	function invisibleScrollY(){
		var frmObj = $('inIframe');
		if ( frmObj.contentDocument && frmObj.contentDocument.body){
			h = frmObj.contentDocument.body.offsetHeight;
		}else if ( frmObj.Document && frmObj.Document.body){
			h = frmObj.Document.body.scrollHeight;
		}
		
		if(h < 550){// 非IE iframe内部页面小于550 去掉纵向滚动条

			frmObj.style.overflowY = 'hidden';
		}else{
			frmObj.style.overflowY = 'visible';
		}
	}

	/*-----------------------------------------折叠效果-----------------------------------------*/
	var flag = 0;
	function getSatus(){
		if($('sideBar').style.display == ''){		
			flag = 0; 
		}else{		
			flag = 1;
		}		
		return flag;
	}

	function openSildBar(){		 
		$('sideBar').style.display = '';
		flag = 0;
	}

	function showSildBar(){
		
		if(getSatus() == 0){		
			$('sideBar').style.display = 'none';
			$('inIframe').height = '530px';
		}else{		
			$('sideBar').style.display = '';
		}
	
	}

	function styleChange(obj){
		
		obj.width = 12;
		$('ImgArrow').style.display = '';
		
		if(getSatus() == 0){
			$('ImgArrow').src = 'img/exBn1.gif';
		}else{
			$('ImgArrow').src = 'img/exBn2.gif';
		}
		//obj.style.backgroundColor = '#D0BFA1';
	}
	
	function styleBack(obj){
		obj.width = 12;
		$('ImgArrow').style.display = 'none';
		//obj.style.backgroundColor = '#FFF';
	}

	/*--------------------------------------隐藏部分 效果------------------------------------*/
	function showBox(id) {

		if(document.all){
			$('box').style.marginLeft = '-72px';
		}else{
			$('box').style.marginLeft = '-16px';
		}
		
		$('box').style.marginTop = '20px';
		
		$('box').show();
		$('boxTitle').innerHTML = $(id).innerHTML;
	}
	
	function hideBox(){
		$('box').hide();
	}

	/*-----------------------------------------菜单效果-----------------------------------------*/
	var oldObj = null;
	function isShowMenus(obj){
		
		if($(oldObj) == null){
			return 0;
		}
		
		if($(oldObj).style.display == 'block'){
			$(oldObj).style.display = 'none';
			return 1;
		}
	
		if($(oldObj).style.display == 'none'){
			$(oldObj).style.display = 'block';
			return 2;
		}
	
	}
	
	function showMenus(obj){
		
		if(isShowMenus(obj) == 0){
	
			if($(obj).style.display == 'none' || $(obj).style.display == ''){
				$(obj).style.display = 'block';
			}else{
				$(obj).style.display = 'none';
			}
			
		}else if(isShowMenus(obj) == 1){
			$(obj).style.display = 'block';
		}else if(isShowMenus(obj) == 2){
			$(obj).style.display = 'none';
		}else{
			$(obj).style.display = 'block';
			$(oldObj).style.display = 'none';
		}
		//$(obj).style.display = 'block';
		oldObj = obj;
	}

	/*---------------------------Checkbox 全选 传值 效果---------------------------*/
	function checkSelect(name){ 
	
		var chkbox = document.getElementsByName(name);  
		var nodes = $A(chkbox);  
		var valueArr = new Array();
		
		var sltNodes = nodes.select(function(node){ 
			return node.checked;  
		});  
		
		sltNodes.each(function(node){
			return node.value;
		}); 
		
		for(var i =0 ; i < sltNodes.length; i++){
			valueArr.push(sltNodes[i].value);
		}
		
		return valueArr;
	}
 
	function fullChecked(name,self){
	
		var chkbox = document.getElementsByName(name);  
		var nodes = $A(chkbox); 
		
			nodes.each(function(node){  

				if(self.checked){
					node.checked = true; 	
				}else{			
					node.checked = false;
				}
			});
	}