/**
 * commonJS
 * about class,share, moregame .etc
 */

	function hasClass(obj, cls) {
	    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	}
	function addClass(obj, cls) {
	    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
	}
	function removeClass(obj, cls) {
	    if (hasClass(obj, cls)) {
	        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
	        obj.className = obj.className.replace(reg, ' ');
	    }
	}	  
    function aboutus(){
        location.href = ""
    }    
    function random(min,max){
        return Math.floor(min+Math.random()*(max-min));
    } 
    
	function moregame( type, id ){
		_czc.push(["_trackEvent","more_games",'click',type, id]);
	   // location.href = "http://wetest.weyouquan.com/wxapi.php/list/index/from/tl";
		location.href="www.beiniu2345.com/jsapi.php";
	}

    var $post=function(url,parameters,loadingMessage,functionName){
        var request=new XMLHttpRequest();
        var method="POST";
        if(parameters==""){method="GET";parameters=null;}
        request.open(method,url,true);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.onreadystatechange=function(){
    	 if(request.readyState==4){

    	     if(request.status==200){
    		    if(functionName){
    		       try{  
    			      var json = eval("("+ request.responseText+")");
    			      eval(functionName+"(json)");
                    }catch(e){}
    		    }
    	     }
    	 }
        };
        request.send(parameters);
    };
    
    function preLoadImg(url) {
    	 var img = new Image();
    	 img.src = url;
    }
