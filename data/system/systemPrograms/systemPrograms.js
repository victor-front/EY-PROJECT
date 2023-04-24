//Lista de programas
let clock = {
	name: 'Relógio',//Nome da aplicação
	pod: true,//Se o programa pode ser executado
	cor: false,//Se pode cortar o step do programa
}

if(cad[2]){
	function step(){//Loop que verifica se já pode executar os demais programas do sistema
		setTimeout(()=>{
			if(clock.pod){//Se pod for true(se clock pode ser executado)
				clockStart();
			}
			step();//Voltar ao escopo do loop
		}, 100);
	}
}