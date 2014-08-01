/*===========================Open Modal window===========================*/

var str_html_error='\
	<div style="font-size:12px;">\
		<div style="background-color:#08327e; padding:8px 5px 5px 10px; color:#ffffff;">\
			<b>错 误</b>\
		</div>\
		<div style="padding:10px; line-height:2em">PARAM_content</div>\
		<div style="padding:2px;text-align:center;background:#D0BFA1;">\
			<input type="button" value="确 定"\ style="padding:2px 0px 0px 0px; background-color:#08327e;color:#FFF;font-size:12px;border-top:1px solid #DDD;border-left:1px solid #DDD;border-right:1px solid #333;border-bottom:1px solid #333;"\ onclick="javascript:eval(PARAM_cbMth);"/>\
		</div>\
	</div>';
	
var str_html_loading='\
	<div style="font-size:12px;">\
		Loading...\
	</div>';

var fullFDiv='',fullFIframe='',modalFDiv='',backFDiv='',contFDiv='';
function OpenHtmlWindow(url,width,height){

	fullFDiv = _crtFullFDiv();
	fullFIframe = _ctrFullFIframe();
	modalFDiv = _crtModalFDiv();
	backFDiv = _crtBackFDiv();
	contFDiv = _crtContentFDiv();

//	$(contFDiv).update(str_html_loading);
//	_setSize(contFDiv,backFDiv,modalFDiv, width, height);
	$(fullFDiv).show();
	$(fullFIframe).show();
	$(modalFDiv).show();
	$(backFDiv).show();
	$(contFDiv).show();	
	
	$(contFDiv).src = url;
	_setSize(contFDiv,backFDiv,modalFDiv, width, height);

}


/*====================辅助方法============================================*/
function _remove(cdiv, bdiv, mdiv,fiframe,fdiv){

	try{
		$(cdiv).remove();
		$(bdiv).remove();
		$(mdiv).remove();
		$(fiframe).remove();
		$(fdiv).remove();
		fullFDiv='',fullFIframe='',modalFDiv='',backFDiv='',contFDiv='';
	}catch(e){
		alert('_remove : '+ e.name+'='+e.message);
	}
}

function _setSize(cdiv, bdiv, mdiv, width, height){//设置高度和宽度
	try{
		var bwidth = 8;
		var ctop = (document.viewport.getHeight()-height)/3;
		var cleft= (document.viewport.getWidth()-width)/2;
		
		$(cdiv).setStyle({width: width+'px', height: height+'px', left: cleft+'px', top: ctop+'px'});
		$(bdiv).setStyle({width: (width+bwidth*2)+'px', height: (height+bwidth*2)+'px', left: (cleft-bwidth)+'px', top: (ctop-bwidth)+'px'});	
		$(mdiv).setStyle({width: document.viewport.getWidth()+'px', height: document.viewport.getHeight()+'px', left: '0px', top: '0px'});
	}catch(e){
		alert('_setSize : '+ e.name+'='+e.message);
	}
}

function _crtFullFDiv(){//创建全屏 div
	try{
		var objId = 'div_full_'+Math.round(Math.random()*1000000);
		var obj = new Element('div',{id:objId});
		
		obj.style.width = '100%';
		obj.style.height = 710 + 'px';
		obj.style.overflow = 'auto';
		obj.style.left = '0px';
		obj.style.top = '0px';
		obj.setOpacity(0.4);
		obj.setStyle({
					zIndex:100,
					position:'absolute',
					background:'#000',
					display:'none'
					});			

		document.body.appendChild(obj);
		return objId;
	}catch(e){
		alert('_crtFullFDiv : '+ e.name+'='+e.message);
	}	
}

function _ctrFullFIframe(){
	try{
		var fObjId = 'div_iframe_'+Math.round(Math.random()*1000000);
		var fObj = new Element('iframe',{id:fObjId});		
		fObj.style.width = '100%';
		fObj.style.height = 600 + 'px';

		fObj.style.left = '0px';
		fObj.style.top = '0px';
		fObj.setOpacity(0);
		fObj.setStyle({
					zIndex:101,
					position:'absolute',
					background:'#000',
					display:'none'
					});	

		document.body.appendChild(fObj);
		return fObjId;
	}catch(e){
		alert('_crtFullIframe : '+ e.name+'='+e.message);
	}	
}

function _crtModalFDiv(){//创建modal div
	try{
		var objId = 'div_modal_'+Math.round(Math.random()*1000000);
		var obj = new Element('div',{id:objId});
		obj.setOpacity(0);
		obj.setStyle({
					zIndex:102,
					position:'absolute',
					background:'#FFFFFF',
					display:'none'
					});	
		obj.onclick = function(){
			_remove(contFDiv,backFDiv,modalFDiv,fullFIframe,fullFDiv);
		}
		document.body.appendChild(obj);
		return objId;
	}catch(e){
		alert('_crtModalFDiv : '+ e.name+'='+e.message);
	}
}

function _crtBackFDiv(){//创建背景div
	try{
		var objId = 'div_background_'+Math.round(Math.random()*1000000);
		var obj = new Element('div',{id:objId});
		obj.setOpacity(0.5);
		obj.setStyle({
					zIndex:200,
					position:'absolute',
					background:'#000000',
					display:'none'
					});	

		document.body.appendChild(obj);
		return objId;
	}catch(e){
		alert('_crtBackFDiv : '+ e.name+'='+e.message);
	}
}

function _crtContentFDiv(){//创建内容div
	try{		
		//var fObjId = 'div_iframe_'+Math.round(Math.random()*1000000);
		var fObjId = 'myframe';
		var fObj = new Element('iframe',{name:fObjId,id:fObjId});		

		fObj.setStyle({
					zIndex:300,
					position:'absolute',
					background:'#000',
					display:'none'
					});	
		
		fObj.frameborder = '0';
		document.body.appendChild(fObj);
		return fObjId;
	}catch(e){
		alert('_crtContentFDiv : '+ e.name+'='+e.message);
	}
}

function removeDiv(){
	parent._remove(parent.contFDiv,parent.backFDiv,parent.modalFDiv,parent.fullFIframe,parent.fullFDiv);
}
