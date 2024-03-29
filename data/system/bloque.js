function bloque01(){//Desenhar na tela o usuário detectado
	janela.innerHTML = bloMsg(localStorage.getItem('eynick'));
}

function bloque02(){
	if(localStorage.getItem('eypassword') !== 'false'){//Se o usuário tiver senha, pedir a senha antes de iniciar
		pedirSenha();
	}else{//Se não, logar direto
		logar();//Chamar a função de logar
	}
}

function pedirSenha(){//Sistema que chama o menu de pedir a senha
	janela.innerHTML = input(`${localStorage.getItem('eynick')}`, 'Senha', 'enviarPass()');
	document.getElementById('buttons').innerHTML += botao('Voltar', "rearanjar(), janela.innerHTML = bloMsg(localStorage.getItem('eynick'))");
}

function enviarPass(){//Sistema que avalia, compara se a senha está correta ou não
	let senha = document.getElementById('password').value;
	if(!senha){
		criarAviso('Por favor, digite algo!', '150px', '480px');
	}else if(senha == localStorage.getItem('eypassword')){
		logar();
	}else{
		criarAviso('Senha incorreta...', '150px', '480px');
	}
}

function logar(){//Logar na conta do usuário
	janela.innerHTML = '';//Limpar a tela
	cad[1] = false;
	setTimeout(()=>{
		janela.innerHTML = bemVindoa();//Adicionar o elemento bem-vindo já com a animação aparecendo aos poucos
		setTimeout(()=>{
			document.getElementById('bemVindoa').classList.remove('aparecer');//Removendo a animação de aparecer e adicionando a de desaparecer
			document.getElementById('bemVindoa').classList.add('desaparecer');
			setTimeout(()=>{
				onlog();//Chamar onlog(quando for logado)
				desktop();//Chamar o desktop(área de trabalho)
			}, 5 * 1000)
		}, 6 * 1000);
	}, 2 * 1000)
}

function formatar(){//Função que formata os dados do usuário
	if(clock.executando){//Se o relógio está sendo executado, fechá-lo
		clock.cor = true;
	}
	janela.innerHTML = iniciando('Formatando');//Imprimir mensagem de desligando
	setTimeout(()=>{//Delay de 5 segundos
		if(localStorage.getItem('eytema') == 'dark')
			janela.innerHTML = flash();//Desenhar flash na tela
		else{
			janela.innerHTML = flashf();//Desenhar flash na tela
		}
		setTimeout(()=>{//Delay de 3 segundos e reiniciar a página
			localStorage.removeItem('eynick');
			localStorage.setItem('eypassword', 'false');
			localStorage.removeItem('eytema');
			location.reload();
		}, 3 * 1000);
	}, 5 * 1000);
}

function perguntar(){//Perguntar se tens certeza que quer formatar
	janela.innerHTML = pergunta('Tem certeza? Todos os seus dados serão resetados.', 
	'Sim', 
	'Não', 
	'formatar()', 
	'bloque01()');
}