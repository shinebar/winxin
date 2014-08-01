
/*
//联动选择（提供单选，复选，名称和值传递）
*使用说明：
0==区域选择框
1==省份选择框
2==城市选择框
*1.在页面容器位置或者是在window.onload=function(){}中使用：LinkMap.prototype.addTo("容器对象或者ID","联动框ID","默认选择值","[表格容器的参数，行或者列]");
	例如：1.<div id='test'><script>LinkMap.prototype.addTo("test",0);</script></div>
		    2.window.onload=function(){
				LinkMap.prototype.addTo("test",0);
		      }
*2,该联动提供单选和复选，以及传值和传名等参数。你可以在你的js中调用：
	LinkMap.prototype.selectType=1;//1:单选，>1:复选，同时你给出的大于1的数值也会影响复选框的大小
	LinkMap.prototype.valueType=11;//11:传名（即名字和value相同），12:传值（名字和值是不同的）
*3,联动的默认ID为：AREA_,PROVINCE_,CITY_。你可以给你的容器添加一个属性title来改变默认的ID 。
	例如：<div id='test' title=‘newId'><script>LinkMap.prototype.addTo("test",0);</script></div>
*/
var APCMap;
(function(){
	function getObj(p,v){
		return{
			name:p,
			value:v
		};
	}
//东北区
var heilongjiang=[getObj("哈尔滨","0101001"),getObj("大庆","0101002"),getObj("佳木斯","0101003"),getObj("鸡西","0101004"),getObj("鹤岗","0101005"),getObj("牡丹江","0101006"),getObj("齐齐哈尔","0101007"),getObj("伊春","0101008"),getObj("大兴安岭","0101009"),getObj("黑河","0101010"),getObj("七台河","0101011"),getObj("双鸭山","0101012"),getObj("绥化","0101013")];
var jilin=[getObj("长春","0102001"),getObj("白城","0102002"),getObj("白山","0102003"),getObj("吉林","0102004"),getObj("辽源","0102005"),getObj("四平","0102006"),getObj("松原","0102007"),getObj("通化","0102008"),getObj("延边朝鲜族自治州","0102009")];
var liaoning=[getObj("沈阳","0103001"),getObj("鞍山","0103002"),getObj("本溪","0103003"),getObj("大连","0103004"),getObj("锦州","0103005"),getObj("铁岭","0103006"),getObj("抚顺","0103007"),getObj("葫芦岛","0103008"),getObj("辽阳","0103009"),getObj("盘锦","0103010"),getObj("丹东","0103011"),getObj("朝阳","0103012"),getObj("营口","0103013"),getObj("阜新","0103014")];
//华北区
var beijing=[getObj("北京","0201001")];
var tianjin=[getObj("天津","0202001")];
var hebei=[getObj("石家庄","0203001"),getObj("张家庄","0203002"),getObj("保定","0203003"),getObj("秦皇岛","0203004"),getObj("刑台","0203005"),getObj("唐山","0203006"),getObj("邯郸","0203007"),getObj("沧州","0203008"),getObj("承德","0203009"),getObj("廊坊","0203010"),getObj("衡水","0203011")];
var neimenggu=[getObj("呼和浩特","0204001"),getObj("包头","0204002"), getObj("鄂尔多斯","0204003"), getObj("呼伦贝尔","0204004"), getObj("赤峰","0204005"), getObj("通辽","0204006"), getObj("乌海","0204007"), getObj("锡林郭勒盟","0204008"), getObj("乌兰察布盟","0204009"), getObj("巴彦淖尔盟","0204010"), getObj("阿拉善盟","0204011"), getObj("兴安盟","0204012")];
var shanxi=[getObj("太原","0205001"),getObj("大同","0205002"), getObj("运城","0205003"), getObj("长治","0205004"), getObj("晋城","0205005"), getObj("晋中","0205006"), getObj("临汾","0205007"), getObj("吕梁","0205008"), getObj("朔州","0205009"), getObj("忻州","0205010"), getObj("阳泉","0205011")];

//华东区
var shanghai=[getObj("上海","0301001")];
var shandong=[getObj("济南","0302001"), getObj("菏泽","0302002"), getObj("青岛","0302003"), getObj("日照","0302004"), getObj("烟台","0302005"), getObj("淄博","0302006"), getObj("聊城","0302007"), getObj("潍坊","0302008"), getObj("威海","0302009"), getObj("临沂","0302010"), getObj("枣庄","0302011"), getObj("东营","0302012"), getObj("滨州","0302013"), getObj("德州","0302014"), getObj("济宁","0302015"), getObj("泰安","0302016"), getObj("莱芜","0302017")];
var jiangsu=[getObj("南京","0303001"), getObj("苏州","0303002"), getObj("南通","0303003"), getObj("连云港","0303004"), getObj("徐州","0303005"), getObj("扬州","0303006"), getObj("盐城","0303007"), getObj("镇江","0303008"), getObj("无锡","0303009"), getObj("泰州","0303010"), getObj("淮安","0303011"), getObj("常州","0303012"), getObj("宿迁","0303013")];
var zhejiang=[getObj("杭州","0304001"), getObj("嘉兴","0304002"), getObj("温州","0304003"), getObj("绍兴","0304004"), getObj("宁波","0304005"), getObj("台州","0304006"), getObj("湖州","0304007"), getObj("金华","0304008"), getObj("丽水","0304009"), getObj("衢州","0304010"), getObj("舟山","0304011"), getObj("诸暨","0304012")];
var fujian=[getObj("福州","0305001"), getObj("泉州","0305002"), getObj("石狮","0305003"), getObj("厦门","0305004"), getObj("漳州","0305005"), getObj("龙岩","0305006"), getObj("莆田","0305007"), getObj("南平","0305008"), getObj("宁德","0305009"), getObj("三明","0305010")];
var anhui=[getObj("合肥","0306001"), getObj("芜湖","0306002"), getObj("安庆","0306003"), getObj("淮南","0306004"), getObj("淮北","0306005"), getObj("马鞍山","0306006"), getObj("蚌埠","0306007"), getObj("阜阳","0306008"), getObj("滁州","0306009"), getObj("池州","0306010"), getObj("黄山","0306011"), getObj("巢湖","0306012"), getObj("六安","0306013"), getObj("宿州","0306014"), getObj("铜陵","0306015"), getObj("宣城","0306016"), getObj("亳州","0306017")];

//华中区
var hubei=[getObj("武汉","0401001"), getObj("襄樊","0401002"), getObj("宜昌","0401003"), getObj("黄石","0401004"), getObj("荆州","0401005"), getObj("十堰","0401006"), getObj("随州","0401007"), getObj("咸宁","0401008"), getObj("孝感","0401009"), getObj("鄂州","0401010"), getObj("荆门","0401011"), getObj("黄冈","0401012"), getObj("潜江","0401013"), getObj("仙桃","0401014"), getObj("天门","0401015"), getObj("神农架林区","0401016"), getObj("恩施土家族苗族自治州","0401017")];
var hunan=[getObj("长沙","0402001"), getObj("湘潭","0402002"), getObj("岳阳","0402003"), getObj("株洲","0402004"), getObj("常德","0402005"), getObj("怀化","0402006"), getObj("衡阳","0402007"), getObj("张家界","0402008"), getObj("郴州","0402009"), getObj("永州","0402010"), getObj("邵阳","0402011"), getObj("益阳","0402012"), getObj("娄底","0402013"), getObj("湘西土家族苗族自治州","0402014")];
var henan=[getObj("郑州","0403001"), getObj("驻马店","0403002"), getObj("南阳","0403003"), getObj("许昌","0403004"), getObj("洛阳","0403005"), getObj("焦作","0403006"), getObj("开封","0403007"), getObj("三门峡","0403008"), getObj("平顶山","0403009"), getObj("信阳","0403010"), getObj("新乡","0403011"), getObj("商丘","0403012"), getObj("周口","0403013"), getObj("安阳","0403014"), getObj("鹤壁","0403015"), getObj("济源","0403016"), getObj("漯河","0403017"), getObj("濮阳","0403018")];
var jiangxi=[getObj("南昌","0404001"), getObj("九江","0404002"), getObj("景德镇","0404003"), getObj("上饶","0404004"), getObj("鹰潭","0404005"), getObj("井冈山","0404006"), getObj("宜春","0404007"), getObj("赣州","0404008"), getObj("抚州","0404009"), getObj("新余","0404010"), getObj("萍乡","0404011"), getObj("吉安","0404012")];

//华南区
var guangdong=[getObj("广州","0501001"), getObj("深圳","0501002"), getObj("珠海","0501003"), getObj("中山","0501004"), getObj("东莞","0501005"), getObj("佛山","0501006"), getObj("汕头","0501007"), getObj("汕尾","0501008"), getObj("茂名","0501009"), getObj("韶关","0501010"), getObj("湛江","0501011"), getObj("肇庆","0501012"), getObj("潮州","0501013"), getObj("江门","0501014"), getObj("揭阳","0501015"), getObj("河源","0501016"), getObj("惠州","0501017"), getObj("梅州","0501018"), getObj("清远","0501019"), getObj("阳江","0501020"), getObj("云浮","0501021")];
var guangxi=[getObj("南宁","0502001"), getObj("柳州","0502002"), getObj("桂林","0502003"), getObj("百色","0502004"), getObj("北海","0502005"), getObj("防城港","0502006"), getObj("钦州","0502007"), getObj("梧州","0502008"), getObj("贺州","0502009"), getObj("河池","0502010"), getObj("崇左","0502011"), getObj("贵港","0502012"), getObj("来宾","0502013"), getObj("玉林","0502014")];
var hainan=[getObj("海口","0503001"), getObj("三亚","0503002"), getObj("琼海","0503003"), getObj("文昌","0503004"), getObj("万宁","0503005"), getObj("东方","0503006"), getObj("儋州","0503007"), getObj("五指山","0503008"), getObj("屯昌县","0503009"), getObj("澄迈县","0503010"),getObj("临高县","0503011"), getObj("定安县","0503012"), getObj("白沙黎族自治县","0503013"), getObj("陵水黎族自治县","0503014"), getObj("昌江黎族自治县","0503015"), getObj("乐东黎族自治县","0503016"), getObj("保亭黎族苗族自治县","0503017"), getObj("琼中黎族苗族自治县","0503018")];

//西北区
var shanxi=[getObj("西安","0601001"), getObj("宝鸡","0601002"), getObj("汉中","0601003"), getObj("安康","0601004"), getObj("延安","0601005"), getObj("商洛","0601006"), getObj("咸阳","0601007"), getObj("榆林","0601008"), getObj("渭南","0601009"), getObj("铜川","0601010")];
var ningxia=[getObj("银川","0602001"), getObj("石嘴山","0602002"), getObj("吴忠","0602003"), getObj("固原","0602004")];
var gansu=[getObj("兰州","0603001"), getObj("天水","0603002"), getObj("酒泉","0603003"), getObj("平凉","0603004"), getObj("武威","0603005"), getObj("张掖","0603006"), getObj("嘉峪关","0603007"), getObj("陇南","0603008"), getObj("白银","0603009"), getObj("定西","0603010"), getObj("金昌","0603011"), getObj("庆阳","0603012"), getObj("临夏回族自治州","0603013"), getObj("甘南藏族自治州","0603014")];
var qinghai=[getObj("西宁","0604001"), getObj("海东","0604002"), getObj("海南藏族自治州","0604003"), getObj("海北藏族自治州","0604004"), getObj("果洛藏族自治州","0604005"), getObj("玉树藏族自治州","0604006"), getObj("黄南藏族自治州","0604007"), getObj("海西蒙古族藏族自治州","0604008")];
var xinjiang=[getObj("乌鲁木齐","0605001"), getObj("喀什","0605002"), getObj("哈密","0605003"), getObj("和田","0605004"), getObj("克拉玛依","0605005"), getObj("阿克苏","0605006"), getObj("阿拉尔","0605007"), getObj("吐鲁番","0605008"), getObj("石河子","0605009"), getObj("五家渠","0605010"), getObj("图木舒克","0605011"), getObj("伊犁哈萨克自治州","0605012"), getObj("昌吉回族自治州","0605013"), getObj("巴音郭楞蒙古自治州","0605014"), getObj("博尔塔拉蒙古自治州","0605015"), getObj("克孜勒苏柯尔克孜自治州","0605016")];
//西南区
var chongqing=[getObj("重庆","0701001")];
var sichuan=[getObj("成都","0702001"), getObj("绵阳","0702002"), getObj("宜宾","0702003"), getObj("南充","0702004"), getObj("内江","0702005"), getObj("达州","0702006"), getObj("攀枝花","0702007"), getObj("雅安","0702008"), getObj("资阳","0702009"), getObj("自贡","0702010"), getObj("泸州","0702011"), getObj("眉山","0702012"), getObj("乐山","0702013"), getObj("遂宁","0702014"), getObj("广安","0702015"), getObj("广元","0702016"), getObj("德阳","0702017"), getObj("都江堰","0702018"), getObj("巴中","0702019"), getObj("甘孜藏族自治州","0702020"), getObj("凉山彝族自治州","0702021"), getObj("阿坝藏族羌族自治州","0702022")];
var yunnan=[getObj("昆明","0703001"), getObj("丽江","0703002"), getObj("曲靖","0703003"), getObj("临沧","0703004"), getObj("保山","0703005"), getObj("玉溪","0703006"), getObj("昭通","0703007"), getObj("思茅","0703008"), getObj("大理白族自治州","0703009"), getObj("红河哈尼族彝族自治州","0703010"), getObj("西双版纳傣族自治州","0703011"), getObj("文山壮族苗族自治州","0703012"), getObj("楚雄彝族自治州","0703013"), getObj("德宏傣族景颇族自治州","0703014"), getObj("迪庆藏族自治州","0703015"), getObj("怒江傈傈族自治州","0703016")];
var guizhou=[getObj("贵阳","0704001"), getObj("六盘水","0704002"), getObj("遵义","0704003"), getObj("铜仁","0704004"), getObj("毕节","0704005"), getObj("安顺","0704006"), getObj("黔东南苗族侗族自治州","0704007"), getObj("黔南布依族苗族自治州","0704008"), getObj("黔西南布依族苗族自治州","0704009")];
var xizhang=[getObj("拉萨","0705001"), getObj("那曲","0705002"), getObj("昌都","0705003"), getObj("林芝","0705004"), getObj("日喀则","0705005"), getObj("阿里","0705006"), getObj("山南","0705007")];
//港澳台区
var xianggang=[getObj("香港","0801001")];
var aomen=[getObj("澳门","0802001")];
var taiwan=[getObj("台北","0803001"), getObj("高雄","0803002"), getObj("基隆","0803003"), getObj("台中","0803004"), getObj("台南","0803005"), getObj("嘉义","0803006"), getObj("新竹","0803007")];
//区域
APCMap=[
	  getObj(getObj("黑龙江","0101"),heilongjiang),
	  getObj(getObj("吉林","0102"),jilin),
	  getObj(getObj("辽宁","0103"),liaoning),
	  getObj(getObj("北京","0201"),beijing),
	  getObj(getObj("天津","0202"),tianjin),
	  getObj(getObj("河北","0203"),hebei),
	  getObj(getObj("内蒙古","0204"),neimenggu),
	  getObj(getObj("山西","0205"),shanxi),
	  getObj(getObj("上海","0301"),shanghai),
	  getObj(getObj("山东","0302"),shandong),
	  getObj(getObj("江苏","0303"),jiangsu),
	  getObj(getObj("浙江","0304"),zhejiang),
	  getObj(getObj("福建","0305"),fujian),
	  getObj(getObj("安徽","0306"),anhui),
	  getObj(getObj("湖北","0401"),hubei),
	  getObj(getObj("湖南","0402"),hunan),
	  getObj(getObj("河南","0403"),henan),
	  getObj(getObj("江西","0404"),jiangxi),
	  getObj(getObj("广东","0501"),guangdong),
	  getObj(getObj("广西","0502"),guangxi),
	  getObj(getObj("海南","0503"),hainan),
	  getObj(getObj("陕西","0601"),shanxi),
	  getObj(getObj("宁夏","0602"),ningxia),
	  getObj(getObj("甘肃","0603"),gansu),
	  getObj(getObj("青海","0604"),qinghai),
	  getObj(getObj("新疆","0605"),xinjiang),
	  getObj(getObj("重庆","0701"),chongqing),
	  getObj(getObj("四川","0702"),sichuan),
	  getObj(getObj("云南","0703"),yunnan),
	  getObj(getObj("贵州","0704"),guizhou),
	  getObj(getObj("西藏","0705"),xizhang),
	  getObj(getObj("香港","0801"),xianggang),
	  getObj(getObj("澳门","0802"),aomen),
	  getObj(getObj("台湾","0803"),taiwan)
	  
	 ];
})();
//显示
(function LinkMap(){
	
	//字符串组合工具
	function StringBuffer_for_APCMap()
	{
		this.__strings__ = new Array;
		StringBuffer_for_APCMap.prototype.append = function(str)
		{
		  this.__strings__.push(str);
		  return this;
		};
		StringBuffer_for_APCMap.prototype.toString = function(split)
		{
			if(typeof split!="string"){
				split="";
			}
		  return this.__strings__.join(split);
		};
	}
	//单选复选属性设置
	LinkMap.prototype.selectType=1;//单选=1复选>1对应值为复选框可显示元素的大小。
	LinkMap.prototype.valueType=12;//11表示name==value;12表示name!=value
	LinkMap.prototype.area_id="AREA_";
	LinkMap.prototype.province_id="PROVINCE_";
	LinkMap.prototype.city_id="CITY_";
	LinkMap.prototype.ALL="----";
	/*
	*函数说明：将选择框放入一个容器中(应该是任意一个可放入其他元素的对象中)
	*参数说明：
	*container:容器，可以为容器ID或者容器对象本身(必须) 
	*lay:表示联动框的层，当前为：0-area,1-province,2-city(必须)
	*value:选择器的默认值(可有可无，没有的时候采用默认值)
	*row,col:当容器为表格时需要表格的行列值（均为从1开始）
	*（思考：对于参数个数的判断，通过参数个数来判断默认值或者是行列等？）
	*/	
	LinkMap.prototype.addTo=function(container,lay,value,row,col){
		if(typeof container=="string"){
			container=document.getElementById(container);
		}
		if(container==null){
			alert("找不到容器");
			return false;
		}
		
		if(container.nodeName=="TABLE"){
			if(row==undefined||(typeof row!="number")||col==undefined||(typeof col!="number")){
				alert("表格容器需要设置行，列参数，请正确设置表格的行列参数！");
				return false;
			}
			container=container.rows[row].cells[col];
		}
		var sb=new StringBuffer_for_APCMap();
		if(lay==1){
			if(container.title!=""){
				this.province_id=container.title;
			}
			sb.append("<SPAN ID='LS_PROVINCE'><SELECT ID='").append(this.province_id).append("' NAME='TPROVINCE' ONCHANGE='LinkMap.prototype.change(this,1);'");
			if(this.selectType>1) sb.append(" size='").append(this.selectType).append("' multiple");
			sb.append("><OPTION value=''>").append(this.ALL).append("</OPTION>");
			sb.append(this.getProvinces(value));
			sb.append("</SELECT></SPAN>");
		}else if(lay==2){
			if(container.title!=""){
				this.city_id=container.title;
			}
			sb.append("<SPAN ID='LS_CITY'><SELECT ID='").append(this.city_id).append("' NAME='TCITY'");
			if(this.selectType>1) sb.append(" size='").append(this.selectType).append("' multiple");
			sb.append("><OPTION value=''>").append(this.ALL).append("</OPTION>");
			sb.append(this.getCitys(null,value));
			sb.append("</SELECT></SPAN>");
		}
		container.innerHTML=sb.toString();
	}
	/*
	*函数作用：选择更改时的联动动作
	*参数说明：
	*obj:当前选择位置
	*lay:表示联动框的层，当前为：0-area,1-province,2-city
	*/
	LinkMap.prototype.change=function(obj,lay){
		var value="";
		//省份改变时，城市联动改变
		if(lay==0||lay==1){
			var csb=new StringBuffer_for_APCMap();
			var cty=document.getElementById("LS_CITY");
			if(cty==null){
				alert("未创建城市联动框");
				return false;
			}
			csb.append("<SELECT ID='").append(this.city_id).append("' NAME='TCITY'");
			csb.append("><OPTION value=''>").append(this.ALL).append("</OPTION>");
			for(var i=0;i<obj.options.length;i++){
				if(obj.options[i].selected){
					value=obj.options[i].value
					csb.append(this.getCitys(value));
				}
			}
			csb.append("</SELECT>");
			cty.innerHTML=csb.toString();
		}	
	}
	/*
	*函数说明：获取省份选项
	*参说说明：
	*ara:省份所在的区域
	*slect:默认选择项，如果没有给出，则会使用默认值
	*/
	LinkMap.prototype.getProvinces=function(slect){
		var sb=new StringBuffer_for_APCMap();
		for(var i=0;i<APCMap.length;i++){
			var val=this.valueType==11?APCMap[i].name.name:APCMap[i].name.value;
			sb.append("<OPTION VALUE='").append(val).append("'");
			if(val==slect){
				sb.append(" SELECTED");
			}
			sb.append(">").append(APCMap[i].name.name).append("</OPTION>");
		}
		return sb.toString();
	}
	/*
	*函数说明：获取城市选项
	*参说说明：
	*prnce:城市所在省份
	*slect:默认选择项，如果没有给出，则会使用默认值
	*/
	LinkMap.prototype.getCitys=function(prnce,slect){
		if(document.getElementById(this.province_id)!=null){
			prnce=document.getElementById(this.province_id).value
		}
		var citys;
		var prnces;
		for(var j=0;j<APCMap.length;j++){
			if((this.valueType==11?APCMap[j].name.name:APCMap[j].name.value)==prnce){
				citys=APCMap[j].value;
			}
		}
		
		if(citys==undefined){
			return "";
		}
		var sb=new StringBuffer_for_APCMap();
		for(var i=0;i<citys.length;i++){
			var val=this.valueType==11?citys[i].name:citys[i].value;
			sb.append("<OPTION VALUE='").append(val).append("'");
			if(val==slect){
				sb.append(" SELECTED");
			}
			sb.append(">").append(citys[i].name).append("</OPTION>");
		}
		return sb.toString();
	}
	/*****编码转换****/
	LinkMap.prototype.changeCodeToName=function(code){
		var patrn=/^[0-9]{1,20}$/;
		if (!patrn.exec(code)) 
		return code
		
		var a;
		var b;
		if(code.length==2){
			a=code;
		}else if(code.length==4){
			a=code.substring(0,2);
			b=code;
		}else{
			a=code.substring(0,2);
			b=code.substring(0,4);
		}
		//区
	//	alert("区"+a);
		var prnces;
		for(var i=0;i<APCMap.length;i++){
			if(APCMap[i].name.value==a){
				if(code.length==2){
					return APCMap[i].name.name;
				}else{
					prnces=APCMap[i].value;
			//		alert(prnces);
					break;
				}
			}
		}
		//省
	//	alert("省"+b);
		var citys;
		for(var i=0;i<prnces.length;i++){
		//	alert(prnces[i].name.name+"="+prnces[i].name.value);
			if(prnces[i].name.value==b){
				if(code.length==4){
					return prnces[i].name.name;
				}else{
					citys=prnces[i].value;
					break;
				}
			}
		}
		//市
		for(var i=0;i<citys.length;i++){
			if(citys[i].value==code){
				return citys[i].name;
			}
		}
	}
})();

