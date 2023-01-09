document.addEventListener('DOMContentLoaded', () => {
    // Кнопка по которой происходит клик
    let callBackButton = document.querySelector('#callBack_button');

    // Модальное окно, которое необходимо открыть
    let modal1 = document.querySelector('#modal-1');
    
    // Кнопка "закрыть" внутри модального окна
    let closeButton = modal1.querySelector('modal__close-button');

    callBackButton.onclick = function () {
        modal1.classList.add('modal_active');
    }

    closeButton.onclick = function () {
        modal1.classList.remove('modal_active');
    }
    console.log(closeButton)
});
