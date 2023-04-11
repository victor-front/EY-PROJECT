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
		}else{
			janela.classList.add('light');
			janela.classList.remove('dark');
		}
	}, 100);
}

function start(){//Startar o sistema
	window.alert('beta');
}