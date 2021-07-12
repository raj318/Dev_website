var index = 0;
indexes = {
	0:"about",
	1:"blog",
	2:"resume",
	3:"contact"
}
function resume() {
	//document.getElementById("resume").style.color = "#808080";
	if (index !=2){
		setWhite(index);
		setGray(index);
		index = 2;
	}
	move(index);
	//window.scroll({top: (index-1)*940, left: 0, behavior: 'smooth'});
	//temp();
}

function blog() {
	//document.getElementById("blog").style.color = "#808080";
	if (index != 1){
		setWhite(index);
		setGray(index);
		index = 1;
	}
	move(index);
	//window.scroll({top: (index-1)*930, left: 0, behavior: 'smooth'});
	//temp();
}

function contact(){
	//document.getElementById("contact").style.color = "#808080";
	if (index != 3){
		setWhite(index);
		setGray(index);
		index = 3;
		
	}
	move(index);
	//window.scroll({top: (index-1)*940, left: 0, behavior: 'smooth'});
	//temp();
}

function init(){
	//document.getElementById("about").style.color = "#808080";
	index = 0;
	setGray(index);
	move(0);
	//window.scroll({top: 0, left: 0, behavior: 'smooth'});
	
}

function setGray(index){
	document.getElementById(indexes[index]).style.color = "#808080";
}

function move(index){
	window.scroll({top: index*940, left: 0, behavior: 'smooth'})
}

function temp(){
	document.getElementById("contactc").innerHTML = document.body.scrollTop + document.documentElement.scrollTop;
}

function about() {
	if (index !=0){
		setWhite(index);
		index = 0;
		init();
	}
	move(index);
}

function scrollEffect(){
	var spix = document.body.scrollTop + document.documentElement.scrollTop;
	if (spix < 850){
		setWhite(index);
		index = 0;
		setGray(index);
	}else if (spix< 1800){
		setWhite(index);
		index = 1;
		setGray(index);
	}else if (spix < 2800){
		setWhite(index);
		index = 2;
		setGray(index);
	}else {
		setWhite(index);
		index = 3;
		setGray(index);
	}
}

function setBlue(self){
	self.style.color = "#808080";
}

function setWhite(index){
	document.getElementById(indexes[index]).style.color = "#FFFFFF";
}

function unsetBlue(self){
	if (indexes[index] !== self.id){
		self.style.color= "#FFFFFF";
	}
}
