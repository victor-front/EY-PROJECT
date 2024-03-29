//Carcaça do relógio
const pcCom = () => `
	<div id="pc">
		<div id="pcbody">
		</div>
	</div>
`;

const pcConfigCom = () => `
	<div id="pcConfig">
		<button class="buttonGeneric" onclick="editarUs()">Usuário</button>
		<button class="buttonGeneric" onclick="formatarSis()">Formatar</button>
		<button class="buttonGeneric" onclick="voltar()">Voltar</button>
	</div>
`

const editarUsCom = () => `
	<div id="editarUs">
		<div id="editarbody">
			<button class="opEd" onclick="editarNick();">Nick</button>
			<button class="opEd" onclick="editarSenha();">Senha</button>
			<button class="opEd" onclick="mudarTema();">Tema</button>
			<button class="opEd" onclick="document.querySelector('#editarUs').remove();">Voltar</button>
		</div>
	</div>
`

const pcInfoCom = () => `
	<div id="pcInfo">
		<h1>Informações do Sistema</h1>
		<div id="edicao">
			<h2>Edição do EyeOS</h2>
			<p>EyeOS 1.0</p>
			<p>Copyright <strong>Victor Front</strong> 2023.</p>
		</div>
		<div id="general">
			<h2>Informações gerais do Sistema</h2>
			<p>Versão específica: EyeOS 1.0 alpha edition</p>
			<p>Tipo de sistema: Simulador de sistema operacional.</p>
			<p>Nome de usuário: <strong>${localStorage.getItem('eynick')}</strong></p>
		</div>
		<button id="voltarPC" class="buttonGeneric" onclick="voltar()">Voltar</button>
	</div>
	<img id="logoinfo" src="data/system/logo.png" alt="logo">
`

const mudarNickCom = () => `
	<div id="mudarNick">
		<div id="nickContainer">
			<input class="genericInput" id="novoNick" type="text" placeholder="Novo nick" maxlength="10" autocomplete="none">
			<div id="botoBody">
				<button id="nickFeito" class="buttonGeneric" onclick="filtroNick(1);">Feito</button><button id="nickVoltar" class="buttonGeneric" onclick="filtroNick(2);">Voltar</button>
			</div>
		</div>
	</div>
`

const mudarSenhaCom = () => `
	<div id="mudarSenha">
		<div id="senhaContainer">
			<input class="genericInput" id="novaSenha" type="password" placeholder="Nova senha" maxlength="10" autocomplete="none">
			<div id="passBody">
				<button id="senhaFeita" class="buttonGeneric" onclick="filtroSenha(1);">Feito</button><button id="removerSenha" class="buttonGeneric" onclick="filtroSenha(2)">Remover</button><button id="senhaVoltar" class="buttonGeneric" onclick="filtroSenha(3);">Voltar</button>
			</div>
		</div>
	</div>
`

const mudarTemaCom = () => `
	<div id="editarTema">
		<div id="editarTemaBody">
			<div id="butEdRow">
				<button class="buttonGeneric" onclick="filtrarTema(1, 1);">Dark</button><button class="buttonGeneric" onclick="filtrarTema(1, 2);">Light</button>
			</div>
			<button class="buttonGeneric" onclick="filtrarTema(2);">Voltar</button>
		</div>
	</div>
`

function pcStart(){//função que executa as funcionabilidades do programa PC
	if(document.querySelector(".pergunta")){//Se a pergunta se quer formatar já existir, remove-la
		document.querySelector(".pergunta").remove();
	}
	if(document.querySelector("#pcConfig")){//Se pcConfig existir, executar o bloco
		if(document.querySelector("#pcConfig").style.display == 'none'){//Se pcConfig estiver escondido, dar display dele na tela
			document.querySelector("#pcConfig").style.display = 'flex';
		}
	}
	if(clock.executando){//Se clock estiver sendo executado, esconde-lo
		document.querySelector("#clock").style.display = 'none';
	}
	pc.pod = false;//PC não pode mais ser executado pois já está sendo executado
	pc.executando = true;//PC já está sendo executado
	if(!document.querySelector("#pc")){//Se PC não estiver desenhado, executar comandos abaixo
		janela.innerHTML += pcCom();//Desenhar carcaça do PC na tela
		
		for(c=0;c < pc.oplistname.length;c++){
			document.querySelector("#pcbody").innerHTML += botao(`${pc.oplistname[c]}`, `${pc.oplistfun[c]}`);
		}
	}
	stepPC();//Chamar looping de verificação do PC
}

function voltar(){//Voltar ao menu pc
	document.querySelector("#pc").remove();
	pcStart();
}

function pcInfo(){//Desenhar as informações do pc
	document.querySelector("#pc").innerHTML = pcInfoCom();
}

function desligar(){//Desligar pc
	janela.innerHTML = iniciando('Desligando');//Imprimir mensagem de desligando
	if(clock.executando){//Se o relógio está sendo executado, fechá-lo
		clock.cor = true;
	}
	setTimeout(()=>{//Delay de 5 segundos
		if(localStorage.getItem('eytema') == 'dark')
			janela.innerHTML = flash();//Desenhar flash na tela
		else{
			janela.innerHTML = flashf();//Desenhar flash na tela
		}
		setTimeout(()=>{//Delay de 3 segundos e reiniciar a página
			location.reload();
		}, 3 * 1000);
	}, 5 * 1000);
}

function pcConfig(){//Abrir menu de configurações do pc
	document.querySelector("#pc").innerHTML = pcConfigCom();
}

function editarUs(){//Abrir tela para editar o usuário
	janela.innerHTML += editarUsCom();
}

function editarNick(){//Função que exibe o elemento para editar o nick do usuário
	document.querySelector("#editarUs").remove();
	janela.innerHTML += mudarNickCom();
}

function filtroNick(n){//Filtro para evitar duas funções separadas
	if(n == 1){
		if(document.querySelector("#novoNick").value){
			localStorage.setItem('eynick', `${document.querySelector("#novoNick").value}`);
			document.querySelector("#mudarNick").remove();
			editarUs();
		}else{
			criarAviso('Por favor, digite um Nick!', '150px', '490px');
		}
	}else{
		document.querySelector("#mudarNick").remove();
		editarUs();
	}
}

function filtroSenha(n){//Filtro para evitar duas funções separadas
	if(n == 1){
		let senha = document.querySelector("#novaSenha").value;
		if(senha){//Se o usuário digitou a senha e se a mesma é maior do que 8 caracteres
			if(senha.length < 8){
				criarAviso('A senha precisa ter pelo menos 8 caracteres!', '150px', '480px');
			}else{
				localStorage.setItem('eypassword', `${document.querySelector("#novaSenha").value}`);
				document.querySelector("#mudarSenha").remove();
				editarUs();
			}
		}else{
			criarAviso('Por favor, digite, uma senha!', '150px', '490px');
		}
	}else if(n == 2){
		if(localStorage.getItem('eypassword') !== 'false'){
			localStorage.setItem('eypassword', 'false');
			document.querySelector("#mudarSenha").remove();
			editarUs();
		}else{
			criarAviso('Não há nada para remover, não tens uma senha ainda.', '150px', '480px;');
		}
	}else{
		document.querySelector("#mudarSenha").remove();
		editarUs();
	}
}

function editarSenha(){//Função que exibe a etapa para poder modificar ou remover a senha
	document.querySelector("#editarUs").remove();
	janela.innerHTML += mudarSenhaCom();
}

function mudarTema(){
	document.querySelector("#editarUs").remove();
	document.querySelector("#pcConfig").remove();
	document.querySelector("#pc").innerHTML += mudarTemaCom();
}

function filtrarTema(a, b = null){
	if(a == 1){
		if(b == 1){
			if(localStorage.getItem('eytema') == 'light'){
				document.querySelector('#ey-window').classList.remove('light');
			}
			localStorage.setItem('eytema', 'dark');
			document.querySelector('#ey-window').classList.add('dark');
		}else if(b == 2){
			if(localStorage.getItem('eytema') == 'dark'){
				document.querySelector('#ey-window').classList.remove('dark');
			}
			localStorage.setItem('eytema', 'light');
			document.querySelector('#ey-window').classList.add('light');
		}
		filtrarTema(2);
	}else if(a == 2){
		document.querySelector("#editarTema").remove();
		document.querySelector("#pc").innerHTML += pcConfigCom();
		editarUs();
	}
}

function stepPC(){
	if(pc.cor){
		pc.cor = false;
		pc.executando = false;
	}else{
		setTimeout(()=>{stepPC();}, 500);//Voltar ao escopo do looping
	}
}

function encerrarPC(){//Cortar o step
	if(clock.executando){
		document.querySelector("#clock").style.display = 'flex';
	}
	document.querySelector("#pc").remove();
	pc.cor = true;//Variável que permite cortar o step
}

function formatarSis(){//Formatar Sistema
	document.querySelector("#pcConfig").style.display = 'none';//Escondar o menu de config do PC
	janela.innerHTML += pergunta('Tem certeza? Todos os seus dados serão resetados.', 
	'Sim', 
	'Não', 
	'formatar();', 
	'pcStart();');
}