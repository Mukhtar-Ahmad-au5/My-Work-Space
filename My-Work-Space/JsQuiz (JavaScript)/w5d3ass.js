var answer
$(document).ready(function () {

    var question = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy'

    $.ajax({
        url: question,

        success: function (response) {
            var randomNumber = Math.floor(Math.random() * 10)
            $('#dq').html(response.results[randomNumber].question).addClass('text-light font-weight-lighter')
            answer = response.results[randomNumber].correct_answer
        },
        error: function () {
            alert('"Your API link is dead"')
            $('#result').text('Ohh Crap! :(  Something went wrong')
            clearTimeout(timerId)
        }
    })
    var timer = document.getElementById('seconds');
    var end = document.getElementById('qo');
    var timeLeft = 30;
    var timerId = setInterval(countdown, 1000);
    var score = 0

    function countdown() {
        timer.style.color = "white"
        // end.style.color = "#ffc107"
        if (timeLeft < 0) {
            clearTimeout(timerId);
            alert('Your time is up');
            $('#result').hide()
            $('#seconds').hide()
            $('#sr').hide()
            $('#points').hide()
            end.innerHTML = "Quiz Over!"
            $('#fs').text('Your Final Score: ' + score).addClass('float-right')
            $('#submit').off()
            $('#submit').on('click', function () {
                alert('Unable to submit: Time up!')
            })
            $('#skip').off()
            $('#skip').on('click', function () {
                alert('Unable to submit: Time up!')
            })
        } else {
            timer.innerHTML = timeLeft;
            timeLeft--;
        }
    }
    $('#skip').on('click', function () {
        $.ajax({
            url: question,
            success: function (response) {
                var randomNumber = Math.floor(Math.random() * 10)
                $('#dq').html(response.results[randomNumber].question).addClass('text-light font-weight-lighter')
                answer = response.results[randomNumber].correct_answer
            },
            error: function () {
                alert('"Your API link is dead"')
                $('#result').text('Ohh Crap! :(  Something went wrong')
                clearTimeout(timerId)
            }
        })
    })

    $('#submit').on('click', function () {
        $('#result').removeClass('text-danger')
        $('#result').show()
        if ($('input').val() == '')
            alert('Please type your answer!')
        else if (answer == $('input').val()) {
            $('#result').text('Correct Answer!').addClass('text-success text-center')
            setTimeout(function(){ $('#result').hide()}, 1000);
            score++;
            $('#points').text('Score : ' + score).addClass('float-right text-light')
            document.getElementById('ans').value = ''

            $.ajax({
                url: question,
                success: function (response) {
                    var randomNumber = Math.floor(Math.random() * 10)
                    $('#dq').text(response.results[randomNumber].question).addClass('text-light font-weight-lighter')
                    answer = response.results[randomNumber].correct_answer
                },
                error: function () {
                    alert('"Your API link is dead"')
                    $('#result').text('Ohh Crap! :(  Something went wrong')
                    clearTimeout(timerId)
                }
            })
        }
        else {
            $('#result').text('Wrong Answer!').addClass('text-danger text-center buzz')
            setTimeout(function(){ $('#result').hide()}, 1000);
        }
    })
    
})