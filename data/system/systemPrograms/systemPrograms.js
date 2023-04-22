let programs = {//Isso define se os programas podem ser executaods ou não
	clock: true,
}

if(cad[2]){
	function step(){//Loop que verifica se já pode executar os demais programas do sistema
		setTimeout(()=>{
			if(programs.clock){//Se clock for true(se clock pode ser executado)
				clock();
			}
			step();//Voltar ao escopo do loop
		}, 100);
	}
}