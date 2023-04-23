function signup(){//Sistema de criar conta
	janela.innerHTML = criarConta();
	setarCor();//Especificamente: Sincronizar com a input radio atual que já vem definida
}

function filtrar(){//Filtrar ao criar a conta
	let nick = document.getElementById('nick').value;//setar os valores inputs em variráveis
	let pass = document.getElementById('password').value;
	let term = document.getElementById('concordo');
	
	if(!nick){//Se nick for false...
		criarAviso('Por favor, digite um nick!', '60px', '155px');
	}else if(!term.checked){//Se não, se o termo não estiver checado...
		criarAviso('Para prosseguir, necessitamos que leia os termos de privacidade.', '130px', '400px');
	}else if(pass){//Se não, se a senha for true...
		if(pass.length < 8){//Se a senha for menor que 8...
			criarAviso('Se prefere definir uma senha, é melhor que contenha 8 caracteres.', '85px', '155px');
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
		}setarCor();
	}, 100);
}

function criar(nick, pass = null){//Criar a conta em sí
	localStorage.setItem('eynick', nick);
	localStorage.setItem('eypassword', pass);
	location.reload();
}