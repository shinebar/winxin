//这段脚本如果你的页面里有，就可以去掉它们了
//欢迎访问我的网站queyang.com
var ie =navigator.appName=="Microsoft Internet Explorer"?true:false;

<!--记得哦，下面的代码得放在Body标签里，当然，放在页面最后面也可以（不过有可能会出现JS还未加载完毕时用户点击了下面的输入框，这样页面就会出错了。）-->

var controlid = null;
var currdate = null;
var startdate = null;
var enddate = null;
var yy = null;
var mm = null;
var hh = null;
var ii = null;
var currday = null;
var addtime = false;
var today = new Date();
var lastcheckedyear = false;
var lastcheckedmonth = false;
function _cancelBubble(event) {
e = event ? event : window.event ;
if(ie) {
   e.cancelBubble = true;
} else {
   e.stopPropagation();
}
}
function getposition(obj) {
var r = new Array();
r['x'] = obj.offsetLeft;
r['y'] = obj.offsetTop;
while(obj = obj.offsetParent) {
   r['x'] += obj.offsetLeft;
   r['y'] += obj.offsetTop;
}
return r;
}
function loadcalendar() {
s = '';
s += '<div id="calendar" style="display:none; position:absolute; z-index:9;" onclick="_cancelBubble(event)">';
if (ie)
{
   s += '<iframe width="200" height="160" src="about:blank" style="position: absolute;z-index:-1;"></iframe>';
}
s += '<div style="width: 200px;"><table class="tableborder" cellspacing="0" cellpadding="0" width="100%" style="text-align: center">';
s += '<tr align="center"><td class="header"><a href="#" style="color:#08327e;" onclick="refreshcalendar(yy, mm-1);return false" title="上一月"><<</a></td><td colspan="5" style="text-align: center" class="header"><a style="color:#08327e;" href="#" onclick="showdiv(\'year\');_cancelBubble(event);return false" title="点击选择年份" id="year"></a> <span style="color:#08327e;">-</span> <a id="month" style="color:#08327e;" title="点击选择月份" href="#" onclick="showdiv(\'month\');_cancelBubble(event);return false"></a></td><td class="header"><a style="color:#08327e;" href="#" onclick="refreshcalendar(yy, mm+1);return false" title="下一月">>></a></td></tr>';
s += '<tr class="category"><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td> 五</td><td>六</td></tr>';
for(var i = 0; i < 6; i++) {
   s += '<tr class="altbg2">';
   for(var j = 1; j <= 7; j++)
    s += "<td id=d" + (i * 7 + j) + " height=\"19\">0</td>";
   s += "</tr>";
}
/*s += '<tr id="hourminute"><td colspan="7" align="center"><input type="text" size="1" value="" id="hour" onKeyUp=\'this.value=this.value > 23 ? 23 : zerofill(this.value);controlid.value=controlid.value.replace(/\\d+(\:\\d+)/ig, this.value+"$1")\'> 点 <input type="text" size="1" value="" id="minute" onKeyUp=\'this.value=this.value > 59 ? 59 : zerofill(this.value);controlid.value=controlid.value.replace(/(\\d+\:)\\d+/ig, "$1"+this.value)\'> 分</td></tr>';*/
s += '<tr id="hourminute"><td colspan="7" align="center">\
		<select id="hour" onchange="">\
			<option value="0">0</option>\
			<option value="1">1</option>\
			<option value="2">2</option>\
			<option value="3">3</option>\
			<option value="4">4</option>\
			<option value="5">5</option>\
			<option value="6">6</option>\
			<option value="7">7</option>\
			<option value="8">8</option>\
			<option value="9">9</option>\
			<option value="10">10</option>\
			<option value="11">11</option>\
			<option value="12">12</option>\
			<option value="13">13</option>\
			<option value="14">14</option>\
			<option value="15">15</option>\
			<option value="16">16</option>\
			<option value="17">17</option>\
			<option value="18">18</option>\
			<option value="19">19</option>\
			<option value="20">20</option>\
			<option value="21">21</option>\
			<option value="22">22</option>\
			<option value="23">23</option>\
			<option value="24">24</option>\
		</select> 点\
		<select id="minute" onchange="">\
			<option value="00">00</option>\
			<option value="01">01</option>\
			<option value="02">02</option>\
			<option value="03">03</option>\
			<option value="04">04</option>\
			<option value="05">05</option>\
			<option value="06">06</option>\
			<option value="07">07</option>\
			<option value="08">08</option>\
			<option value="09">09</option>\
			<option value="10">10</option>\
			<option value="11">11</option>\
			<option value="12">12</option>\
			<option value="13">13</option>\
			<option value="14">14</option>\
			<option value="15">15</option>\
			<option value="16">16</option>\
			<option value="17">17</option>\
			<option value="18">18</option>\
			<option value="19">19</option>\
			<option value="20">20</option>\
			<option value="21">21</option>\
			<option value="22">22</option>\
			<option value="23">23</option>\
			<option value="24">24</option>\
			<option value="25">25</option>\
			<option value="26">26</option>\
			<option value="27">27</option>\
			<option value="28">28</option>\
			<option value="29">29</option>\
			<option value="30">30</option>\
			<option value="31">31</option>\
			<option value="32">32</option>\
			<option value="33">33</option>\
			<option value="34">34</option>\
			<option value="35">35</option>\
			<option value="36">36</option>\
			<option value="37">37</option>\
			<option value="38">38</option>\
			<option value="39">39</option>\
			<option value="40">40</option>\
			<option value="41">41</option>\
			<option value="42">42</option>\
			<option value="43">43</option>\
			<option value="44">44</option>\
			<option value="45">45</option>\
			<option value="46">46</option>\
			<option value="47">47</option>\
			<option value="48">48</option>\
			<option value="49">49</option>\
			<option value="50">50</option>\
			<option value="51">51</option>\
			<option value="52">52</option>\
			<option value="53">53</option>\
			<option value="54">54</option>\
			<option value="55">55</option>\
			<option value="56">56</option>\
			<option value="57">57</option>\
			<option value="58">58</option>\
			<option value="59">59</option>\
		</select> 分\
	  </td></tr>\
	 ';
s += '</table></div></div>';
s += '<div id="calendar_year" onclick="_cancelBubble(event)"><div class="col">';
for(var k = 1930; k <= 2019; k++) {
   s += k != 1930 && k % 10 == 0 ? '</div><div class="col">' : '';
   s += '<a class="showTime" href="#" onclick="refreshcalendar(' + k + ', mm);document.getElementById(\'calendar_year\').style.display=\'none\';return false"><span' + (today.getFullYear() == k ? ' class="today"' : '') + ' id="calendar_year_' + k + '">' + k + '</span></a><br />';
}
s += '</div></div>';
s += '<div id="calendar_month" onclick="_cancelBubble(event)">';
for(var k = 1; k <= 12; k++) {
   s += '<a class="showTime" href="#" onclick="refreshcalendar(yy, ' + (k - 1) + ');document.getElementById(\'calendar_month\').style.display=\'none\';return false"><span' + (today.getMonth()+1 == k ? ' class="today"' : '') + ' id="calendar_month_' + k + '">' + k + ( k < 10 ? ' ' : '') + ' 月</span></a><br />';
}
s += '</div>';
var nElement = document.createElement("div");
nElement.innerHTML=s;
document.getElementsByTagName("body")[0].appendChild(nElement);
// document.write(s);
document.onclick = function(event) {
   document.getElementById('calendar').style.display = 'none';
   document.getElementById('calendar_year').style.display = 'none';
   document.getElementById('calendar_month').style.display = 'none';
}
document.getElementById('calendar').onclick = function(event) {
   _cancelBubble(event);
   document.getElementById('calendar_year').style.display = 'none';
   document.getElementById('calendar_month').style.display = 'none';
}
}
function parsedate(s) {
	
/(\d+)\-(\d+)\-(\d+)\s*(\d*):?(\d*)/.exec(s);
var m1 = (RegExp.$1 && RegExp.$1 > 1899 && RegExp.$1 < 2101) ? parseFloat(RegExp.$1) : today.getFullYear();
var m2 = (RegExp.$2 && (RegExp.$2 > 0 && RegExp.$2 < 13)) ? parseFloat(RegExp.$2) : today.getMonth() + 1;
var m3 = (RegExp.$3 && (RegExp.$3 > 0 && RegExp.$3 < 32)) ? parseFloat(RegExp.$3) : today.getDate();
var m4 = (RegExp.$4 && (RegExp.$4 > -1 && RegExp.$4 < 24)) ? parseFloat(RegExp.$4) : 0;
var m5 = (RegExp.$5 && (RegExp.$5 > -1 && RegExp.$5 < 60)) ? parseFloat(RegExp.$5) : 0;
/(\d+)\-(\d+)\-(\d+)\s*(\d*):?(\d*)/.exec("0000-00-00 00\:00");
return new Date(m1, m2 - 1, m3, m4, m5);
}
function settime(d) {
	//alert(d)
document.getElementById('calendar').style.display = 'none';
document.getElementById(controlid).value = yy + "-" + (zerofill(mm + 1) > 9 ? zerofill(mm + 1) : '0' + zerofill(mm + 1)) + "-" + (zerofill(d) > 9 ? zerofill(d) : '0' + zerofill(d)) + (addtime ? ' ' + zerofill($('hour').value) + ':' + zerofill(document.getElementById('minute').value) : '');
}
function showcalendar(event, controlid1, addtime1, startdate1, enddate1) {
	
	controlid = controlid1;
	addtime = addtime1;
	startdate = startdate1 ? parsedate(startdate1) : false;
	enddate = enddate1 ? parsedate(enddate1) : false;
	currday = $F(controlid) ? parsedate($F(controlid)) : today;
	
	hh = currday.getHours();
	ii = currday.getMinutes();
	var p = getposition($(controlid));
	document.getElementById('calendar').style.display = 'block';
	document.getElementById('calendar').style.left = p['x']+'px';
	document.getElementById('calendar').style.top = (p['y'] + 19)+'px';
	_cancelBubble(event);
	refreshcalendar(currday.getFullYear(), currday.getMonth());
	if(lastcheckedyear != false) {
	   document.getElementById('calendar_year_' + lastcheckedyear).className = 'default';
	   document.getElementById('calendar_year_' + today.getFullYear()).className = 'today';
	}
	if(lastcheckedmonth != false) {
	   document.getElementById('calendar_month_' + lastcheckedmonth).className = 'default';
	   document.getElementById('calendar_month_' + (today.getMonth() + 1)).className = 'today';
	}
	document.getElementById('calendar_year_' + currday.getFullYear()).className = 'checked';
	document.getElementById('calendar_month_' + (currday.getMonth() + 1)).className = 'checked';
	document.getElementById('hourminute').style.display = addtime ? '' : 'none';
	lastcheckedyear = currday.getFullYear();
	lastcheckedmonth = currday.getMonth() + 1;
}
function refreshcalendar(y, m) {
	
var x = new Date(y, m, 1);
var mv = x.getDay();
var d = x.getDate();
var dd = null;
yy = x.getFullYear();
mm = x.getMonth();
document.getElementById("year").innerHTML = yy;
document.getElementById("month").innerHTML = mm + 1 > 9 ? (mm + 1) : '0' + (mm + 1);
for(var i = 1; i <= mv; i++) {
   dd = document.getElementById("d" + i);
   dd.innerHTML = " ";
   dd.className = "";
}

while(x.getMonth() == mm) {
   dd = document.getElementById("d" + (d + mv));
   dd.innerHTML = '<a href="###" onclick="settime(' + d + ');return false">' + d + '</a>';

   if(x.getTime() < today.getTime() || (enddate && x.getTime() > enddate.getTime()) || (startdate && x.getTime() < startdate.getTime())) {
    dd.className = 'expire';
   } else {
    dd.className = 'default';
   }
   if(x.getFullYear() == today.getFullYear() && x.getMonth() == today.getMonth() && x.getDate() == today.getDate()) {
    dd.className = 'today';
    dd.firstChild.title = '今天';
   }
   if(x.getFullYear() == currday.getFullYear() && x.getMonth() == currday.getMonth() && x.getDate() == currday.getDate()) {
    dd.className = 'checked';
   }
   x.setDate(++d);
}
while(d + mv <= 42) {
   dd = document.getElementById("d" + (d + mv));
   dd.innerHTML = " ";
   d++;
}
if(addtime) {
   $('hour').value = zerofill(hh);
   document.getElementById('minute').value = zerofill(ii);
}
}
function showdiv(id) {
var p = getposition(document.getElementById(id));
document.getElementById('calendar_' + id).style.left = p['x']+'px';
document.getElementById('calendar_' + id).style.top = (p['y'] + 16)+'px';
document.getElementById('calendar_' + id).style.display = 'block';
}
function zerofill(s) {
var s = parseFloat(s.toString().replace(/(^[\s0]+)|(\s+$)/g, ''));
s = isNaN(s) ? 0 : s;
return s;
//return (s < 10 ? '0' : '') + s.toString();
}
