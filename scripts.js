document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os vídeos
    const videos = document.querySelectorAll(".video-page1, .video-page2");
    
    // Adiciona o evento `canplay` para cada vídeo
    videos.forEach((video) => {
      video.addEventListener("canplay", () => {
        video.classList.add("loaded");
        console.log(`Vídeo ${video.classList.contains('video-page1') ? '1' : '2'} carregado`);
      });
    });
  
    // Função para verificar se o elemento está visível na janela de visualização
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
  
    // Aplica o efeito de rolagem aos textos
    const textElements = document.querySelectorAll(".text, .text1-page2, .text2-page2, .text1-page3");
  
    function handleScroll() {
      textElements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add("visible");
        }
      });
    }
  
    // Executa ao carregar e ao rolar
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });
  