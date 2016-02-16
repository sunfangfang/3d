window.onload=function(){
	
	var els=document.getElementsByClassName('face');
	var data=[
		{translateX:'-860px',translateZ:'-1200px'},
		{translateX:'-400px',translateZ:'-600px'},
		{translateX:'0px',translateZ:'0px'},
		{translateX:'400px',translateZ:'-600px'},
		{translateX:'860px',translateZ:'-1200px'}
	];
	var color=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'];
	draw=function(){
		for(var i=0;i<els.length;i++){
			els[i].style.background='url(./images/'+color[i]+')';
			els[i].style.webkitTransform='translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
		}
		data.unshift(data.pop());
	};
	setInterval(draw,1500);


};