//Carcaça do relógio
const pcCom = () => `
	<div id="pc">
		<div id="pcbody">
		</div>
	</div>
`;

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
	if(clock.executando){
		document.querySelector("#clock").style.display = 'none';
	}
	pc.pod = false;//PC não pode mais ser executado pois já está sendo executado
	pc.executando = true;//PC já está sendo executado
	janela.innerHTML += pcCom();//Desenhar carcaça do PC na tela
	for(c=0;c < pc.oplistname.length;c++){
		document.querySelector("#pcbody").innerHTML += botao(`${pc.oplistname[c]}`, `${pc.oplistfun[c]}`);
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
	window.alert('Desligar');
}

function pcConfig(){//Abrir menu de configurações do pc
	window.alert('pcConfig');
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