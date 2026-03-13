document.getElementById("subscribeForm").addEventListener("submit", function (e) {

    e.preventDefault();

    document.getElementById("thankMessage").innerHTML =
        "Thank you for subscribing!";

    this.reset();

});