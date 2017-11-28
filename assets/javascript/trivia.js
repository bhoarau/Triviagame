// questions for trivia
var trivia = [{
        question: "Who was the youngest MVP?",
        answer: ["D. Rose", "L. James", "K. Bryant", "M. Jordan"],
        name: "Rose",
        correct: "D. Rose",
        divClass: ".Rose"
    },
    {
        question: "Where was the first NBA game played",
        answer: ["Chicago", "Toronto", "New York", "Las Angelas"],
        name: "firstNba",
        correct: "Toronto",
        divClass: ".firstNba"
    },
    {
        question: "Who recently averaged a triple double in the 2016-2017 season?",
        answer: ["R. Westbrooke", "J. Harden", "L. James", "D. Booker"],
        name: "Triple",
        correct: "R. Westbrooke",
        divClass: ".Triple"
    },
    {
        question: "How many games are in a single season in the NBA?",
        answer: ["96", "75", "82", "88"],
        name: "season",
        correct: "82",
        divClass: ".season"
    },
    {
        question: "Who holds the nickname The Black Mamba?",
        answer: ["K. Leonard", "W. Chameberlin", "K. Irving", "K. Bryant"],
        name: "nickname",
        correct: "K. Bryant",
        divClass: ".nickname"
    },
    {
        question: "Which Team has the most championships?",
        answer: ["Knicks", "Bulls", "Lakers", "76ers"],
        name: "Teams",
        correct: "Lakers",
        divClass: ".Teams"
    },
    {
        question: "Which NBA player has the most NBA championships",
        answer: ["B. Russel", "K. Abdul-Jabbar", "M. Jordan", "S. Jones"],
        name: "Player",
        correct: "B. Russel",
        divClass: ".Player"
    },
    {
        question: "Shortest player in the NBA?",
        answer: ["I. Thomas", "M. Bogues", "N. Robinson", "E. Boykins"],
        name: "short",
        correct: "M. Bogues",
        divClass: ".short"
    },
    {
        question: "What is the standard height of the basket?",
        answer: ["14'", "10'", "8'", "12'"],
        name: "Height",
        correct: "10'",
        divClass: ".Height"
    },
    {
        question: "Who scored 100 Points in a single NBA game?",
        answer: ["W. Chamberlain", "K. Bryant", "D. Booker", "D. Thompson"],
        name: "Score",
        correct: "W. Chamberlain",
        divClass: ".Score"
    }
]
// amount of answer choices
var answerChoices = ["first", "second", "third", "forth"];

// Start quiz
var start = $("#start-btn").on('click', function () {
    $(this).parent().hide();
    $('.container').show();
    countdown(120);
    questionDisplay();
});

var questionDisplay = function () {
    $(".trivia :not('#sub-but')").empty();

    // loop for questions
    for (var j = 0; j < 10; j++) {
        $('.trivia').prepend('<div class="' + trivia[j].name + '"></div>');
        $(trivia[j].divClass).append('<div class ="question -title">' + trivia[j].question + '</div>');
        // loops through answers
        for (var i = 0; i <= 3; i++) {
            $(trivia[j].divClass).append('<input type="radio"  name="' + trivia[j].name + '" value="' + trivia[j].answer[i] + '"/><Ans for="' + answerChoices[i] + '">' + trivia[j].answer[i] + '</ans>');
        }
        $('.trivia').prepend('<hr />');
    }
}

// timer
var countdown = function (seconds) {

    var time = setInterval(function () {
        seconds = seconds - 1;
        $("#time-Left").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(2000);
            var correctAnswers = 0;
            var IncorrectAnswers = 0;


            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + trivia[i].name + '"]:checked').val() === trivia[i].correct) {

                    correctAnswers++;
                    console.log("correct! number:" + i)
                } else {
                    IncorrectAnswers++;
                    console.log("Incorrect! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            $('#incorrectTimesUp').append(IncorrectAnswers);
            $('#timesUp').fadeIn(2000).show();
            clearInterval(time);
            return;
        }
    }, 2000);

    // submission pre timer done
    $('#sub-but').on('click', function () {
        clearInterval(time);
    })
};


// reviews the quiz to determine score
var quizReview = $('#sub-but').on('click', function () {

    var correctAnswers = 0;
    var IncorrectAnswers = 0;


    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + trivia[i].name + '"]:checked').val() === trivia[i].correct) {

            correctAnswers++;
        } else {
            IncorrectAnswers++;
        };
    };


    countdown();
    $('.container').fadeOut(2000);
    $('#answer').show();
    $('#correct').append(correctAnswers);
    $('#Incorrect').append(IncorrectAnswers);

});