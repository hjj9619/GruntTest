/* 此项目创建于2016/5/12 */

function Ajax(){
  this.ajax;
  if(window.XMLHttpRequest){
  	this.ajax = new XMLHttpRequest();
  }else{
  	this.ajax = new ActiveXObject("Microsoft.XMLHTTP");
  }
}


Ajax.prototype.post = function(url, mess, fn){
  var _this = this;
  _this.ajax.open("post", url, true);
  _this.ajax.setRequestHeader("CONTENT-TYPE", "application/x-www-form-urlencoded");
  _this.ajax.send(mess);
  ajax.onreadystatechange = function(){
    if(_this.ajax.readyState == 4 && _this.ajax.status == 200){
      fn(_this.ajax.responseText);
    }
  }
}
Ajax.prototype.get = function(url, fn){
  var _this = this;
  _this.ajax.open("get", url + "?" + new Date().getTime(), true);
  _this.ajax.send();
  _this.ajax.onreadystatechange = function(){
    if(_this.ajax.readyState == 4 && _this.ajax.status == 200){
      fn(_this.ajax.responseText);
    }
  }
}

















