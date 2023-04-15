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
	window.alert('pedir senha');
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
	janela.innerHTML = pergunta('Tem certeza? Todos seus dados serão resetados.', 
	'Sim', 
	'Não', 
	'formatar()', 
	'bloque01()');
}