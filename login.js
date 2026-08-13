document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "student" && password == "1234") {

        window.location.href = "index.html";

    } else {

        document.getElementById("message").innerHTML =
        "Wrong username or password!";

    }

});