let conta = localStorage.getItem('eynick'); //Define se a conta foi criada ou não
let janela = document.getElementById('ey-window'); //Janela recebe o valor do caminho do elemento da tela do EY
let tema = localStorage.getItem('eytema');
let underfinedTema = 'dark';
let cad = [false, false, true]; //Vetor que permite se pode gerar o aviso ou não

janela.innerHTML = iniciando('Pressione Enter');
if(!tema){//Se o tema não for definido, vai no tema padrão(dark)
	janela.classList.add(underfinedTema);
}else{//Se for definido, vai no específico
	janela.classList.add(tema);
}

document.body.addEventListener('keydown', (event)=>{//Eventos de tecla do usuário
	if(!cad[0]){//Se o cadeado 0 for false, pode executar esses comandos
		let tecla = event.key;
		if(tecla == 'Enter'){
			cad[0] = true;
			boot();
		}
	}
})

function boot(){//Boot do sistema, o sistema se inicia principalmente por aqui
	janela.innerHTML = iniciando('Iniciando');
	setTimeout(()=>{//Delay de 5 segundos
		if(!conta){
			signup();//Chamar etapa de criar conta
		}else{
			start();//Startar o sistema
		}
	}, 5 * 1000);
}

function start(){//Startar o sistema
	setTimeout(()=>{
		const musicStart = new Audio('data/system/start.mp3');
		musicStart.play();
		janela.innerHTML = loadLogo();//Desenhar a logo na tela
		if(localStorage.getItem('eytema') == 'light'){//Se o tema for light, inverter a cor da logo
			document.querySelector("#logoinicio").classList.add('invertColor');
		}
		setTimeout(()=>{//Adicionar anmação de desaparecer
			document.querySelector("#logoinicio").classList.remove('aparecer');
			document.querySelector("#logoinicio").classList.add('desaparecer');
			setTimeout(()=>{//Remover a logo
				bloque01();
			}, 4 * 1000);
		}, 8 * 1000);
	}, 2 * 1000);
}