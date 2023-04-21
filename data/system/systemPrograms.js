let programs = {//Isso define se os programas podem ser executaods ou não
	clock: true,
}

function step(){//Loop que verifica se já pode executar os demais programas do sistema
	setTimeout(()=>{
		if(programs.clock){
			clock();
		}
	}, 100);
}

function clock(){//função que executa as funcionabilidades do programa Clock(relógio)
	console.log('foi');
}