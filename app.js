const imgPlayerOutput = document.querySelector("#imgPlayer");

const imgComputerOutput = document.querySelector("#imgComputer");

const btnPedra = document.querySelector("#btnPedra");

const btnPapel = document.querySelector("#btnPapel");

const btnTesoura = document.querySelector("#btnTesoura");

const btnJogar = document.querySelector("#novoJogo");

const resultdiv = document.querySelector(".result");

var rand = [];

var imageOutput = [];


var imageArray = ['./img/icons8-hand-96.png', 
				  './img/icons8-hand-scissors-96.png',
				  './img/icons8-hand-rock-96.png'];


btnPedra.addEventListener('click', function(){

	changeImagePlayer(2);

	changeImageComputer();

	result();


});


btnPapel.addEventListener('click', function(){

	changeImagePlayer(0);

	changeImageComputer();

	result();


});


btnTesoura.addEventListener('click', function(){


	changeImagePlayer(1);

	changeImageComputer();

	result();

});

btnJogar.addEventListener('click', function(){

		retomarJogo();

		limparJogo();

});

function changeImagePlayer(index){

	imageOutput = imageArray[index];

	imgPlayerOutput.setAttribute("src", imageOutput);

}


function changeImageComputer(){

	rand = imageArray[Math.floor(Math.random() * imageArray.length)];

	imgComputerOutput.setAttribute("src", rand);

}



function result(){

	const resultSpan = document.querySelector("#result-span");

	let scorePlayer = document.querySelector("#scorePlayer");

	let scoreComputer = document.querySelector("#scoreComputer");

	if(imgPlayerOutput.src == imgComputerOutput.src){

		resultdiv.style.display = "block";

		resultSpan.innerText = "Empate";

		pausarJogo();
		
	}else if(imageOutput == './img/icons8-hand-scissors-96.png' 
			 && rand == './img/icons8-hand-96.png'){

		resultdiv.style.display = "block";

		resultSpan.innerText = "Player Wins";

		scorePlayer.innerText++

		pausarJogo();

	
	
	}else if(rand == './img/icons8-hand-scissors-96.png' 
			 && imageOutput == './img/icons8-hand-96.png'){


		resultdiv.style.display = "block";

		resultSpan.innerText = "Computer Wins";

		scoreComputer.innerText++

		pausarJogo();

	}else if(imageOutput == './img/icons8-hand-96.png' 
			 && rand == './img/icons8-hand-rock-96.png'){

		resultdiv.style.display = "block";

		resultSpan.innerText = "Player Wins";

		scorePlayer.innerText++

		pausarJogo();

	}else if(rand == './img/icons8-hand-96.png' 
			 && imageOutput == './img/icons8-hand-rock-96.png'){


		resultdiv.style.display = "block";

		resultSpan.innerText = "Computer Wins";

		scoreComputer.innerText++

		pausarJogo();

	}else if(imageOutput == './img/icons8-hand-rock-96.png' 
			 && rand == './img/icons8-hand-scissors-96.png'){

		resultdiv.style.display = "block";

		resultSpan.innerText = "Player Wins";

		scorePlayer.innerText++

		pausarJogo();

	}else if(rand == './img/icons8-hand-rock-96.png' 
			 && imageOutput == './img/icons8-hand-scissors-96.png'){


		resultdiv.style.display = "block";

		resultSpan.innerText = "Computer Wins";

		scoreComputer.innerText++

		pausarJogo();

	}

}

function limparJogo(){

	imgPlayerOutput.setAttribute("src", "");

	imgComputerOutput.setAttribute("src", "");

	resultdiv.style.display = 'none';

}

function retomarJogo(){

	btnPedra.disabled = false;

	btnPapel.disabled = false;

	btnTesoura.disabled = false;
}

function pausarJogo(){

	btnPedra.disabled = true;

	btnPapel.disabled = true;

	btnTesoura.disabled = true;
}