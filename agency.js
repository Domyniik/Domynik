// Lista de imagens e legendas (agora com 6 imagens)
const images = [
  { src: " images/IMG-20250225-WA0006.jpg", caption: "Teddy James, Nederlands" },
  { src: " images/IMG-20250225-WA0007.jpg", caption: "Svanhild, Faroe Islands" },
  { src: " images/IMG-20250225-WA0008.jpg", caption: "ATIANA, Australia" },
  { src: " images/IMG-20250225-WA0009.jpg", caption: "Jazmine Kionna, USA" },
  { src: " images/IMG-20250225-WA0010.jpg", caption: "Jocie Juritz, UK" },
  { src: " images/IMG-20250225-WA0011.jpg", caption: "Winnoh, USA" }
];

let currentIndex = 0; // Ãndice da imagem atual

// Elementos da pÃ¡gina
const imgElement = document.getElementById("image");
const captionElement = document.getElementById("caption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// FunÃ§Ã£o para atualizar a imagem e a legenda
function updateGallery() {
  imgElement.src = images[currentIndex].src;
  captionElement.textContent = images[currentIndex].caption;
}

// FunÃ§Ã£o para ir para a imagem anterior
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateGallery();
});

// FunÃ§Ã£o para ir para a prÃ³xima imagem
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateGallery();
});

// Inicializa a galeria
updateGallery();