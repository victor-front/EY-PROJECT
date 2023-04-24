function onlog(){//Startar programas gerais
	janela.innerHTML = ''; //Limpar a janela
	clock.pod = true; //Função que permite com que o sistema clock seja executado
	step();//Iniciar o loop
}