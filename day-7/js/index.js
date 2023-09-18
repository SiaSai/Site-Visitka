const spider = document.querySelector('.spider')
function spiderSound(){
     const audio = new Audio();
     audio.preload = 'auto';
     audio.src='./music/Main_Title.wav'
     audio.play()
     audio.volume = 0.05;
}
spider.onclick = spiderSound;

document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})


document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})


window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});


document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// ------------------------
document.getElementById("open-modal-btn-1").addEventListener("click", function() {
    document.getElementById("my-modal-1").classList.add("open")
})


document.getElementById("close-my-modal-btn-1").addEventListener("click", function() {
    document.getElementById("my-modal-1").classList.remove("open")
})


window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-1").classList.remove("open")
    }
});


document.querySelector("#my-modal-1 .modal__box-1").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal-1").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});