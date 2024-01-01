// selecting elements Header Buttons
const sliderButtons = document.querySelectorAll("#slider-Buttons");
const imagesHolderEl: any = document.getElementsByClassName("images-Holder")[0];

// gelobal variables
let numCounter = 0;
let slideCount = 0;
// functions

// change image function by munipulating the translateX
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
    // calling our change image function
    imageChangeLogic();
  }, 1000);
};

const imageChangeLogic = () => {
  // our if else lader
  if (numCounter > 4) {
    numCounter = 0;
    if (slideCount < 2) {
      slideCount++;
    } else {
      slideCount = 0;
    }
    changeImg(slideCount);
  }
};

// events
sliderButtons.forEach((sliderBtn, index) => {
  sliderBtn.addEventListener("click", () => {
    changeImg(index);
  });
});
startCounting(0);
