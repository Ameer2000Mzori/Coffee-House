// selecting elements Header Buttons
const sliderButtons = document.querySelectorAll("#slider-Buttons");
const imagesWrapEl = document.getElementsByClassName("images-Wrap")[0];
// gelobal variables

// functions
const changeImg = (index, sliderBtn) => {
  sliderButtons.forEach((sliderBtn) => {
    sliderBtn.classList.remove("slider-Active");
  });
  sliderBtn.classList.add("slider-Active");
};
// events
sliderButtons.forEach((sliderBtn, index) => {
  sliderBtn.addEventListener("click", () => {
    console.log(index, sliderBtn);

    changeImg(index, sliderBtn);
  });
});
