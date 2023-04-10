let conta = false;
let janela = document.getElementById('ey-window');

function boot(){
	janela.innerHTML = iniciando('Iniciando');
	setTimeout(()=>{
		janela.innerHTML = '';
		if(conta){
			signup();
		}else{
			make();
		}
	}, 5 * 1000)
}

function make(){
	janela.innerHTML = criarConta();
}

function signup(){
	window.alert('beta');
}

function filtrarECriar(){
	window.alert('beta');
}