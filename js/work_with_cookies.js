window.addEventListener('DOMContentLoaded', function() {
    const wrapperInputCity = document.querySelector('.input-city-wrp');
    const wrapperTextCity = document.querySelector('.text-with-city-wrp');
    const textWithCity = document.querySelector('.text-with-city');
    let userCity = getCookie("city");

    if (userCity) {
        textWithCity.textContent = `Ваш город - ${userCity}`;
        wrapperTextCity.classList.toggle('hide');
    } else {
        wrapperInputCity.classList.toggle('hide');
    }

    document.querySelector('.js-save-city').addEventListener('click', function () {
        let inputCity = document.querySelector('.input-city');
        if (inputCity.value === '') {
            inputCity.style.border = '1px solid red';
            return false;
        } else {
            inputCity.style.border = '1px solid black';
        }
        setCookie('city', `${inputCity.value}`);
        wrapperInputCity.innerHTML = 'Город сохранен!';
    });

    document.querySelector('.js-remove-city').addEventListener('click', function () {
        deleteCookie("city");
        wrapperTextCity.innerHTML = 'Город удален!';
    });
});