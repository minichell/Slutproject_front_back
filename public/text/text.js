const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button2');

storageInput.addEventListener('input', letter => {
    text.textContent = letter.target.value
})
