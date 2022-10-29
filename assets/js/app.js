
const modalOverlay = document.querySelector(".modalOverlay");
const closePopupModal = document.querySelector(".close-popup-modal");

// Close popup by clicking on the close icon==========================
closePopupModal.addEventListener("click", (e) => {
  closeModalPopup();
});



function closeModalPopup() {
  modalOverlay.style.display = "none";
}


// Close popup by clicking outside====================================
window.addEventListener("click", (e) => {
  if (e.target.closest("div").classList.contains("modalOverlay")) {
    closeModalPopup();
  } 
});



// =======================================================



let textToRead = new SpeechSynthesisUtterance();
let speechVoices = speechSynthesis.getVoices();
textToRead.voice = speechVoices[2];
let tags = document.querySelectorAll('a,h1,h2,h3, div, span, p'); // add more tags for you project
tags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
        
      textToRead.text = e.target.innerText;
        speechSynthesis.speak(textToRead);
        
        let interval = setInterval(() => {
            if(!speechSynthesis.speaking){
                clearInterval(interval);
            }
        }, 100);
        
    });
});





