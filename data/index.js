let conta = true;

function boot(){
	document.getElementById('ey-window').innerHTML = `
			<div style="display: flex; margin-top: 20px;">
				<p style="font-size: 1.8em; color: #ddd; margin-left: 1em;">Iniciando</p>
				<p style="font-size: 1.8em; color: #ddd; animation: piscar 1s linear infinite">_</p>
			</div>
			<style>@keyframes piscar{0%{opacity: 0%;}50%{opacity: 100%;}100%{opacity: 0%;}}</style>
		`;
	setTimeout(()=>{
		document.getElementById('ey-window').innerHTML = '';
		if(conta){
			login();
		}else{
			make();
		}
	}, 5 * 1000)
}

function make(){
	window.alert('Vamos criar a sua conta!');
}

function login(){
	window.alert('Seja bem-vindo(a)!');
}