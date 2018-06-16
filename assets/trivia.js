$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
/*
	var trivia = {
		questions: ['What position did Smalls play?',
								'Who autographed the ball Scotty stole from his step-dad?',
								'What was Kennys specialty pitch called? I dare you to hit it!',
								'How long was The Beast sentenced to be chained up to Mr. Mertles house?',
								'Who hit the homerun knocking the autographed ball over the fence?',
								'Who had the guts to make a move on the lifeguard Wendy Peffercorn?',
								'Who visited Benny in a dream convincing him to pickle the beast?',
								'What kind of shoes make you run faster and jump higher?',
								'What was the Beasts real name?',
								'Who autographed the ball Mr. Mertle gave Scotty?'],
		q1: ['A. First base',
				 'B. Catcher',
				 'C. Outfield',
				 'D. Thirdbase'],
		q2: ['A. Mickey Mantle',
				 'B. Babe Ruth',
				 'C. Hank Aaron',
				 'D. Shoeless Joe Jackson'],
		q3: ['A. Spitter',
				 'B. Heater',
				 'C. Cutter',
				 'D. Slider'],
		q4: ['A. 10 years',
				 'B. 5 years',
				 'C. 7 years',
				 'D. FOR-EVVV-VEERRRR'],
		q5: ['A. Benny',
				 'B. Ham',
				 'C. Yeah-Yeah',
				 'D. Scotty'],
		q6: ['A. Benny',
				 'B. Timmy',
				 'C. Tommy',
				 'D. Squints'],
		q7: ['A. Mickey Mantle',
				 'B. The Babe',
				 'C. Hank Aaron',
				 'D. His dad'],
		q8: ['A. P.F. Flyers',
				 'B. Nike',
				 'C. Reebok',
				 'D. Puma'],
		q9: ['A. Hercules',
				 'B. Titan',
				 'C. Zeus',
				 'D. Rusty'],
		q10: ['A. Babe Ruth',
				  'B. Lou Gehrig',
				  'C. Earle Combs',
				  'D. All the above']		 						
	}
*/
var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What position did Smalls play??',
	possibleAnswers : ['A. First base',
				 'B. Catcher',
				 'C. Outfield',
				 'D. Thirdbase'],
	flags : [false, false, true, false],
	answer : 'C. Outfield'
};

var q2 = {
	question: 'Who autographed the ball Scotty stole from his step-dad?',
	possibleAnswers: ['A. Mickey Mantle',
				 'B. Babe Ruth',
				 'C. Hank Aaron',
				 'D. Shoeless Joe Jackson'],
	flags : [false, true, false, false],
	answer : 'B. Babe Ruth'
};

var q3 = {
	question : 'What was Kennys specialty pitch called? I dare you to hit it!',
	possibleAnswers : ['A. Spitter',
				 'B. Heater',
				 'C. Cutter',
				 'D. Slider'],
	flags : [false, true, false, false],
	answer : 'B. Heater'
};

var q4 = {
	question : 'How long was The Beast sentenced to be chained up to Mr. Mertles house?',
	possibleAnswers : ['A. 10 years',
				 'B. 5 years',
				 'C. 7 years',
				 'D. FOR-EVVV-VEERRRR'],
	flags : [false, false, false, true],
	answer : 'D. FOR-EVVV-VEERRRR'
};

var q5 = {
	question : 'Who hit the homerun knocking the autographed ball over the fence?',
	possibleAnswers : ['A. Benny',
				 'B. Ham',
				 'C. Yeah-Yeah',
				 'D. Scotty'],
	flags : [false, false, false, true],
	answer : 'D. Scotty'
};

var q6 = {
	question : 'Who had the guts to make a move on the lifeguard Wendy Peffercorn?',
	possibleAnswers : ['A. Benny',
				 'B. Timmy',
				 'C. Tommy',
				 'D. Squints'],
	flags : [false, false, false, true],
	answer : 'D. Squints'
};

var q7 = {
	question : 'Who visited Benny in a dream convincing him to pickle the beast?',
	possibleAnswers : ['A. Mickey Mantle',
				 'B. The Babe',
				 'C. Hank Aaron',
				 'D. His dad'],
	flags : [false, true, false, false],
	answer : 'B. The Babe'
};

var q8 = {
	question : 'What kind of shoes make you run faster and jump higher?',
	possibleAnswers : ['A. P.F. Flyers',
				 'B. Nike',
				 'C. Reebok',
				 'D. Puma'],
	flags : [true, false, false, false],
	answer : 'A. P.F. Flyers'
};

var q9 = {
	question : 'What was the Beasts real name?',
	possibleAnswers : ['A. Hercules',
				 'B. Titan',
				 'C. Zeus',
				 'D. Rusty'],
	flags : [true, false, false, false],
	answer : 'A. Hercules'
};

var q10 = {
	question : 'Who autographed the ball Mr. Mertle gave Scotty?',
	possibleAnswers : ['A. Babe Ruth',
				  'B. Lou Gehrig',
				  'C. Earle Combs',
				  'D. All the above'],
	flags : [false, false, false, true],
	answer : 'D. All the above'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}


//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


});