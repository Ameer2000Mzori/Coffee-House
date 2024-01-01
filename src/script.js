// selecting elements Header Buttons
var sliderButtons = document.querySelectorAll("#slider-Buttons");
var imagesWrapEl = document.getElementsByClassName("images-Wrap")[0];
// gelobal variables
// functions
var changeImg = function (index, sliderBtn) {
    sliderButtons.forEach(function (sliderBtn) {
        sliderBtn.classList.remove("slider-Active");
    });
    sliderBtn.classList.add("slider-Active");
};
// events
sliderButtons.forEach(function (sliderBtn, index) {
    sliderBtn.addEventListener("click", function () {
        console.log(index, sliderBtn);
        changeImg(index, sliderBtn);
    });
});
