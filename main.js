//Toggling Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

//Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));



const translations = {
    en: {
        home: "Home",
        about: "About Nancy",
        studies: "Studies",
        work: "Work",
        gallery: "Gallery",
        contact: "Contact",
        welcome: "Hello, <br>I am <span class='home-title-color'>Nancy</span><br> and This is My Portfolio",
        titulo:"I'm Nancy",
        texto:"I'm Nancy Oliveira, your shoe brand consultant <br> I made it my mission to simplify the sourcing process for brands, designers and founders. Based on a decade of experience in the development and production of footwear for new and established brands, many of them from the very first shoe! <br> It's been an incredible journey, and I'm confident that by providing accurate information on crucial factors like costs and lead times, as well as sharing best strategies and highlighting common mistakes, you'll be in the best position possible to determine the right solutions for your project!",
        titulo2:"LAUNCH YOUR OWN FOOTWEAR BRAND IN 2025, STARTING NOW!",
        texto2:"In this hands-on workshop, I'll walk you through 4 steps to turn your footwear brand vision into reality, sharing golden advice on how to select the right manufacturers, optimize prototypes, manage costs, develop effective pricing strategies, and source high-quality materials.",
        footerfooterfooter:"2025 © All rights reserved",
        nome: "Name:",
        email: "E-mail:",
        msg:"Message:",
        btenviar:"Send"
  },
  pt: {
    home: "Página Inicial",
    about: "A Nancy",
    studies: "Estudos",
    work: "Trabalhos",
    gallery: "Galeria",
    contact: "Contacto",
    welcome: "Olá, <br>Eu Sou a <span class='home-title-color'>Nancy</span><br> e Esse é Meu Portfólio",
    titulo:"Eu sou a Nancy",
    texto:"Sou Nancy Oliveira, sua consultora de marca de calçado <br> Assumi como missão simplificar o processo de sourcing para marcas, designers e fundadores. Com base em uma década de experiência no desenvolvimento e produção de calçados para marcas novas e estabelecidas, muitas delas desde o primeiro calçado! <br> Tem sido uma jornada incrível e estou confiante de que, ao fornecer informações precisas sobre fatores cruciais como custos e prazos de entrega, além de compartilhar as melhores estratégias e destacar erros comuns, você estará na melhor posição possível para determinar as soluções certas para o seu projeto!",
    titulo2:"LANCE SUA PRÓPRIA MARCA DE CALÇADOS EM 2025, COMEÇANDO AGORA!",
    texto2:"Neste workshop prático, vou orientá-lo em 4 etapas para transformar a visão da sua marca de calçados em realidade, compartilhando conselhos de ouro sobre como selecionar os fabricantes certos, otimizar protótipos, gerenciar custos, desenvolver estratégias de preços eficazes e adquirir materiais de alta qualidade.",
    footerfooterfooter:"2025 © Todos os direitos reservados",
    nome: "Nome:",
    email: "E-mail:",
    msg:"Mensagem:",
    btenviar:"Enviar"
  },
  es: {
      home: "Inicio",
      about: "Sobre Nancy",
      studies: "Estudios",
      work: "Trabajos",
      gallery: "Galería",
      contact: "Contacto",
      welcome: "Hola, <br>Soy <span class='home-title-color'>Nancy</span><br> y Este es Mi Portafolio",
      texto: "Soy Nancy Oliveira, tu asesora de marca de zapatos. Mi misión fue simplificar el proceso de abastecimiento para marcas, diseñadores y fundadores. Basado en una década de experiencia desarrollando y produciendo calzado para marcas nuevas y establecidas, ¡muchas desde el primer zapato! Ha sido un viaje increíble y estoy seguro de que al brindar información precisa sobre factores cruciales como costos y plazos de entrega, además de compartir las mejores estrategias y resaltar los errores comunes, estará en la mejor posición posible para determinar las soluciones adecuadas para su proyecto.",
      titulo: "Soy Nancy",
      titulo2:"¡Lanza tu propia marca de calzado en 2025, a partir de ahora!",
      texto2:"En este taller práctico, lo guiaré a través de 4 pasos para convertir la visión de su marca de calzado en realidad, compartiendo valiosos consejos sobre cómo seleccionar los fabricantes adecuados, optimizar prototipos, gestionar costos, desarrollar estrategias de precios efectivas y obtener materiales de alta calidad.",
      footerfooterfooter:"2025 © Todos los derechos reservados",
      nome: "Nombre:",
      email: "E-mail:",
      msg:"Mensaje:",
      btenviar:"Enviar"
    }
};



document.getElementById('language-selector').addEventListener('change', function() {
  const selectedLang = this.value;
  document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.getAttribute('data-lang');
      if (translations[selectedLang][key]) {
          el.innerHTML = translations[selectedLang][key];
      }
  });
});

