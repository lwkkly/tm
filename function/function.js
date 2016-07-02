// 创建函数
// 类名查找对象
function getclass(classname,obj){
// 不输入第二个参数的默认值
	var obj=obj||document;
	// 如果可以获取类名直接输出
	if (obj.getElementsByClassName){
		return obj.getElementsByClassName(classname)
	}
	
	else{
		// 定义一个空数组
		var arr=[]
		// 获取全部标签
		var alls=document.getElementsByTagName("*")
		// 循环判断
		for(var i=0;i<alls.length;i++){
			if (checkclass(alls[i].className,classname)) {
				arr.push(alls[i])
			}
		}
	    return arr
	}	
}
// window.onload=function(){
// 	console.log(getclass("one")[0])
// }
function checkclass(a,b){
	var brr=a.split(" ")
	for(var i=0;i<brr.length;i++){
		if(brr[i]==b){
			return true
		}
	}
	return false
}




// 输入替代  不输入查找
function getInner(obj,value){
	// 现代浏览器
	if(obj.textContent){
		// 判断是否输入
		if(value==undefined){
			return obj.textContent
		}else{
			obj.textContent=value;
			return obj.textContent;
		}
	}
	// ie浏览器
	if(obj.innerText){
		// 是否输入
		if(value==undefined){
			return obj.innerText
		}else{
			obj.innerText=value;
			return obj.innerText;
		}
	}
}
// 块元素 行内块元素的属性
function getStyle(obj,style){
	// 判断是否是ie
	if(obj.currentStyle){
		return obj.currentStyle[style]
	}
	// 现代浏览器
	else{
		return getComputedStyle(obj,null)[style]
	}
}





// 封装$函数
function $(search,obj){
// 默认值
	obj=obj||document
	if(typeof(search)=="string"){
			// 判断ID
		if(search.charAt(0)=="#"){
			// 返回值
			return document.getElementById(search.substr(1))
		}
		// 判断类名
		else if(search.charAt(0)=="."){
			return getclass(search.substr(1),obj)
		}
		else{
			return obj.getElementsByTagName(search)
		}
	}else if(typeof(search)=="function"){
		window.onload=function(){
			search()
		}
	}
	
	
}


// 获取子节点
// 获取元素节点
// 获取元素节点和文本节点
// type “a”只要元素节点“b”只要元素和文本
// /^\s*|\s*$/g   正则
function getChilds(obj,type){
	var type=type||"a"
	var alls=(obj.childNodes)
	var arr=[]
	for(var i=0;i<alls.length;i++){
		if(type=="a"){
			if(alls[i].nodeType==1){
				arr.push(alls[i])
			}	
		}		
		else if(type=="b"){
			if(alls[i].nodeType==1||(alls[i].nodeType==3&&alls[i].nodeValue.replace(/^\s*|\s*$/g,""))){
				arr.push(alls[i])
			}
		}
    }	
    return arr
}

	// window.onload=function(){
	// 	var ww=$(".ww")[0]
	// 	console.log(getChilds(ww,"b")[1].nodeName)
	// }


// 获取第一个节点
function getFirst(obj){
	return getChilds(obj)[0]
}
// 获取最后一个节点
function getLast(obj){
	return getChilds(obj)[getChilds(obj).length-1]
}

// 获取下一个元素节点
// 遇到文字节点或注释节点跳过
function getNext(obj,type){
   var next=obj.nextSibling;/*定义变量获取下一个节点*/
   var type=type||"a";/*通过开关思想控制他走什么函数，
   当不传值的时候默认走a路线*/
  if(next.nodeType==null){/*如果next的节点值为null，则返回null*/
    return false;
  }
    if(type=="a"){
      while(next.nodeType==3||next.nodeType==8){/*如果next的类型为三或者为8
       的时候将next的下一个节点给他本身 */
      next=next.nextSibling;
        if(next.nodeType==null){/*如果next的类型为null,则返回false*/
          return false;
        }
      }
  }else if(type=="b"){/*如果传入的值是b，则走这里面的函数*/
      while((next.nodeType==3&&!next.nodeValue.replace(/^\s*|\s*$/g,""))||next.nodeType==8){
        next=next.nextSibling;
          if(next.nodeType==null){
            return false;
          }
      }
  }
  
  return next
}


// 	window.onload=function(){
// 	var q=$(".qq")[0]
// 	console.log(getNext(q));
// }
	




// 获取上一个元素节点
// 遇到文字节点或注释节点跳过
function getPrevious(obj){
	var previous=obj.previousSibling
	if(previous==null){
       	return false
	}
	while(previous.nodeType==3||previous.nodeType==8){
		previous=previous.previousSibling
		if(previous==null){
			return false
		}
	}
	return previous
}


	// window.onload=function(){
	// 	var yi=$("#son")
	// 	console.log(getPrevious(yi))
	// }


// 把一个节点 放到某个节点之前

function insertBefore(obj,before){
	var parent=before.parentNode;
	parent.insertBefore(obj,before)
}

// 把一个节点 放到某个节点之后
function insertAfter(obj,after){
	// 获取父节点
	var parent=after.parentNode
	var next=getNext(after,"b")
	if(next){
		insertBefore(obj,next)
	}else{
		parent.appendChild(obj)
	}

}

// window.onload=function(){
// 	var q=$(".qq")[0]
// 	var e=$(".e")[0]
// 	console.log(insertAfter(e,q))
// }


// 添加一个事件
function addEvent(obj,events,fun){
	if(obj.attachEvent){
		return obj.attachEvent("on"+events,move)
	}else{
		return obj.addEventListener(events,fun,false)
	}
}


// 删除一个事件
function removeEvent(obj,events,fun){
	if(obj.detachEvent){
		return obj.detachEvent("on"+events,fun)
	}else{
		return obj.removeEventListener(events,fun,false)
	}
}


// var box=$(".box")[0]
// 		var aa=function(){
// 			alert(1)
// 		}
// 		var bb=function(){
// 			alert(2)
// 		}
// 		box.onclick=function(){
// 			addEvent(box,"click",aa)
// 			addEvent(box,"click",bb)
// 			removeEvent(box,"click",aa)
// 		}



// 滚轮兼容性
// 滚轮事件
function mouseWheel(obj,funUp,funDown){
	if(obj.attachEvent){
		obj.attachEvent("onmousewheel",scroll)
	}
	else if(obj.addEventListener){
		obj.addEventListener("DOMMouseScroll",scroll,false)
		obj.addEventListener("mousewheel",scroll,false)
	}
	function scroll(e){
		var ev=e||window.event
		var d=ev.wheelDelta||ev.detail
		if(d==120||d==-3){
			if(funUp){
				funUp()
			}
		}else if(d==-120||d==3){
			if(funDown){
				funDown()
			}
		}
	}
}

// 双下标轮播图
function shuangxiabiao(box,tu,yuan,zuo,you){
			var h=box.offsetWidth
			var n=0
			var next=0
			var flag=true
			var t=setInterval(move,1500)
			box.onmouseover=function(){
				clearInterval(t)
			}
			box.onmouseout=function(){
				t=setInterval(move,1500)
			}
			zuo.onclick=function(){
				move1()
			}
			you.onclick=function(){
				move()
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
					yuan[i].style.background="black"
				}
				yuan[next].style.background="red"
				tu[n].style.left=0
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
					yuan[i].style.background="black"
				}
				yuan[next].style.background="red"
				tu[n].style.left=0
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
							yuan[i].style.background="black"
						}
						yuan[this.index].style.background="red"
						tu[n].style.left=0
						tu[this.index].style.left=-h+"px"
						animate(tu[n],{left:h},500)
						animate(tu[this.index],{left:0},500)
						n=this.index
					}
					else if(this.index>n){
						for(var i=0;i<yuan.length;i++){
							yuan[i].style.background="black"
						}
						yuan[this.index].style.background="red"
						tu[n].style.left=0
						tu[this.index].style.left=h+"px"
						animate(tu[n],{left:-h},500)
						animate(tu[this.index],{left:0},500)
						n=this.index
					}
					
				}
			}
}