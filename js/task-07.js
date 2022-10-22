const inputScroll = document.querySelector('#font-size-control');
const magicSpan = document.querySelector('#text');


inputScroll.addEventListener('input', (event) => {
    magicSpan.style.fontSize = event.target.value+'px';
});