
function add(a, b) {
  return a + b;
}

function mult(a, b) {
  return a * b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

var val1="";
var val2="";
var op="";



function NumPressed(a) {
	//alert("testing");
	var console=document.getElementById("console");
	console.value=a;
	if(op==""){
		val1=String(val1)+a;
		console.value=val1;
	}
	else{
		console.value="";
		val2=String(val2)+a;
		console.value=val2;
	}
}
function clear()
{
	var console=document.getElementById("console");
	console.value="";
	val1="";
	val2="";
	op="";
	
}
function setOperator(op_input) {
	var console=document.getElementById("console");
	if(val2==""){
		op=op_input;
		return;
		}
	if(op==""){
		op=op_input;
		//console.value="";
		return ;
	}
	else{
		
		if (val1 =="" || val2 == ""){
			console.value="Error";
			clear();
		}
		else{
			if(op=="+")
				console.value=String(add(Number(val1),Number(val2)));
			else if(op=="*")
				console.value=String(mult(Number(val1),Number(val2)));
			else if(op=="-")
				console.value=String(sub(Number(val1),Number(val2)));
			else if(op=="/")
				console.value=String(div(Number(val1),Number(val2)));
				
			val1=console.value;//String(add(Number(val1),Number(val2)));
			val2="";
			op=op_input;
		}
		
	}
	
}
function equate()
{	
	//alert("===="+val1+"  "+val2+"  "+op+" ");
	var console=document.getElementById("console");
	if(val1 =="" || op==""){
		
		console.value="";
		return;
	}
	else if(val2== "" ){
		console.value=val1;
		return;
	}
	else{
	
		if(op=="+")
				console.value=String(add(Number(val1),Number(val2)));
			else if(op=="*")
				console.value=String(mult(Number(val1),Number(val2)));
			else if(op=="-")
				console.value=String(sub(Number(val1),Number(val2)));
			else if(op=="/")
				console.value=String(div(Number(val1),Number(val2)));
				
			val1=console.value;//String(add(Number(val1),Number(val2)));
			val2="";
			op="";
	}
	
	
}

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {

document.getElementById("btn1").onclick=function(){NumPressed(0);};
document.getElementById("btn1").onclick=function(){NumPressed(1);};
document.getElementById("btn2").onclick=function(){NumPressed(2);};
document.getElementById("btn3").onclick=function(){NumPressed(3);};
document.getElementById("btn4").onclick=function(){NumPressed(4);};
document.getElementById("btn5").onclick=function(){NumPressed(5);};
document.getElementById("btn6").onclick=function(){NumPressed(6);};
document.getElementById("btn7").onclick=function(){NumPressed(7);};
document.getElementById("btn8").onclick=function(){NumPressed(8);};
document.getElementById("btn9").onclick=function(){NumPressed(9);};
document.getElementById("btn+").onclick=function(){setOperator("+");};
document.getElementById("btn-").onclick=function(){setOperator("-");};
document.getElementById("btn*").onclick=function(){setOperator("*");};
document.getElementById("btn/").onclick=function(){setOperator("/");};
document.getElementById("btn=").onclick=function(){equate();};

document.getElementById("btnclear").onclick=function(){clear();};

//document.getElementById("btntwo").onClick=function(){NumPressed(2)};
  //var welcome_p=document.getElementById("welcome");
  //var x=20;
  //welcome_p.innerHTML=x.toString();
  //kittenGenerator.requestKittens();
});
