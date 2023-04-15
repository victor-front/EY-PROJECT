let conta = localStorage.getItem('eynick'); //Define se a conta foi criada ou não
let janela = document.getElementById('ey-window'); //Janela recebe o valor do caminho do elemento da tela do EY
let tema = localStorage.getItem('eytema');
let underfinedTema = 'dark';

function boot(){//Boot do sistema, o sistema se inicia principalmente por aqui
	if(!tema){//Se o tema não for definido, vai no tema padrão(dark)
		janela.classList.add(underfinedTema);
	}else{//Se for definido, vai no específico
		janela.classList.add(tema);
	}
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
		janela.innerHTML = loadLogo();//Desenhar a logo na tela
		if(localStorage.getItem('eytema') == 'light'){//Se o tema for light, inverter a cor da logo
			document.getElementById('logo').classList.add('invertColor');
		}
		setTimeout(()=>{//Adicionar anmação de desaparecer
			document.getElementById('logo').classList.remove('aparecer');
			document.getElementById('logo').classList.add('desaparecer');
			setTimeout(()=>{//Remover a logo
				bloque01();
			}, 4 * 1000);
		}, 8 * 1000);
	}, 2 * 1000);
}