/**
 * 用来放游戏数据
 * @param  {[type]} define  根据运行环境可能是amd模式下的define函数或者是为匹配cmd模式的一个函数
 * @param  {[type]} require rquirejs提给的一个函数
 * @return {[type]}         最终返回游戏数据，index是序号 con 是对话 tip是提示 words是备选文字 answer是正确答案 url是电影图片
 */
(function(define) {
define(function(require) {
    return [
{'index':'0','con':'fdfdfdfdfdfdfdf','tip':'dfdfdfdfdsfsdf','words':'dfdfdfdf','answer':'fdfdfd','picture':'url'},
{'index':'1','con':'fdfdfdfdfdfdfdf','tip':'dfdfdfdfdsfsdf','words':'dfdfdfdf','answer':'fdfdfd','picture':'url'},
{'index':'2','con':'fdfdfdfdfdfdfdf','tip':'dfdfdfdfdsfsdf','words':'dfdfdfdf','answer':'fdfdfd','picture':'url'},
{'index':'3','con':'fdfdfdfdfdfdfdf','tip':'dfdfdfdfdsfsdf','words':'dfdfdfdf','answer':'fdfdfd','picture':'url'},
{'index':'4','con':'fdfdfdfdfdfdfdf','tip':'dfdfdfdfdsfsdf','words':'dfdfdfdf','answer':'fdfdfd','picture':'url'},
{'index':'5','con':'fdfdfdfdfdfdfdf','tip':'dfdfdfdfdsfsdf','words':'dfdfdfdf','answer':'fdfdfd','picture':'url'},
{'index':'6','con':'fdfdfdfdfdfdfdf','tip':'dfdfdfdfdsfsdf','words':'dfdfdfdf','answer':'fdfdfd','picture':'url'},
{'index':'7','con':'fdfdfdfdfdfdfdf','tip':'dfdfdfdfdsfsdf','words':'dfdfdfdf','answer':'fdfdfd','picture':'url'},
{'index':'8','con':'fdfdfdfdfdfdfdf','tip':'dfdfdfdfdsfsdf','words':'dfdfdfdf','answer':'fdfdfd','picture':'url'},
{'index':'9','con':'fdfdfdfdfdfdfdf','tip':'dfdfdfdfdsfsdf','words':'dfdfdfdf','answer':'fdfdfd','picture':'url'},
];
});
})(
	typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); }
	// Boilerplate for AMD and Node
);