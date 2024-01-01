// selecting elements Header Buttons
var sliderButtons = document.querySelectorAll("#slider-Buttons");
var imagesHolderEl = document.getElementsByClassName("images-Holder")[0];
// gelobal variables
var numCounter = 0;
// functions
var changeImg = function (index, sliderBtn) {
    sliderButtons.forEach(function (sliderBtn) {
        sliderBtn.classList.remove("slider-Active");
    });
    sliderBtn.classList.add("slider-Active");
    imagesHolderEl.style.transform = "translateX(-".concat(index, "00%)");
    startCounting();
};
// start counting function
var startCounting = function () {
    setInterval(function () {
        numCounter++;
        console.log(numCounter);
        if (numCounter > 4) {
            console.log(numCounter);
            numCounter = 0;
        }
    }, 1000);
};
// events
sliderButtons.forEach(function (sliderBtn, index) {
    sliderBtn.addEventListener("click", function () {
        changeImg(index, sliderBtn);
    });
});
