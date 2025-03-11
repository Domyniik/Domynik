// Lista de imagens e legendas (agora com 6 imagens)
const images = [
  { src: " IMG-20250225-WA0006.jpg", caption: "Teddy James, Nederlands" },
  { src: " IMG-20250225-WA0007.jpg", caption: "Svanhild, Faroe Islands" },
  { src: " IMG-20250225-WA0008.jpg", caption: "ATIANA, Australia" },
  { src: " IMG-20250225-WA0009.jpg", caption: "Jazmine Kionna, USA" },
  { src: " IMG-20250225-WA0010.jpg", caption: "Jocie Juritz, UK" },
  { src: " IMG-20250225-WA0011.jpg", caption: "Winnoh, USA" }
];

let currentIndex = 0; // Índice da imagem atual

// Elementos da página
const imgElement = document.getElementById("image");
const captionElement = document.getElementById("caption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Função para atualizar a imagem e a legenda
function updateGallery() {
  imgElement.src = images[currentIndex].src;
  captionElement.textContent = images[currentIndex].caption;
}

// Função para ir para a imagem anterior
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  updateGallery();
});

// Função para ir para a próxima imagem
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  updateGallery();
});

// Inicializa a galeria
updateGallery();