//Lista de programas
let clock = {
	name: 'Relógio',//Nome da aplicação
	pod: true,//Se o programa pode ser executado
	cor: false,//Se pode cortar o step do programa
	executando: false,//Se o clock já está sendo executado
}

let desklist = [//Lista de apps que serão exibidos no desktop
	[clock.name, 'clock.pod = true', 'data/system/systemPrograms/clock/icon.png'],
]

if(cad[2]){
	function step(){//Loop que verifica se já pode executar os demais programas do sistema
		setTimeout(()=>{
			if(clock.pod){//Se pod for true(se clock pode ser executado)
				if(!clock.executando){
					clockStart();
				}else{
					clock.pod = false;
				}
			}
			step();//Voltar ao escopo do loop
		}, 100);
	}
}