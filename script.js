function getGreetingMessage() {
    const now = new Date();
    const hours = now.getHours();

    if (hours < 5) {
        return "Boa madrugada!";
    } else if (hours < 12) {
        return "Bom dia!";
    } else if (hours < 18) {
        return "Boa tarde!";
    } else {
        return "Boa noite!";
    }
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
}

document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById("greeting");
    const greetingMessage = getGreetingMessage();
    greetingElement.textContent = greetingMessage;

    setTimeout(showPopup, 1000)
    
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', function() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
    });
});
