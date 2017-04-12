//类模块，输出一个构造函数
define(function(){

	function C(){

	}
	C.prototype.render = function(param){

			document.write("name:"+param.name+","+"age:"+param.age+","+"sex:"+param.sex+","+"number:"+param.number);
	}
	return C;
});