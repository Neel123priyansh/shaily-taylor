const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

h1.addEventListener('mouseover', () => {
    h2.classList.toggle('change');
});
h1.addEventListener('mouseout', () => {
    h2.classList.toggle('change');
});
