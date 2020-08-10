var btn = document.getElementById("btn")
var input = document.getElementById("input")
var message = document.getElementById("message")
var content;
btn.addEventListener("mouseover", function () {
    content = input.value;
    // var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(\.[a-z]{2-8})?$/
    var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regx.test(content)) {
        return true
    } else {
        message.style.display = "block";
        input.style.borderColor = "hsl(354, 100%, 66%)"
    }
})
input.addEventListener("click", function () {
    message.style.display = "none";
    input.style.borderColor = "hsl(223, 100%, 88%)"
})