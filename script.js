const message = 
"Merci pour votre message, notre royauté reviendra vers vous dans les plus brefs délais.";
document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
});
