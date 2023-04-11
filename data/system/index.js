let conta = false; //Define se a conta foi criada ou não
let janela = document.getElementById('ey-window'); //Janela recebe o valor do caminho do elemento da tela do EY

function boot(){//Boot do sistema, o sistema se inicia principalmente por aqui
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

function signup(){//Sistema de criar conta
	janela.innerHTML = criarConta();
}

function filtrarECriar(){//Filtrar ao criar a conta
	window.alert('beta');
}

function setarCor(){
	setTimeout(()=>{
		if(document.getElementById('dark').checked == true){
			janela.classList.add('dark');
			janela.classList.remove('light');
			console.log('dark');
		}else{
			janela.classList.add('light');
			janela.classList.remove('dark');
			console.log('light');
		}
	}, 500);
}

function start(){//Startar o sistema
	window.alert('beta');
}