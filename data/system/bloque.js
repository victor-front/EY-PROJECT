function bloque01(){//Desenhar na tela o usuário detectado
	janela.innerHTML = bloMsg(localStorage.getItem('eynick'));
}

function bloque02(){
	if(localStorage.getItem('eypassword') !== 'null'){//Se o usuário tiver senha, pedir a senha antes de iniciar
		pedirSenha();
	}else{//Se não, logar direto
		logar();
	}
}

function pedirSenha(){
	janela.innerHTML = input(`${localStorage.getItem('eynick')}`, 'Senha', 'enviarPass()');
	document.getElementById('pedirSenha').innerHTML += botao('Voltar', "janela.innerHTML = bloMsg(localStorage.getItem('eynick'))");
}

function enviarPass(){
	let senha = document.getElementById('password').value;
	if(!senha){
		window.alert('Por favor, digite algo!')
	}else if(senha == localStorage.getItem('eypassword')){
		window.alert('Senha correta!');
	}else{
		window.alert('Senha incorreta...');
	}
}

function logar(){
	window.alert('logar');
}

function formatar(){//Função que formata os dados do usuário
	localStorage.removeItem('eynick');
	localStorage.removeItem('eypassword');
	localStorage.removeItem('eytema');
	location.reload();
}

function perguntar(){//Perguntar se tens certeza que quer formatar
	janela.innerHTML = pergunta('Tem certeza? Todos os seus dados serão resetados.', 
	'Sim', 
	'Não', 
	'formatar()', 
	'bloque01()');
}