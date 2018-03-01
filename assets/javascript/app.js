$(document).ready(function() {

	let trivia = [{
		question: "What was the aliens' intergalactic theme park?",
		choices: ["Nerdluck World", "Halfwit Hole","Moron Mountain", "Blockhead Beach"],
		answer: "C", 
		ansDesc: "Moron Mountain"
	},
	{
		question: "Which of these NBA stars did NOT get their talent stolen by the aliens?",
		choices: ["Charles Barkley", "Larry Bird", "Patrick Ewing", "Tyrone Muggsy Bogues"],
		answer: "B" ,
		ansDesc:"Larry Bird"
	},
	{
		question: "Who lassoes MJ and brings him down to the Looney Tunes world?",
		choices: ["Yosemite Sam", "Tasmanian Devil", "Wile E. Coyote", "Marvin the Martian"],
		answer: "A",
		ansDesc: "Yosemite Sam"
		
	},
	{
		question: "What did the Nerdlucks turn into?",
		choices: ["Morons", "Slammer Jammers", "Monstars", "Alien All-Stars"],
		answer: "C",
		ansDesc: "Monstars"
	},
	{
		question: "What is the first thing Bugs does when he meets MJ?",
		choices: ["Kisses him", "Jumps in his lap", "Hugs him", "Gets an autograph"],
		answer: "A",
		ansDesc: "Kisses him"
	},
	{
		question: "What name does Bugs Bunny call Lola Bunny to upset her?",
		choices: ["Sweet Cheeks", "Honey", "Baby", "Doll"],
		answer: "D",
		ansDesc: "Doll"
	},
	{
		question: "When they sneak into Michael's house underground, where does Daffy end up?",
		choices: ["Front door", "Trophy room", "Basement", "Dog house"],
		answer: "D",
		ansDesc: "Dog house"
	},
	{
		question: "What position does Daffy Duck play?",
		choices: ["Small Forward", "Power Forward","Shooting Guard", "Point Guard"],
		answer: "B", 
		ansDesc: "Power Forward"
	},
	{
		question: "What concoction does Bugs help make his team win the game?",
		choices: ["Michael's Secret Weapon", "Michael's Secret Potion", "Michael's Secret Stuff", "Michael's Special Stuff"],
		answer: "C",
		ansDesc: "Michael's Secret Stuff"
	},
	{
		question: "How does MJ make the game winning shot?",
		choices: ["Bounces the ball on Daffy's head", "Half-court jumpshot", "Stretches his arms to the basket","Full-court shot"],
		answer: "C",
		ansDesc: "Stretches his arms to the basket"
	}
	];

	const question = document.querySelector('#question');
    const A = document.querySelector('#A');
    const B = document.querySelector('#B');
    const C = document.querySelector('#C');
	const D = document.querySelector('#D');
	
	


    var questionNum = 0;
    var clock = $(".clock");
    var correctCount = 0;
    var wrongCount = 0;
    var timeUp = 0;
	var loop;
    var startScreen;
    var startGame = true;
	var counter = 3000;
	
	clock.text(counter);

	$(".playArea").hide();
	$("#right").hide();
	$("#wrong").hide();
	$("#noTime").hide();
	$("#goodluck").hide();

	$("#startBtn").click(function (){
		$('#start').hide();
		$("#goodluck").html(`<img src="./assets/images/GoodLuck.gif">`);
		$("#goodluck").show();
		setTimeout(function(){
			$("#goodluck").hide();
			$(".playArea").show();
			counter = 3000;
		}, 3000);
        if (startGame) {
            createTrivia();
            timerloop();
            startGame = false;
        }
	});

	function createTrivia() {
        question.textContent = trivia[questionNum].question;
        A.textContent = trivia[questionNum].choices[0];
        B.textContent = trivia[questionNum].choices[1];
        C.textContent = trivia[questionNum].choices[2];
        D.textContent = trivia[questionNum].choices[3];
	}
	
	$(".answerBtn").click(function (){
		counter = 3000;
		let pick = event.target.id;

		if (pick === trivia[questionNum].answer){
			correctCount ++;
			$(".playArea").hide();
			$("#right").html(`<h2>Congrats!</h2><h2>You know your stuff!</h2><img src="./assets/images/wow.gif">`);
			$("#right").show();
			setTimeout(function(){
				$("#right").hide();
                $(".playArea").show();
                counter = 3000;
			}, 5000);
			
		} else {
			wrongCount ++;
			$(".playArea").hide();
			$("#wrong").html(`<h2>You're wrong</h2> <h2>The right answer was (${trivia[questionNum].answer}).</h2> <h2>${trivia[questionNum].ansDesc}</h2><img src="./assets/images/nerdlucks.gif">`);
			$("#wrong").show();
			setTimeout(function(){
				$("#wrong").hide();
                $(".playArea").show();
                counter = 3000;
			}, 5000);
		}
		questionNum++;
		if (questionNum < trivia.length){
			createTrivia();
		} else {
			clearInterval(loop);
			$(".playArea").html(`<h2>Score:</h2><h3>Right Answers: ${correctCount}</h3>
			<h3> Wrong Answers: ${wrongCount}</h3><h3>Chickened out on: ${timeUp}</h3><img src="./assets/images/ThatsAllFolks.gif">`);
		}
	})

	function timerloop() {
		loop = setInterval(function() {
			counter --;
			clock.text(Math.round(counter/100));

			if (counter === 0) {
				$(".playArea").hide();
				$("#noTime").html(`<h2> You ran out of time..</h2><img src="./assets/images/Chicken.gif">`);
				$("#noTime").show();
				setTimeout(() => {
                    $('#noTime').hide();
                    $('.playArea').show();
                    counter = 3000;
                }, 5000);
                questionNum++;
                timeUp++;
				counter = 3000;
				
				if (questionNum === trivia.length) {
                    clearInterval(Loop);
                    $('.playArea').html(`<h2>Results:</h2><h3>You got ${correctCount} right.</h3><h3>You got ${wrongCount} answers wrong.</h3><h3>You chickened out on ${timeUp} answers.<img src=".'assets/images/ThatsAllFolks.gif">`);
                    
                } else {
                    createTrivia();
                }
			}
		}, 10);
	}


  

    
})