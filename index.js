const imagesCarousel = ["image-1", "image-2", "image-3", "image-4"];
const btnPrecedent = document.querySelector(".prec");
const btnSuivant = document.querySelector(".suiv");
const currentImage = document.querySelector(".currentImg");
const currentImageLeft = document.querySelector(".currentImgLeft");
const currentImageRight = document.querySelector(".currentImgRight");

const getImagePosition = () => {
  let currentImagePosition = currentImage.src.split("-")[1].split(".")[0];
  return currentImagePosition;
};

const goforward = () => {
  console.log(
    parseInt(getImagePosition()) - 1,
    getImagePosition(),
    parseInt(getImagePosition()) + 1
  );

  let pos =
    parseInt(getImagePosition()) >= imagesCarousel.length
      ? 1
      : parseInt(getImagePosition()) + 1;
  let posLeft = pos <= 1 ? imagesCarousel.length : pos - 1;
  let posRight = pos >= imagesCarousel.length ? 1 : pos + 1;

  currentImage.src = `assets/image-${pos}.jpg`;
  currentImageLeft.src = `assets/image-${posLeft}.jpg`;
  currentImageRight.src = `assets/image-${posRight}.jpg`;
  console.log(posLeft, pos, posRight);
};

const goback = () => {
  let pos =
    parseInt(getImagePosition()) <= 1
      ? imagesCarousel.length
      : parseInt(getImagePosition()) - 1;
  let posLeft = pos <= 1 ? imagesCarousel.length : pos - 1;
  let posRight = pos >= imagesCarousel.length ? 1 : pos + 1;

  currentImage.src = `assets/image-${pos}.jpg`;
  currentImageLeft.src = `assets/image-${posLeft}.jpg`;
  currentImageRight.src = `assets/image-${posRight}.jpg`;
  console.log(posLeft, pos, posRight);
};

btnSuivant.addEventListener("click", () => {
  goforward();
});

btnPrecedent.addEventListener("click", () => {
  goback();
});
