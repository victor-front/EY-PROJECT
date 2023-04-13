function signup(){//Sistema de criar conta
	janela.innerHTML = criarConta();
}

function filtrar(){//Filtrar ao criar a conta
	let nick = document.getElementById('nick').value;//setar os valores inputs em variráveis
	let pass = document.getElementById('password').value;
	let term = document.getElementById('concordo');
	
	if(!nick){//Se nick for false...
		window.alert('Por favor, digite um nick!');
	}else if(!term.checked){//Se não, se o termo não estiver checado...
		window.alert('Para prosseguir, necessitamos que leia os termos de privacidade.');
	}else if(pass){//Se não, se a senha for true...
		if(pass.length < 8){//Se a senha for menor que 8...
			window.alert('Se prefere definir uma senha, é melhor que contenha 8 caracteres.');
		}else{//Se não...
			criar(nick, pass);
		}
	}else{//Se não...
		criar(nick);
	}
}

function setarCor(){
	setTimeout(()=>{//Delay
		if(document.getElementById('dark').checked){//Se a checkbox dark estiver checada...
			janela.classList.add('dark');
			janela.classList.remove('light');
			localStorage.setItem('eytema', 'dark');
		}else{//Se não...
			janela.classList.add('light');
			janela.classList.remove('dark');
			localStorage.setItem('eytema', 'light');
		}
	}, 100);
}

function criar(nick, pass = null){//Criar a conta em sí
	localStorage.setItem('eynick', nick);
	localStorage.setItem('eypassword', pass);
	location.reload();
}

function start(){//Startar o sistema
	console.log(localStorage.getItem('eynick'));
	console.log(localStorage.getItem('eypassword'));
	console.log(localStorage.getItem('eytema'));
}