const wrapper = document.getElementById('scrollWrapper');

let isDown = false;
let startX;
let scrollLeft;

wrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    wrapper.classList.add('active');
    startX = e.pageX - wrapper.offsetLeft;
    scrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener('mouseleave', () => {
    isDown = false;
    wrapper.classList.remove('active');
});

wrapper.addEventListener('mouseup', () => {
    isDown = false;
    wrapper.classList.remove('active');
});

wrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Se não estiver arrastando, sai da função
    e.preventDefault(); // Impede a seleção de texto
    const x = e.pageX - wrapper.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador para ajustar a sensibilidade
    wrapper.scrollLeft = scrollLeft - walk;
});
// Lista de imagens e legendas (agora com 6 imagens)
const images = [
    { src: "fotosnancy/IMG-20250225-WA0006.jpg", caption: "Teddy James, Nederlands" },
    { src: "fotosnancy/IMG-20250225-WA0007.jpg", caption: "Svanhild, Faroe Islands" },
    { src: "fotosnancy/IMG-20250225-WA0008.jpg", caption: "ATIANA, Australia" },
    { src: "fotosnancy/IMG-20250225-WA0009.jpg", caption: "Jazmine Kionna, USA" },
    { src: "fotosnancy/IMG-20250225-WA0010.jpg", caption: "Jocie Juritz, UK" },
    { src: "fotosnancy/IMG-20250225-WA0011.jpg", caption: "Winnoh, USA" }
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