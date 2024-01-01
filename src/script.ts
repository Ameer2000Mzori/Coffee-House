// selecting elements Header Buttons
const sliderButtons = document.querySelectorAll("#slider-Buttons");
const imagesHolderEl: any = document.getElementsByClassName("images-Holder")[0];

// gelobal variables
let numCounter = 0;
// functions
const changeImg = (index, sliderBtn) => {
  sliderButtons.forEach((sliderBtn) => {
    sliderBtn.classList.remove("slider-Active");
  });

  sliderBtn.classList.add("slider-Active");
  imagesHolderEl.style.transform = `translateX(-${index}00%)`;

  startCounting();
};

// start counting function
const startCounting = () => {
  setInterval(() => {
    numCounter++;
    console.log(numCounter);
    if (numCounter > 4) {
      console.log(numCounter);
      numCounter = 0;
    }
  }, 1000);
};
// events
sliderButtons.forEach((sliderBtn, index) => {
  sliderBtn.addEventListener("click", () => {
    changeImg(index, sliderBtn);
  });
});
