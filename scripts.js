document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os vídeos
    const videos = document.querySelectorAll("video");
  
    // Adiciona o evento `canplay` para cada vídeo
    videos.forEach((video) => {
      video.addEventListener("canplay", () => {
        video.classList.add("loaded");
      });
    });
  
    // Função para verificar se o elemento está visível na janela de visualização
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Aplica o efeito de rolagem aos textos
    const textElements = document.querySelectorAll(".text, .text1-page2, .text2-page2");
  
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
  