$(function(){
weixin()
shoujiyintai()
wodedingdan()
gouwudai()
banner()
for(var i=0;i<10;i++){
bannerx(i)
}
bannerxia()
for(var i=0;i<12;i++){
	tubk(i)
}
for(var i=0;i<8;i++){
	baihuobk(i)
}
baihuo()
for(var i=0;i<9;i++){
	banner1(i)
}
for(var i=0;i<6;i++){
	banner2(i)
}
for(var i=0;i<36;i++){
	loucengbk(i)
}
loucen()
function weixin(){
		var yin=$(".weixin-yinshang")[0]
		var y=$(".weixin-yin")[0]
		var d=$(".weixin")[0]
		addEvent(d,"mouseover",function(){yin.style.display="block"})
		addEvent(d,"mouseover",function(){y.style.display="block"})
		addEvent(d,"mouseout",function(){y.style.display="none"})
		addEvent(d,"mouseout",function(){yin.style.display="none"})			
}
function shoujiyintai(){
		var y=$(".shoujiyintai-yin")[0]
		var d=$(".shoujiyintai")[0]
		addEvent(d,"mouseover",function(){y.style.display="block"})
		addEvent(d,"mouseout",function(){y.style.display="none"})			
}	
function wodedingdan(){
		var y=$(".wodedingdan-yin")[0]
		var d=$(".wodedingdan")[0]
		addEvent(d,"mouseover",function(){y.style.display="block"})
		addEvent(d,"mouseout",function(){y.style.display="none"})		
}	
function gouwudai(){
		var y=$(".gouwudai-yin")[0]
		var d=$(".gouwudai")[0]
		addEvent(d,"mouseover",function(){y.style.display="block"})
		addEvent(d,"mouseout",function(){y.style.display="none"})		
}


// 轮播
function banner(){
	var box=$(".banner")[0]
	var tu=$(".banner-k")
	var yuan=$(".tiao-t")
	var zuo=$(".banner-zuo")[0]
	var you=$(".banner-you")[0]
	var h=box.offsetWidth
	var n=0
	var next=0
	var flag=true
	var t=setInterval(move,1000)
	box.onmouseover=function(){
		clearInterval(t)
	}
	box.onmouseout=function(){
		t=setInterval(move,1000)
	}
	zuo.onclick=function(){
		move()
	}
	you.onclick=function(){
		move1()
	}
		function move(){
			if(!flag){
				return
			}
			flag=false
			next=n+1
			if(next>=tu.length){
				next=0
			}
			for(var i=0;i<yuan.length;i++){
				yuan[i].style.background="gray"
			}
			yuan[next].style.background="red"
			tu[next].style.opacity=0
			tu[next].style.left=0
			animate(tu[n],{opacity:0},500)
			animate(tu[next],{opacity:1},500,function(){
				flag=true
			})
			n=next
		}
		function move1(){
			if(!flag){
				return
			}
			flag=false
			next=n-1
			if(next<0){
				next=tu.length-1
			}
			for(var i=0;i<yuan.length;i++){
				yuan[i].style.background="gray"
			}
			yuan[next].style.background="red"
			tu[next].style.opacity=0
			tu[next].style.left=0
			animate(tu[n],{opacity:0},500)
			animate(tu[next],{opacity:1},500,function(){
				flag=true
			})
			n=next
		}
		for(var i=0;i<yuan.length;i++){
			yuan[i].index=i
			yuan[i].onclick=function(){
				if(this.index<n){
					for(var i=0;i<yuan.length;i++){
						yuan[i].style.background="gray"
					}
					yuan[this.index].style.background="red"
					tu[this.index].style.left=0
					tu[this.index].style.opacity=0
					animate(tu[n],{opacity:0},500)
					animate(tu[this.index],{opacity:1},500)
					n=this.index
				}
				else if(this.index>n){
					for(var i=0;i<yuan.length;i++){
						yuan[i].style.background="gray"
					}
					yuan[this.index].style.background="red"
					tu[this.index].style.left=0
					tu[this.index].style.opacity=0
					animate(tu[n],{opacity:0},500)
					animate(tu[this.index],{opacity:1},500)
					n=this.index
				}
						
			}
		}
}
function bannerx(n){
		var y=$(".banner-xk-yin")[n]
		var d=$(".banner-xk-zi")[n]
		addEvent(d,"mouseover",function(){y.style.display="block"})
		addEvent(d,"mouseout",function(){y.style.display="none"})		
}
function bannerxia(){
		var y=$(".bx-zi-xia")
		var d=$(".bx-zi")
		for(var i=0;i<d.length;i++){
			d[i].index=i
			d[i].onmouseover=function(){
					for(var i=0;i<d.length;i++){
						d[i].style.borderBottom="0"
						y[i].style.display="none"
					}
					d[this.index].style.borderBottom="4px solid red"
					y[this.index].style.display="block"
				}
		}
}
function tubk(n){
	var k=$(".bx-zi-xia-k")[n]
	var yi=$(".bk-1")[n]
	var er=$(".bk-2")[n]
	var san=$(".bk-3")[n]
	var si=$(".bk-4")[n]
	k.onmouseover=function(){
		animate(yi,{width:222},500)
		animate(er,{height:262},500)
		animate(san,{width:221},500)
		animate(si,{height:261},500)
	}
	k.onmouseout=function(){
		animate(yi,{width:1},500)
		animate(er,{height:1},500)
		animate(san,{width:1},500)
		animate(si,{height:1},500)
	}
}
function baihuobk(n){
	var k=$(".baihuo-ks-you-zi-yin-er-k")[n]
	var yi=$(".bk-11")[n]
	var er=$(".bk-22")[n]
	var san=$(".bk-33")[n]
	var si=$(".bk-44")[n]
	k.onmouseover=function(){
		animate(yi,{width:200},500)
		animate(er,{height:250},500)
		animate(san,{width:199},500)
		animate(si,{height:249},500)
	}
	k.onmouseout=function(){
		animate(yi,{width:1},500)
		animate(er,{height:1},500)
		animate(san,{width:1},500)
		animate(si,{height:1},500)
	}
}
function baihuo(){
		var y=$(".baihuo-ks-you-zi-yin")
		var d=$(".baihuo-ks-you-zi")
		for(var i=0;i<d.length;i++){
			d[i].index=i
			d[i].onmouseover=function(){
					for(var i=0;i<d.length;i++){
						d[i].style.borderBottom="0"
						y[i].style.display="none"
					}
					d[this.index].style.borderBottom="3px solid red"
					y[this.index].style.display="block"
				}
		}
}
function banner1(n){
	var box=$(".shisk-zuo-xia-lun")[n]
	var tu=$(".shisk-zuo-xia-lun-k",box)
	var zuo=$(".shisk-zuo-xia-lun-z")[n]
	var you=$(".shisk-zuo-xia-lun-y")[n]
	var n=0
	var next=0
	zuo.onclick=function(){
		move()
	}
	you.onclick=function(){
		move1()
	}
		function move(){
			next=n+1
			if(next>=tu.length){
				next=0
			}
			tu[next].style.left=170+"px"
			animate(tu[n],{left:-170},1000)
			animate(tu[next],{left:0},1000)
			n=next
		}
		function move1(){
			next=n-1
			if(next<0){
				next=tu.length-1;
			}
			tu[next].style.left=-170+"px"
			animate(tu[n],{left:170},1000)
			animate(tu[next],{left:0},1000)
			n=next
		}
}

// 时尚名品中间
function banner2(n){
	var box=$(".shisk-zhong")[n]
	var tu=$(".shisk-zhong-tu",box)
	var yuan=$(".shisk-zhong-yuan",box)
	var zuo=$(".shisk-zhong-zuo")[n]
	var you=$(".shisk-zhong-you")[n]
	var h=box.offsetWidth
	var n=0
	var next=0
	var flag=true
	box.onmouseover=function(){
	}
	box.onmouseout=function(){
	}
	zuo.onclick=function(){
		move()
	}
	you.onclick=function(){
		move1()
	}
		function move(){
			if(!flag){
				return
			}
			flag=false
			next=n+1
			if(next>=tu.length){
				next=0
			}
			for(var i=0;i<yuan.length;i++){
				yuan[i].style.background="gray"
			}
			yuan[next].style.background="red"
			tu[next].style.left=h+"px"
			animate(tu[n],{left:-h},500)
			animate(tu[next],{left:0},500,function(){
				flag=true
			})
			n=next
		}
		function move1(){
			if(!flag){
				return
			}
			flag=false
			next=n-1
			if(next<0){
				next=tu.length-1
			}
			for(var i=0;i<yuan.length;i++){
				yuan[i].style.background="gray"
			}
			yuan[next].style.background="red"
			tu[next].style.left=-h+"px"
			animate(tu[n],{left:h},500)
			animate(tu[next],{left:0},500,function(){
				flag=true
			})
			n=next
		}
		for(var i=0;i<yuan.length;i++){
			yuan[i].index=i
			yuan[i].onclick=function(){
				if(this.index<n){
					for(var i=0;i<yuan.length;i++){
						yuan[i].style.background="gray"
					}
					yuan[this.index].style.background="red"
					tu[this.index].style.left=-h+"px"
					animate(tu[n],{left:h},500)
					animate(tu[this.index],{left:0},500)
					n=this.index
				}
				else if(this.index>n){
					for(var i=0;i<yuan.length;i++){
						yuan[i].style.background="gray"
					}
					yuan[this.index].style.background="red"
					tu[this.index].style.left=h+"px"
					animate(tu[n],{left:-h},500)
					animate(tu[this.index],{left:0},500)
					n=this.index
				}
						
			}
		}
}
function loucengbk(n){
	var k=$(".shisk-you")[n]
	var yi=$(".bk-111")[n]
	var er=$(".bk-222")[n]
	var san=$(".bk-333")[n]
	var si=$(".bk-444")[n]
	k.onmouseover=function(){
		animate(yi,{width:272},500)
		animate(er,{height:182},500)
		animate(san,{width:271},500)
		animate(si,{height:181},500)
	}
	k.onmouseout=function(){
		animate(yi,{width:1},500)
		animate(er,{height:1},500)
		animate(san,{width:1},500)
		animate(si,{height:1},500)
	}
}
function loucen(){
	var box=$(".shist")
	var shu=$(".gundongtiao")[0]
	var k=$(".gundong-shu")
	var flag3=true
	var shuzu=[
	{a1:"时尚名品"},
	{a1:"潮流女装"},
	{a1:"精品男装"},
	{a1:"时尚鞋靴"},
	{a1:"潮流箱包"},
	{a1:"美容护肤"},
	{a1:"运动户外"},
	{a1:"内衣配饰"},
	{a1:"婴童家居"},
	{a1:"返回顶部"},
	]
	var width=document.documentElement.clientWidth
	var height=document.documentElement.clientHeight
	var shuk=shu.offsetHeight
	shu.style.top=(height-shuk)/2+"px"
	console.log(shu.style.top)
	for(var i=0;i<k.length;i++){
		k[i].index=i
		k[i].onclick=function(){
			flag3=false
			for(var i=0;i<k.length;i++){
				k[i].style.background="transparent"
				k[i].innerHTML=""
			}
			k[this.index].style.background="#e5004f"
			k[this.index].innerHTML=shuzu[this.index]["a1"]
			if(this.index==9){
				// 不同浏览器获取滚动条
				var obj=document.documentElement.scrollTop?document.documentElement:document.body
				// 获取滚动条的高度
				animate(obj,{scrollTop:100},300,function(){
				flag3=true
			})
			}else{
				// 不同浏览器获取滚动条
				var obj=document.documentElement.scrollTop?document.documentElement:document.body
				// 获取滚动条的高度
				var top=box[this.index].offsetTop
				// 滚动条动画
				animate(obj,{scrollTop:top-100},300,function(){
					flag3=true
				})
			}
			
		}
	}
	// 滚动时间
	window.onscroll=function(){
		if(!flag3){
			return 0
		}
		var flag=true;
		var flag1=true;
		// 不同浏览器获取滚动条
		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		
		for(var i=0;i<box.length;i++){
			// 循环所有元素归0
			if(obj.scrollTop>box[i].offsetTop-height+100){
				for(var j=0;j<k.length;j++){
				     k[j].style.background="transparent";
				     k[j].innerHTML=""
			    }
			    // 当前变为灰色
		    k[i].style.background="#e5004f"
		    k[i].innerHTML=shuzu[i]["a1"]
		    }
		} 
		// 判断滚动条的高度
		if(obj.scrollTop>box[0].offsetTop-height+100){
			if(flag){
			flag=false;
			// 滚动条出现
				animate(shu,{opacity:1},500,function(){
					flag1=true;
				})
			}
		
		}else{
			if(flag1){
				flag1=false;
				// 滚动条消失
				animate(shu,{opacity:0},500,function(){
					flag=true
				})
			}
		}
		
	}
}
})