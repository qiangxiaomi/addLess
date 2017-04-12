//方法模块，输出一个function
define(function(require){

	return function deal(data){

		var result = JSON.parse(JSON.stringify(data));
		result.name = "yangmimimi$minminmin";
		return result;
	}
	
});
