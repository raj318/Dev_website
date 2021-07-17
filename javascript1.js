var index = 0;
var lastScrollTop = 0;
var pos = -4000;

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
}

function blog() {
	//document.getElementById("blog").style.color = "#808080";
	if (index != 1){
		setWhite(index);
		setGray(index);
		index = 1;
	}
	move(index);
}

function contact(){
	//document.getElementById("contact").style.color = "#808080";
	if (index != 3){
		setWhite(index);
		setGray(index);
		index = 3;
	}
	move(index);
}
function init(){
	//document.getElementById("about").style.color = "#808080";
	index = 0;
	setGray(index);
	move(0);
	const canvas = document.querySelector("#canvas");
	if(!canvas.getContext){
		return;
	}
	var img = document.getElementById("tmoon");
	let ctx = canvas.getContext('2d');
	var st = window.pageYOffset || document.documentElement.scrollTop;
	var temp = (pos+st)/20;
	ctx.drawImage(img, 0, temp, 800, 515);
	
}

function setGray(index){
	document.getElementById(indexes[index]).style.color = "#808080";
}

function move(index){
	window.scroll({top: index*940, left: 0, behavior: 'smooth'})
	
	//const canvas = document.querySelector("#canvas");
	//let ctx = canvas.getContext('2d');
	//ctx.clearRect(0, 0, 1000, 1000);
	//var img = document.getElementById("tmoon");
	//ctx.drawImage(img, 0, -1*index*10, 300, 200);
}

var lastScrollTop = 0;
var pos = -7000;

window.addEventListener("scroll", function(){
	var spix = document.body.scrollTop + document.documentElement.scrollTop;
	const speed=1;
	var st = window.pageYOffset || document.documentElement.scrollTop;
	const canvas = document.querySelector("#canvas");
	let ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 1000, 1000);
	var img = document.getElementById("tmoon");
	console.log(st, lastScrollTop);
	temp = (pos+st)/20;
    ctx.drawImage(img, 0, temp, 800, 515);
	console.log("Down", pos);
	console.log("scrolltop: ", spix);
	lastScrollTop = st <= 0 ? 0 : st;
	},
	false
);

function about() {
	if (index !=0){
		setWhite(index);
		index = 0;
		setGray(index);
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
};

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
