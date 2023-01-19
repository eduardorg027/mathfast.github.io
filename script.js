var num1, num2, respuesta;
txt_operacion = document.getElementById("operacion");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");
vb=0;
vm=0;
contadorb=document.getElementById("contadorb");
contadorm=document.getElementById("contadorm");
let time = 30000
tiempo = document.getElementById("time");
tiempo.innerHTML = time;





function comenzar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
	nran=Math.random()*10;
	modo=new Boolean();
	if(nran<=5){
		modo=true;
	}else{
		modo=false;
	}	
	if(modo==true){
		//genera la suma dificil
		if(document.getElementById("dif").checked){
			num1 = Math.round(Math.random()*50);
			num2 = Math.round(Math.random()*50);
			respuesta = num1 + num2;
			//asignamos lo números para que se muestren
			operacion.innerHTML = num1 + " + " + num2 + " = ";
		}else{
			//genera suma facil
			num1 = Math.round(Math.random()*9);
			num2 = Math.round(Math.random()*9);
			respuesta = num1 + num2;
			//asignamos lo números para que se muestren
			operacion.innerHTML = num1 + " + " + num2 + " = ";
		}
	}else if (modo==false){
		if(document.getElementById("dif").checked){
					//generar la resta dificil
		num1 = Math.round(Math.random()*50);
		num2 = Math.round(Math.random()*50);
		respuesta = num1 - num2;
		operacion.innerHTML = num1 + " - " + num2 + " = ";

		}else{
					//generar la resta facil
		num1 = Math.round(Math.random()*9);
		num2 = Math.round(Math.random()*9);
		respuesta = num1 - num2;
		operacion.innerHTML = num1 + " - " + num2 + " = ";
			
		}	
	}
	//genero un número entre 0 y 2 para colocar la opcion correcta
	indiceOpCorrecta = Math.round(Math.random()*2);
	console.log(indiceOpCorrecta);

	//si indiceCorrrecta es igual 0
	if(indiceOpCorrecta == 0){
		op1.innerHTML = respuesta;
		op2.innerHTML = respuesta + 1;
		op3.innerHTML = respuesta - 1
	}
	if(indiceOpCorrecta == 1){
		op1.innerHTML = respuesta-1;
		op2.innerHTML = respuesta;
		op3.innerHTML = respuesta - 2;
	}
	if(indiceOpCorrecta == 2){
		op1.innerHTML = respuesta+ 2;
		op2.innerHTML = respuesta + 3;
		op3.innerHTML = respuesta;
	}
	
}

function controlarRespuesta(opcionElegida){	
	txt_resultado.innerHTML = opcionElegida.innerHTML;
	if(respuesta == opcionElegida.innerHTML){
		txt_msj.innerHTML = "¡Bien!";
		txt_msj.style.color="green";
		vb=vb+1;
		contadorb.innerHTML=(vb);
		setTimeout(comenzar, 1000);
	}else{
		txt_msj.innerHTML = "Intentalo de nuevo";
		txt_msj.style.color="red";
		vm=vm+1;
		contadorm.innerHTML=(vm);
		setTimeout(limpiar, 1000);
	}
	localStorage.setItem('contadorb',vb)

}
function limpiar(){
	txt_resultado.innerHTML = "?";
	txt_msj.innerHTML = "";
}

//Comenzar el tiempo
function runInterval(){
	let intervalTime = setInterval(() => {
		time -=100
		tiempo.innerHTML = time;
		if(time == -100){
			return window.location.assign('/end.html')
		}
	},100)
	
}
comenzar();
runInterval();










