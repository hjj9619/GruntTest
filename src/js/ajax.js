/* 此项目创建于2016/5/12 */
window.onload = function () {




function ajax(method,url,async, fn){

  //创建一个Ajax对象
  var ajax = new XMLHttpRequest() || ActiveXObject("Microsoft.XMLHTTP");



  //选择方式提交到url,并选择是否异步
  ajax.open(method, url +"?"+ new Date().getTime(), async);

  //提交
  ajax.send();

  //当状态值发生改变的时候
  ajax.onreadystatechange = function(){
    if( ajax.readyState == 4 && ajax.status == 200){
      fn(ajax.responseText);
    }
  }

}

function get(url, fn){
    var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

    ajax.open("get", url +"?"+ new Date().getTime(), true);

    ajax.send();

    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4 && ajax.status == 200){
        fn(ajax.responseText);
      }
    }
}

function post(url, fn){
    var ajax = new XMLHttpRequest(); //|| ActiveXObject("Microsoft.XMLHTTP");


    ajax.open("post", url + "?" + new Date().getTime(), true);

    ajax.send();

    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4 && ajax.status == 200){
        fn(ajax.responseText);
      }
    }
}


}



function Ajax(){
  this.get = function(url, fn){

    var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");

    ajax.open("get", url + "?" + new Date().getTime(), true);

    ajax.send();

    ajax.onreadystatechange = function(){

      if(ajax.readyState == 4 && ajax.status == 200){
        fn(ajax.responseText);
      }
    }
  }


  this.post = function(url, fn){
    var ajax = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
    ajax.open("post", url + "?" + new Date().getTime(), true);
    ajax.send();
    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4 && ajax.status == 200){
        fn(ajax.responseText);
      }
    }
  }
}


var ajax = new Ajax();
document.onclick = function(){
  ajax.post("js/test.txt", function(txt){
    alert(txt);
  });
}















