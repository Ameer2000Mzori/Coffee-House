// selecting elements Header Buttons
var sliderButtons = document.querySelectorAll("#slider-Buttons");
var imagesHolderEl = document.getElementsByClassName("images-Holder")[0];
// gelobal variables
// functions
var changeImg = function (index, sliderBtn) {
    sliderButtons.forEach(function (sliderBtn) {
        sliderBtn.classList.remove("slider-Active");
    });
    sliderBtn.classList.add("slider-Active");
    imagesHolderEl.style.transform = "translateX(-".concat(index, "00%)");
};
// events
sliderButtons.forEach(function (sliderBtn, index) {
    sliderBtn.addEventListener("click", function () {
        changeImg(index, sliderBtn);
    });
});
