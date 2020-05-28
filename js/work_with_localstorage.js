window.addEventListener('DOMContentLoaded', function() {
    let userAnswers = localStorage.getItem('userAnswers');
    const btnSaveCheckbox = document.querySelector('.js-save-checkbox');
    let checkbox = document.querySelectorAll('input[type=checkbox]');

    if (userAnswers) {
        checkbox.forEach((el, index) => {
            el.checked = localStorage.getItem(`checkbox-${index}`);
        });
    } else {
        btnSaveCheckbox.addEventListener('click', function() {
            localStorage.setItem(`userAnswers`, `true`);
            checkbox.forEach((el, index) => {
                if (el.checked) {
                    localStorage.setItem(`checkbox-${index}`, `true`);
                }
            });
            document.querySelector('.user-questions').innerHTML = 'Сохранено!';
        });
        btnSaveCheckbox.classList.toggle('hide');
    }
});