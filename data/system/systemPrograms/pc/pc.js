//Carcaça do relógio
const pcCom = () => `
	<div id="pc">
		<div id="pcbody">
		</div>
	</div>
`;

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

function pcInfo(){
	window.alert('pcInfo');
}

function pcConfig(){
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