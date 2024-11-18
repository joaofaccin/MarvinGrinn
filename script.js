function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

/*let index = 0;

function showNextLogo() {
    const logos = document.querySelectorAll('.carrossel-container img');
    index = (index + 1) % logos.length;
    const offset = -index * (210); // 200px de largura (ou mais, dependendo da imagem) + 10px de margem
    document.querySelector('.carrossel-container').style.transform = `translateX(${offset}px)`;
}

setInterval(showNextLogo, 3000); // Muda a cada 3 segundos*/
