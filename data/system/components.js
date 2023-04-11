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
			<h1>Bem-vindo(a) ao EY 1.0!</h1>
			<p>Bem, é de se notar que não tens uma conta. Vamor começar?</p>
		</div>
		<div id="form">
			<input id="nick" type="text" placeholder="Nome de usuário" maxlength="10"><br>
			<input id="password" type="password" placeholder="Senha(opicional)" minlenght="8" maxlength="10"><br>
			<label for="dark"><input id="dark" type="radio" name="radtem" checked onclick="setarCor()">Dark</label>
			<label for="light" onclick="setarCor()"><input id="light" type="radio" name="radtem">Light</label><br>
			<input id="concordo" type="checkbox" name="concordo"><label for="concordo">Concordo com os termos de privacidade(<a href="#" rel="next" target="_blank">Ler os termos</a>)</label>
		</div>
		<input type="button" value="Feito" onclick="filtrarECriar()">
	</section>
`;