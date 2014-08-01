<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<meta name="description" content="">
<meta name="keywords" content="">
<style type="text/css">
body{
  margin:0px;
  padding:0px;
  text-align:center;
}
 .nav{
      width:100%;
      height:40px;
      border:none;
      background-color:#ddFFDD;
      text-align:center;
      padding-left: 15%;
      }
 .nav ul{
    text-align:center;
    margin: 0px; 
    padding: 0px; 
    width: auto;
    list-style:none;
 }
 .nav ul li{
      float:left;
      
      }
 .nav ul li a{
    background-color: #465c71; 
    border: 1px #4e667d solid;
    color: #dde4ec; 
    display: block; 
    line-height: 1.35em; 
    padding: 8px 50px; 
    text-decoration: none; 
    white-space: nowrap;
 }
.mid{
  height:auto;
  width:auto;
}
.left{
    display: block; 
    line-height: 1.35em; 
    float:left;
    margin-left:15%;
}
.leftTitle{
    background-color: silver; 
    border: 1px #4e667d solid;
    color: #FFFFFB; 
    display: block; 
    line-height: 1.35em; 
    padding: 8px 50px; 
    text-decoration: none; 
    white-space: nowrap;

}
.right{
    border: 1px #4e667d solid;
    color: #FFFFFB; 
    display: block; 
    line-height: 1.35em; 
    padding: 8px 50px; 
    text-decoration: none; 
    white-space: nowrap;
    width:400px;
}
</style>
</head>
<body>
    <div class="nav"><#--nav begin-->
    <ul>
         <#list pageModel.model as xx>
                <li>
                   <a href="javascript:void(0)">${xx}</a>
                </li>
         </#list>
     </ul>
    </div><#--nav end-->
    <div style="float:clear;"></div>
    <div class="mid"><#--middle begin-->
      
      <div class="left"><#--left begin-->
         <div class="leftTitle">相关内容</div>
          <div></div>
      </div><#--left end-->
      
      <div class="right"><#--right begin-->
          <img src="/FMR/images/bdlogo.gif"/>
      </div><#--right end-->
      
    </div><#--middle end-->
    
    
    <div style="float:clear;"></div>
    <div style="text-align:center;"><#--foot begin-->
    <#include "copyrigth_footer.html">
    </div><#--foot end-->
</body>
</html>
