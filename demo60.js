
/*	
	style获取行内css大小
	var box = document.getElementById('box');
	alert(box.style.width);
	alert(box.style.height);

	获取计算后的css大小，如果没有值，非IE会获取默认大小
	var box = document.getElementById('box');
	var style = window.getComputedStyle ? window.getComputedStyle(box,null) : null;
	alert(style.width);
	alert(style.height);

	通过CSSStyleSheet对象中的cssRules属性获取元素大小
	var box = document.getElementById('box');
	var sheet = document.styleSheets[0];
	var rule = (sheet.cssRules || sheet.rules)[0];	
	alert(rule.style.width);
	alert(rule.style.height);

*/




window.onload = function() {
	var box = document.getElementById('box');
	alert(box.clientWidth);
	alert(box.clientHeight);

};
