function bloque01(){//Desenhar na tela o usuário detectado
	janela.innerHTML = bloMsg(localStorage.getItem('eynick'));
}

function bloque02(){
	if(localStorage.getItem('eypassword') !== 'null'){//Se o usuário tiver senha, pedir a senha antes de iniciar
		pedirSenha();
	}else{//Se não, logar direto
		logar();//Chamar a função de logar
	}
}

function pedirSenha(){//Sistema que chama o menu de pedir a senha
	janela.innerHTML = input(`${localStorage.getItem('eynick')}`, 'Senha', 'enviarPass()');
	document.getElementById('buttons').innerHTML += botao('Voltar', "janela.innerHTML = bloMsg(localStorage.getItem('eynick'))");
}

function enviarPass(){//Sistema que avalia, compara se a senha está correta ou não
	let senha = document.getElementById('password').value;
	if(!senha){
		window.alert('Por favor, digite algo!')
	}else if(senha == localStorage.getItem('eypassword')){
		window.alert('Senha correta!');
	}else{
		window.alert('Senha incorreta...');
	}
}

function logar(){//Logar na conta do usuário
	janela.innerHTML =  '';//Limpar a tela
	setTimeout(()=>{
		janela.innerHTML = bemVindoa();//Adicionar o elemento bem-vindo já com a animação aparecendo aos poucos
		setTimeout(()=>{
			document.getElementById('bemVindoa').classList.remove('aparecer');//Removendo a animação de aparecer e adicionando a de desaparecer
			document.getElementById('bemVindoa').classList.add('desaparecer');
			setTimeout(()=>{
				desktop();//Chamar o desktop
			}, 5 * 1000)
		}, 6 * 1000);
	}, 2 * 1000)
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