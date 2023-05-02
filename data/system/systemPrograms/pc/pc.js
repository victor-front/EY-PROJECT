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
	window.alert('Editar');
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