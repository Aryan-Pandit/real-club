document.addEventListener("DOMContentLoaded", () => {
    const newsImages = document.querySelectorAll(".news-image");
  
    newsImages.forEach(image => {
      image.addEventListener("click", () => {
        const link = image.getAttribute("data-link");
        if (link) {
          window.location.href = link;
        }
      });
    });
  });
  