let currentSlideIndex = 0;
const reviews = document.querySelectorAll('.review');

function showSlides() {
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none"; // Esconde todas as avaliações
    }
    currentSlideIndex++;
    if (currentSlideIndex > reviews.length) {currentSlideIndex = 1} // Reinicia se chegar ao fim
    reviews[currentSlideIndex - 1].style.display = "block"; // Mostra a avaliação atual
    setTimeout(showSlides, 7000); // Muda a avaliação automaticamente a cada 5 segundos
}

function currentSlide(n) {
    currentSlideIndex = n - 1; // Atualiza o índice da avaliação atual
    showSlides();
}

// Iniciar a apresentação de slides
showSlides();
