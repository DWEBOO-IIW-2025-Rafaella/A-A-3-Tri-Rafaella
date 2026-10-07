const nome = "Rafaella";
		const cidade = "Palmital";
		const anoNascimento = 2009;
		const anoAtual = 2026
		const idade = anoAtual - anoNascimento;

		const frase = `${nome} mora em ${cidade}, nasceu em ${anoNascimento} e tem ${idade} anos.`;

		console.log(frase);
		document.getElementById("resultado").textContent = frase;
