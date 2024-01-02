// selecting elements Navbar
// gelobal variables
// functions
// events
// selecting elements Header Buttons
var sliderButtons = document.querySelectorAll("#slider-Buttons");
var imagesHolderEl = document.getElementsByClassName("images-Holder")[0];
// gelobal variables
var numCounter = 0;
var slideCount = 0;
// functions
// change image function by munipulating the translateX
var changeImg = function (index) {
    numCounter = 0;
    sliderButtons.forEach(function (sliderBtn) {
        sliderBtn.classList.remove("slider-Active");
    });
    sliderButtons[index].classList.add("slider-Active");
    imagesHolderEl.style.transform = "translateX(-".concat(index, "00%)");
};
// start counting function
var startCounting = function () {
    setInterval(function () {
        numCounter++;
        // calling our change image function
        imageChangeLogic();
    }, 1000);
};
var imageChangeLogic = function () {
    // our if else lader
    if (numCounter > 4) {
        numCounter = 0;
        if (slideCount < 2) {
            slideCount++;
        }
        else {
            slideCount = 0;
        }
        changeImg(slideCount);
    }
};
// events
sliderButtons.forEach(function (sliderBtn, index) {
    sliderBtn.addEventListener("click", function () {
        changeImg(index);
    });
});
startCounting(0);
