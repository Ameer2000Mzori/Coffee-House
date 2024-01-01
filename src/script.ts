// selecting elements Header Buttons
const sliderButtons = document.querySelectorAll("#slider-Buttons");
const imagesHolderEl: any = document.getElementsByClassName("images-Holder")[0];

// gelobal variables
let numCounter = 0;
let slideCount = 0;
// functions
const changeImg = (index) => {
  numCounter = 0;
  sliderButtons.forEach((sliderBtn) => {
    sliderBtn.classList.remove("slider-Active");
  });
  sliderButtons[index].classList.add("slider-Active");
  imagesHolderEl.style.transform = `translateX(-${index}00%)`;
};

// start counting function
const startCounting = () => {
  setInterval(() => {
    numCounter++;
    console.log(numCounter);
    if (numCounter > 4) {
      numCounter = 0;
      if (slideCount === 0) {
        slideCount++;
        changeImg(slideCount);
      } else if (slideCount === 1) {
        slideCount++;
        changeImg(slideCount);
      } else {
        slideCount = 0;
        changeImg(slideCount);
      }
    }
  }, 1000);
};
// events
sliderButtons.forEach((sliderBtn, index) => {
  sliderBtn.addEventListener("click", () => {
    changeImg(index);
  });
});
window.addEventListener("load", () => {
  startCounting(0);
});
