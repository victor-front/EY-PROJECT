function onlog(){//Startar programas gerais
	janela.innerHTML = ''; //Limpar a janela
	programs.clock = true; //Função que permite com que o sistema clock seja executado
	step();//Iniciar o loop
}