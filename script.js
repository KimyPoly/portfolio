document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".carousel-control.prev");
  const nextButton = document.querySelector(".carousel-control.next");

  let currentIndex = 0;

  const showSlide = index => {
      const offset = -index * 100 + "%";
      carousel.style.transform = `translateX(${offset})`;
  };

  const nextSlide = () => {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showSlide(currentIndex);
  };

  const prevSlide = () => {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentIndex);
  };

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  setInterval(nextSlide, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const carouselBis = document.querySelector(".carousel-bis");
  const carouselItemsBis = document.querySelectorAll(".carousel-item-bis");
  const prevButtonBis = document.querySelector(".carousel-control-bis.prev");
  const nextButtonBis = document.querySelector(".carousel-control-bis.next");


  let currentIndexBis = 0;

  const showSlideBis = index => {
      const offsetBis = -index * 100 + "%";
      carouselBis.style.transform = `translateX(${offsetBis})`;
  };

  const nextSlideBis = () => {
      currentIndexBis = (currentIndexBis + 1) % carouselItemsBis.length;
      showSlideBis(currentIndexBis);
  };

  const prevSlideBis = () => {
      currentIndexBis = (currentIndexBis - 1 + carouselItemsBis.length) % carouselItemsBis.length;
      showSlideBis(currentIndexBis);
  };

  nextButtonBis.addEventListener("click", nextSlideBis);
  prevButtonBis.addEventListener("click", prevSlideBis);

  setInterval(nextSlideBis, 3500);
});


