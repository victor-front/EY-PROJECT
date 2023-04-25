function desktop(){//Sistema do desktop
	for(c=0;c<desklist.length;c++){
		let dentro = desklist[c];
		janela.innerHTML += appIcon(dentro[0], dentro[1], dentro[2]);
	}
}