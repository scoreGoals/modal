let modal = document.querySelector('.m-modal');

// Когда пользователь кликает кнопку, открываем модальное окно.
document.querySelector(".m-btn").onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь кликает 'x', закрываем модальное окно.
document.querySelectorAll(".m-close")[0].onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь кликает по затемненному участку, закрываем модальное окно.
document.querySelector(".m-modal__bg").onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь щелкает 'Esc', закрываем модальное окно.
document.onkeyup = function(event) {
    if (event.keyCode === 27) {
        modal.style.display = "none";
    }
}

// Когда пользователь щелкает в любом месте за пределами модального, закрываем его.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}