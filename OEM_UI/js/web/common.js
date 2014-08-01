/**
 * 复选框的多选

 */
function selectAll(checkObj,checkBoxName){
	var allChecks = document.getElementsByName(checkBoxName);
	if(checkObj.checked){
		for(var i = 0;i<allChecks.length;i++){
			allChecks[i].checked = true;
		}
	}else{
		for(var i = 0;i<allChecks.length;i++){
			allChecks[i].checked = false;
		}
	}
}
/**
 * 检查复选框
 */
function checkselectAllBox(checkObj,checkAllId,checkBoxName){
	var checkAllObj = document.getElementById(checkAllId);
	var allChecks = document.getElementsByName(checkBoxName);
	var allFlag = true;
	if(checkObj.checked){
		for(var i = 0;i<allChecks.length;i++){
			if(allChecks[i].checked){
				
			}else{
				checkAllObj.checked = false;
				allFlag = false;
				return;
			}
		}
		if(allFlag==true){
			checkAllObj.checked = true;
		}
	}else{
		checkAllObj.checked = false;
	}
}

/*-------------------------- window.open 弹出效果 ----------------------*/
function openNewWindow(wName, width, height, url){
	window.open(url,wName,'width='+width+',height='+height+',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=yes');
}

/*-------------------------- 为页面上的所有table加上序号一列 ----------------------*/
	function __initTd__() {
		var tableObj = document.getElementsByTagName("table");
		var __td__;
		for(out=0;out<tableObj.length;out++) {
			if(tableObj[out].className == "table_list") {
				for(i=0;i<tableObj[out].rows.length;i++) {
					__td__ = tableObj[out].rows[i].insertCell(0);//document.createElement(i<1?'th':'td');
					if(i<1) {
						__td__.style.background = "#DAE0EE"; 
						__td__.style.color = "#08327E";
						__td__.style.padding = "0px 2px 0px 2px";
					}
					__td__.style.borderLeft = "none";
					__td__.innerHTML = i < 1 ? "序号" : i;
					//tableObj[out].rows[i].appendChild(__td__);
				}
			}
		}
	}
/*--------------------------设置全选的样式---------------------------------- */
function setAllSelect(){
	document.write("-请选择-");
}

//弹出选择客户的公共页面

function openCustomerSearch(){
	parent.OpenHtmlWindow('webCnt/publicModule/customerSearch.html',750,400);
}
//弹出修改客户的公共页面

function openCustomerModify(){
	parent.OpenHtmlWindow('webCnt/publicModule/editPersonalCustomer.html',800,600);
}

//隐藏&显示

function autoShowit(id){
	var obj = document.getElementById(id);
	if(obj != "undefined"){
		if(obj.style.display == "none"){
			obj.style.display = "inline";
		} else {
			obj.style.display = "none";
		}
	}
}

function showit(id){
	var obj = document.getElementById(id);
	if(obj != "undefined"){
		if(obj.style.display == "none"){
			obj.style.display = "inline";
		} else {
			//obj.style.display = "none";
		}
	}
}