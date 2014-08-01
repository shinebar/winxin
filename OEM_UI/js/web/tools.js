/*---------------------------------Iframe自适应-------------------------------*/
function iframeAutoFit(){
	//var defh = 450;
	try{
		var frmObj = document.getElementById('inIframe');
		if ( frmObj.contentDocument && frmObj.contentDocument.body){
			h = frmObj.contentDocument.body.offsetHeight;
		}else if ( frmObj.Document && frmObj.Document.body){
			h = frmObj.Document.body.scrollHeight;
		}
		//h = h>defh?h:defh;
		frmObj.height = h;
		alert(frmObj.height);
	}catch(e){
		//alert(e.name+"  :   "+e.message);
		frmObj.height = 768;
	}
}

/*-------------------------- 选项卡 切换隐藏 效果 ----------------------*/
var oldId ='';
function switchTag(totalNum,selectNum,aTagName,listName,obj){

	var length = totalNum;

	for(var i = 1; i <= length; i++){
		if(i == eval(selectNum)){
			$(listName+selectNum).show();
			//obj.className = 'tab_page_selected';
		}else{
			$(listName + i).hide();	
		}
		
	}

	obj.className = 'tab_page_selected';
	
	var chkbox = document.getElementsByName(aTagName);  
	var nodes = $A(chkbox); 

	nodes.each(function(node){
		if(node == obj){
			node.className = 'tab_page_selected';
		}else{
			node.className = 'tab_page_disselected';
		}							
	});
/*	for(var i = 0; i < length; i++){

		if(document.getElementsByName(aTagName)[i] == obj){
			document.getElementsByName(aTagName)[i].className = 'tab_page_selected';
		}else{
			document.getElementsByName(aTagName)[i].className = 'tab_page_disselected';
		}
		
	}*/
}

/*-------------------------- divbox 折叠/展开 效果 ----------------------*/
function isHidden(e1Str,e2Str){
	var e1 = $(e1Str);

	if(e1.style.display == ''){
		e1.style.display = 'none';
		e2Str.innerHTML = '<a class="roll2" href="#">展开</a>';
	}else{
		e1.style.display = '';
		e2Str.innerHTML = '<a class="roll" href="#">折叠</a>';
	}
}

/*-------------------------- window.open 弹出效果 ----------------------*/
function openNewWindow(wName, width, height, url){
	window.open(url,wName,'width='+width+',height='+height+',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=yes');
}
/*function showOrHide(eleId){
	if( $(eleId).visible() ){
		$(eleId).hide();
	}else{
		$(eleId).show();
	}
}*/

/*function myConfirm(msg){

	if(msg == undefined){
		if(confirm('是否确定删除？')){

		}
	}else{
		if(confirm(msg)){
			myFunction();
		}
	}
	
}*/

/*-------------------------- Select 移动 单复选效果 ----------------------*/
	function listToList(list1,list2,direction,operation){
		
		if(list1 == undefined || list2 == undefined || direction == undefined){
			alert('参数无效！例：listToList(list1,list2,direction,operation)');
			return false;
		}
		
		if(direction == '>' && (operation == undefined) || (operation == '0')){
			move(list1,list2);
		}else if(direction == '>' && operation == '1'){
			moveAll(list1,list2);
		}

		if(direction == '<' && (operation == undefined) || (operation == '0')){
			move(list2,list1);
		}else if(direction == '<' && operation == '1'){
			moveAll(list2,list1);
		}	
	}

	function move(list1,list2){

		var opt=$(list1).options;
		len=opt.length;
		for(i=len-1;i>-1;i--){
			if(opt[i].selected){
				$(list2).appendChild(opt[i]);
			}
		}
	}
	
	function moveAll(list1,list2){
		var opt=$(list1).options;
		len=opt.length;
		for(i=len-1;i>-1;i--){
			$(list2).appendChild(opt[i]);
		}
	}

/*-------------------------- Div套Table横向滚动条 效果 ----------------------*/
	function autoScrollTb(divId){
		if(document.all){
			document.getElementById(divId).style.width = screen.width - 150 - 78 + 'px';
		}
	}

/*-------------------------- Table每行高亮 效果 ----------------------*/
	//该函数修正IE6不能识别TR元素hover伪类的bug
	function highlightTr(){
		var theEvent=window.event||arguments.callee.caller.arguments[0];
		var srcElement = theEvent.srcElement;
		var regStr=/\b\s*trHover\b/g;
		
		if (!srcElement){
			srcElement = theEvent.target;
		}
		
		if(!srcElement.parentNode){
			return false;
		}
		
		var o=srcElement.parentNode;

		while(o.parentNode&&o.tagName!="TR"){
			
			if(o.tagName=="TABLE" || o.tagName=="DIV"){
				break;
			}else{
				o=o.parentNode;
			}
		}
	
		if(o.className.indexOf('trHover')==-1){
			o.className+=" trHover";
			//alert(o.className);
		}else{
			o.className=o.className.replace(regStr,""); 
		}
	}