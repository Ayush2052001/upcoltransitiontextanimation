const text= document.querySelector(".heading");
const str= text.textContent;
const substr= str.split("");
console.log(substr);
text.textContent= "";
for(let i=0; i< substr.length; i++){
	text.innerHTML += "<span>"+ substr[i]+ "</span>";
}
let char= 0;
let timer= setInterval( tick, 50);
function tick(){
	const span= document.querySelectorAll('span')[char];
	console.log(span);
	span.classList.add('fade');
	char++ ;
	if(char == str.length ){
		complete();
		return 0;
	}
}
tick();
function complete(){
	clearInterval(timer);
	timer= null;
}
