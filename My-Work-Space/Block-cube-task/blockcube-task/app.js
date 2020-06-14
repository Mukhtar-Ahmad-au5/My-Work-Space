$(document).ready(function () {
    var signinbutton = $("#submitbutton");
    signinbutton.prop("disabled", true);
    $(".signUp").hide()

    $(".burgerMenu").click(function () {
        $(".sidebar").css("right", "0")
        $(".bodyCon").css("filter", "blur(2px)")
    })
    $(".fa-times").click(function () {
        $(".sidebar").css("right", "-60%")
        $(".bodyCon").css("filter", "blur(0)")
    })
    
    $("#signupForm").click(function(){
        $(".loginArea").remove()
        $(".signUp").show();
    })

    $("#signinForm").click(function(){
        $(".signUp").remove()
        $(".loginArea").show();
    })
    
    $("#email").change(function () {
        var email = $('#email').val();
    
        if (email !== "") {
            $(".errorEmail").css("display", "none");
            $("#email").css("border", "2px solid green");
            $("#email").css("background-color", "white");
    
            var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
            var validEmail = regEx.test(email);
    
            if (!validEmail) {
                $(".errorEmail").css("display", "block");
                $("#email").css("border", "2px solid red");
                $(".errorEmail").text("Enter a valid Email");
                signinbutton.prop("disabled", true);
            }
        } else {
            $(".errorEmail").css("display", "block");
            $("#email").css("border", "2px solid red");
            $(".errorEmail").text("Email is required");
            signinbutton.prop("disabled", true);
        }

    });
    
    $("#password").change(function () {
        var password = $('#password').val();
    
        if (password !== "") {
            $(".errorPassword").css("display", "none");
            $("#password").css("border", "2px solid green");
            $("#password").css("background-color", "white");
            signinbutton.prop("disabled", false);
    
            if (password.length > 0 && password.length < 8) {
                $(".errorPassword").css("display", "block");
                $("#password").css("border", "2px solid red");
                $(".errorPassword").text("The length of the password should be at least 8 characters");
                signinbutton.prop("disabled", true);
            }
        } else {
            $(".errorPassword").css("display", "block");
            $("#password").css("border", "2px solid red");
            $(".errorPassword").text("Password is required");
            signinbutton.prop("disabled", true);
        }
    });
    
});
