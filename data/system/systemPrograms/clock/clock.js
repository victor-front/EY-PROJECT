//Carcaça do relógio
const clockCom = () => `
	<div id="clock">
		<div id="clockHeader"><div id="x" onclick="encerrarClock()"><span>X</span></div></div>
		<div id="clockBody">
			<p id="hour">00:00</p>
		</div>
	</div>
`;

function clockStart(){//função que executa as funcionabilidades do programa Clock(relógio)
	clock.pod = false;//Clock não pode mais ser executado pois já está sendo executado
	clock.executando = true;//Clock já está sendo executado
	janela.innerHTML += clockCom();//Desenhar carcaça do relógio na tela
	stepClock();//Chamar looping de atualização do relógio
}

function stepClock(){
	if(!clock.cor){
		let d = new Date();//Pegar a data
		let hour = d.getHours();//Pegar a hora
		let min = d.getMinutes();//Pegar o minuto
		document.querySelector("#hour").innerHTML = `${hour}:${min} ${veriIcon(hour)}`;//Implementar o valor na parte gráfica do relógio
		setTimeout(()=>{
			stepClock();//Subir pro escopo do clock
		}, 100);
	}else{
		clock.executando = false;//Deixar como false a variável de executando
		clock.cor = false;//Deixar variável de cortar loop do clock como false
	}
}

function veriIcon(h){//Verifica qual tipo de icon a ser retornado
	if(h >= 0 && h < 6){//Se for maior ou igual a 0 e menor que 6
		return `<img class="ci" src="data/system/systemPrograms/clock/c01.png" alt="Madrugada">`;
	}else if(h >= 6 && h < 12){//Se for maior ou igual a 6 e menor que 12
		return `<img class="ci" src="data/system/systemPrograms/clock/c03.png" alt="Manhã">`;
	}else if(h >= 12 && h < 16){//Se for maior ou igual a 12 e menor que 16
		return `<img class="ci" src="data/system/systemPrograms/clock/c02.png" alt="Dia">`;
	}else if(h >= 16 && h < 18){//Se for maior ou igual a 16 e menor ou igual a 18
		return `<img class="ci" src="data/system/systemPrograms/clock/c03.png" alt="Tarde">`;
	}else if(h >= 18 && h <= 23){//Se for maior que 18 e menor ou igual a 23
		return `<img class="ci" src="data/system/systemPrograms/clock/c04.png" alt="Noite">`;
	}
}

function encerrarClock(){//Cortar o step
	document.querySelector("#clock").remove();
	clock.cor = true;//Variável que permite cortar o step
}