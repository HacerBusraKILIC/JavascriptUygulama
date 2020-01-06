let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if (galleryImages) {
    galleryImages.forEach(function (image, index) {
        image.onclick = function () {
            let getElementCss = window.getComputedStyle(image);
            let getFullImageUrl = getElementCss.getPropertyValue("background-image");
            let getImageUrlPos = getFullImageUrl.split("/img/");
            let setNewImgUrl = getImageUrlPos[1].replace('")', '')

            getLatestOpenedImg = index + 1;

            let container = document.body;
            let newImageWindow = document.createElement("div");
            container.appendChild(newImageWindow);
            newImageWindow.setAttribute("class", "img-window");
            newImageWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImageWindow.appendChild(newImg);
            newImg.setAttribute("id", "current-img");
            newImg.setAttribute("src", "img/" + setNewImgUrl);

            newImg.onload = function () {
                let imgWidth = this.width;
                let calcToEdge = ((windowWidth - imgWidth) / 2) - 90;

                let newNextButton = document.createElement("a");
                let newNextText = document.createTextNode("Next");
                newNextButton.appendChild(newNextText);
                container.appendChild(newNextButton);
                newNextButton.setAttribute("class", "img-btn-next");
                newNextButton.setAttribute("onclick", "changeImg(1)");
                newNextButton.style.cssText = "right: " +calcToEdge+ "px"

                let newPrevButton = document.createElement("a");
                let newPrevText = document.createTextNode("Prev");
                newPrevButton.appendChild(newPrevText);
                container.appendChild(newPrevButton);
                newPrevButton.setAttribute("class", "img-btn-prev");
                newPrevButton.setAttribute("onclick", "changeImg(0)");
                newPrevButton.style.cssText = "left: " +calcToEdge+ "px"
            }

        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir) {
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if (changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;
        if (calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    } else {
        calcNewImg = getLatestOpenedImg - 1;
        if (calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }

    newImg.setAttribute("src", "img/img" +calcNewImg+ ".jpg");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImg = calcNewImg;

    newImg.onload = function () {
        let imgWidth = this.width;
        let calcToEdge = ((windowWidth - imgWidth) / 2) - 90;

        let nextButton = document.querySelector(".img-btn-next");
        nextButton.style.cssText = "left: " +calcToEdge+ "px"

        let prevButton = document.querySelector(".img-btn-next");
        prevButton.style.cssText = "right: " +calcToEdge+ "px"
    }
}