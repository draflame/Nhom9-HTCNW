function card_img_scaleImage(card) {
    var imgEle = card.querySelector('.img-container .card-img');
    imgEle.style.transform = "scale(1.1)";
    setTimeout(function () {
        imgEle.style.transform = "scale(1)";
    }, 1000);
}

