const hambutton = document.getElementById("menu");
const navigation = document.querySelector('.navigation');
const linkDirectioner = document.querySelectorAll('.navigation ul li a');

hambutton.addEventListener('click', () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");
})

linkDirectioner.addEventListener('click', () => {
    navigation.classList.remove("open");
    hambutton.classList.remove("open");
})