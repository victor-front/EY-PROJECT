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
		janela.innerHTML = '';
		if(!conta){
			signup();//Chamar etapa de criar conta
		}else{
			start();//Startar o sistema
		}
	}, 5 * 1000)
}