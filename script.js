const message = 
"Merci pour votre message. Nous vous répondrons dans les plus brefs délais.";
document
.getElementById("ContactForm")
.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message)
});
