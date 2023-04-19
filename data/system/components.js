const iniciando = (msg) => `
<div style="display: flex; margin-top: 20px;">
	<p style="font-size: 1.8em; margin-left: 1em;">${msg}</p>
	<p style="font-size: 1.8em; animation: piscar 1s linear infinite">_</p>
</div>
<style>@keyframes piscar{0%{opacity: 0%;}50%{opacity: 100%;}100%{opacity: 0%;}}</style>
`;

const criarConta = () => `
	<section id="criarConta">
		<div id="apresentacao">
			<h1>Bem-vindo(a) ao EyeOS!</h1>
			<p>Bem, é de se notar que não tens uma conta. Vamor começar?</p>
		</div>
		<div id="form">
			<input id="nick" autocomplete="none" type="text" placeholder="Nome de usuário" class="genericInput" maxlength="10"><br>
			<input id="password" type="password" placeholder="Senha(opicional)" class="genericInput" minlenght="8" maxlength="10"><br>
			<label for="dark"><input id="dark" type="radio" name="radtem" checked onclick="setarCor()">Dark</label>
			<label for="light" onclick="setarCor()"><input id="light" type="radio" name="radtem">Light</label><br>
			<input id="concordo" type="checkbox" name="concordo"><label for="concordo">Concordo com os termos de privacidade(<a href="#" rel="next" target="_blank">Ler os termos</a>)</label>
		</div>
		<button onclick="filtrar()" class="buttonGeneric">Feito</button>
	</section>
`;

const loadLogo = () => `
	<img id="logo" class="aparecer" src="data/system/logo.png"/>
`;

const bloMsg = (nick) => `
	<section id="bloque">
		<p>Detectamos um usurário chamado <strong>${nick}</strong>. Que fazes?</p>
		<button class="buttonGeneric" onclick="bloque02()">Prosseguir</button>
		<button class="buttonGeneric" onclick="perguntar()">Formatar</button>
	</section>
`

const pergunta = (message, op1, op2, fu1, fu2) => `
	<section id="pergunta">
		<p>${message}</p>
		<button class="buttonGeneric" onclick="${fu1}">${op1}</button>
		<button class="buttonGeneric" onclick="${fu2}">${op2}</button>
	</section>
`;

const input = (title, place, click) => `
	<section id="pedirSenha">
		<h1>${title}</h1>
		<div>
			<input type="password" class="genericInput" id="password" class="genericInput" maxlength="10" placeholder="${place}">
		</div>
		<div id="buttons">
			<button id="enviarPass" class="buttonGeneric" onclick="${click}">Enviar</button>
		<div>
	</section>
`

const bemVindoa = () => `
	<h1 id="bemVindoa" class="aparecer">Bem-vindo(a)!</h1>
`

const botao = (msg, fun) => `
	<button id="botao" class="buttonGeneric" onclick="${fun}">${msg}</button>
`;

const aviso = (msg, top, left) => `
	<div id="balao" class="balao" style="top: ${top}; left: ${left};">
		<p>${msg}</p>
	</div>
`
function criarAviso(msg, top, left){//Sistema que cria o balão de aviso
	if(!cad){//Se cad for false, pode executar essa função;
		cad = true;
		janela.innerHTML += aviso(msg, top, left);
		setTimeout(()=>{
			rearanjar();
		}, 5 * 1000);
	}
}

function rearanjar(){//Rebobinar o popup
	if(cad){
		document.getElementById('balao').remove();
		cad = false;
	}
}