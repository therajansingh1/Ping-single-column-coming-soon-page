var emailArea = document.getElementById("email")
var errorMsg = document.getElementById("error")
function validate() {
    var email =emailArea.value.trim();
    let pattern = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
    if (email.match(pattern)) {
        errorMsg.classList.add("hidden");
    }
    else{
       errorMsg.classList.remove("hidden");
       emailArea.style.border="1.5px solid hsl(354, 100%, 66%)"
    }
    
}

