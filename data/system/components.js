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
			<input id="nick" type="text" placeholder="Nome de usuário" maxlength="10"><br>
			<input id="password" type="password" placeholder="Senha(opicional)" minlenght="8" maxlength="10"><br>
			<label for="dark"><input id="dark" type="radio" name="radtem" checked onclick="setarCor()">Dark</label>
			<label for="light" onclick="setarCor()"><input id="light" type="radio" name="radtem">Light</label><br>
			<input id="concordo" type="checkbox" name="concordo"><label for="concordo">Concordo com os termos de privacidade(<a href="#" rel="next" target="_blank">Ler os termos</a>)</label>
		</div>
		<input type="button" value="Feito" onclick="filtrar()">
	</section>
`;

const loadLogo = () => `
	<img id="logo" class="aparecer" src="data/system/logo.png"/>
`;

const bloMsg = (nick) => `
	<section id="bloque">
		<p>Detectamos um usurário chamado <strong>${nick}</strong>. Que fazes?</p>
		<input type="button" class="buttonGeneric" value="Prosseguir" onclick="bloque02()">
		<input type="button" class="buttonGeneric" value="Formatar" onclick="perguntar()">
	</section>
`

const pergunta = (message, op1, op2, fu1, fu2) => `
	<section id="pergunta">
		<p>${message}</p>
		<input type="button" class="buttonGeneric" value="${op1}" onclick="${fu1}">
		<input type="button" class="buttonGeneric" value="${op2}" onclick="${fu2}">
	</section>
`;

const input = (title, place, click) => `
	<section id="pedirSenha">
		<h1>${title}</h1>
		<div>
			<input type="password" class="password" id="password" placeholder="${place}">
		</div>
		<div id="buttons">
			<input type="button" id="enviarPass" class="buttonGeneric" value="Enviar" onclick="${click}">
		<div>
	</section>
`

const bemVindoa = () => `
	<h1 id="bemVindoa" class="aparecer">Bem-vindo(a)!</h1>
`

const botao = (msg, fun) => `
	<input type="button" id="botao" class="buttonGeneric" value="${msg}" onclick="${fun}">
`;