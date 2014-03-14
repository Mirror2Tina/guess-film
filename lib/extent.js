window.MT={};
window.MT.extent=function  (target,source,flag) {
	source = source||{};
	for (var key in source) {
		if(!flag){
			target[key]=source[key];
		}else if(!target.hasOwnProperty(key)){
			target[key]=source[key];
		}
	};
}