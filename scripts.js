document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os vídeos
    const videos = document.querySelectorAll("video");
  
    // Adiciona o evento `canplay` para cada vídeo
    videos.forEach((video) => {
      video.addEventListener("canplay", () => {
        video.classList.add("loaded");
        console.log(`Vídeo carregado`);
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
    const textElements = document.querySelectorAll(
      ".text, .text1-page2, .text2-page2, .text1-page3"
    );
  
    // Função para verificar se o elemento está visível e aplicar a animação
    function handleScroll() {
      textElements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add("visible"); // Aplica a animação quando o elemento entra na viewport
        }
      });
    }
  
    // Executa ao carregar a página
    handleScroll();
  
    // Garante que as animações ocorram ao rolar a página
    window.addEventListener("scroll", handleScroll);
  });
  