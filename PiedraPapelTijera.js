function calcula(){
	do{
		do{
			/*Obtiene y valida valor de usuario*/
			var selUsr = prompt("Elige un piedra, papel o tijera");
			selUsr = selUsr.toUpperCase();
			if(selUsr!="PIEDRA" && selUsr!="PAPEL" && selUsr!="TIJERA"){
				alert("Inserte un valor valido");
			}
		}while(selUsr!="PIEDRA" && selUsr!="PAPEL" && selUsr!="TIJERA");

		/*Obtiene valor aleatorio de la maquina*/
		var aleatorio = Math.floor(Math.random()*3)+1;
		var selComp="";
		if(aleatorio==1){
			selComp="PIEDRA";
		}else if(aleatorio==2){
			selComp="PAPEL";
		}else if(aleatorio==3){
			selComp="TIJERA";
		}

		/*Calcula resultado*/
		var res="";
		if(selUsr==selComp)
		{
			res="EMPATE";
		}
		else{
			if((selUsr=="PIEDRA" && selComp=="TIJERA") || (selUsr=="PAPEL" && selComp=="PIEDRA") || (selUsr=="TIJERA" && selComp=="PAPEL"))
			{
				res="GANA USUARIO";
			}
			else
			{
				res="GANA COMPUTADORA";
			}
		}

		alert(selUsr+" vs. "+selComp+"\n"+"Resultado: "+res);

	}while(confirm("Desea seguir jugando?")==true);
}