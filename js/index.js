var dzg = document.querySelector(".topLeftNav>li");
var pullMenu = document.querySelector(".topLeftNav>li>.topLeftPullMenu");
//var fg = 0; //是一种标识,用于设置两种不同的状态
//var fg = false;
//dzg.onclick = function() {
//	if(fg) { //fg==true
//		pullMenu.style.display = "none";
//		fg = false;
//	} else {
//		pullMenu.style.display = "block";
//		fg = true;
//	}
//}
var bd = document.body;
dzg.onclick = function() {
	    this.style.backgroundColor="white";
		pullMenu.style.display = "block";
	}
	//此处是否还更简单的方法
bd.onclick = function(ev) {
	//兼容火狐,ie,google/safria
	var tg = ev.target || ev.srcElement.target || window.event;
	//console.log(tg.className);
	var str = tg.className;
	//此处为不是下拉菜单元素的判断包括下拉的父元素也排除
	if(!/hqy/.test(str)) { //此处为撩妹的资本
		//console.log("hhhhhhhqqqqyyyyy");
		pullMenu.style.display = "none";
		dzg.style.backgroundColor = "#F5F5F5";
	}
}
//以下实现淡入淡出式轮播
var ad = ["img/ad1.jpg","img/ad2.jpg","img/ad3.jpg","img/ad4.jpg"];
var lunbo=document.getElementById("lunbo");
var fgad=-1;
function go(){
	++fgad;
	if(fgad>ad.length-1){
		fgad=0;
	}
	lunbo.style.transition="1s all";
	lunbo.style.background="url("+ad[fgad]+")no-repeat";	
}
//开始轮播
setInterval(go,1000);
