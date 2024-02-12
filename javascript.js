function scaleImage() {
    // Lấy ra phần tử hình ảnh
    var imgElement = document.querySelector('.img');
    
    // Scale hình ảnh lên 1.1 lần
    imgElement.style.transform = "scale(1.1)";

    // Sử dụng setTimeout để đặt hàm chờ sau 1 giây
    setTimeout(function() {
        // Trở lại kích thước ban đầu
        imgElement.style.transform = "scale(1)";
    }, 500); // 1000 milliseconds = 1 giây
}
function card_img_scaleImage(pos) {
    let items = document.querySelectorAll('.card .img-container .card-img');
    var scale_value=1.2;
    if(pos==1){
        items[0].style.transform = "scale(" + scale_value + ")";
        items[0].style.filter = "brightness(0.8)";
        setTimeout(function() {
            items[0].style.transform = "scale(1)";
            items[0].style.filter = "";
        }, 500);
    }
    else{
        items[1].style.transform = "scale(" + scale_value + ")";
        items[1].style.filter = "brightness(0.8)";
        setTimeout(function() {
            items[1].style.transform = "scale(1)";
            items[1].style.filter = "";
        }, 500);
    }
}

