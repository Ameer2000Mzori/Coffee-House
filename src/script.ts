// selecting elements Header Buttons
const sliderButtons = document.querySelectorAll("#slider-Buttons");
const imagesHolderEl: any = document.getElementsByClassName("images-Holder")[0];
// gelobal variables

// functions
const changeImg = (index, sliderBtn) => {
  sliderButtons.forEach((sliderBtn) => {
    sliderBtn.classList.remove("slider-Active");
  });

  sliderBtn.classList.add("slider-Active");
  imagesHolderEl.style.transform = `translateX(-${index}00%)`;
};
// events
sliderButtons.forEach((sliderBtn, index) => {
  sliderBtn.addEventListener("click", () => {
    changeImg(index, sliderBtn);
  });
});
