document.getElementsByClassName("navbar-menu-button")[0].addEventListener("click", () => {
    document.getElementsByClassName("navbar-menu")[0].classList.add("active");
});

document.getElementsByClassName("navbar-close")[0].addEventListener("click", () => {
    document.getElementsByClassName("navbar-menu")[0].classList.remove("active");
});

document.getElementsByClassName("navbar-cart")[0].addEventListener("click", () => {
    document.getElementsByClassName("cart-popup")[0].classList.toggle("active");
});

document.getElementsByClassName("product-image")[0].addEventListener("click", () => {
    document.getElementsByClassName("lightbox")[0].classList.toggle("active");
});

document.getElementsByClassName("lightbox-close")[0].addEventListener("click", () => {
    document.getElementsByClassName("lightbox")[0].classList.toggle("active");
});

document.getElementsByClassName("prev button")[0].addEventListener("click", () => changeImage(-1));

document.getElementsByClassName("next button")[0].addEventListener("click", () => changeImage(1));

document.getElementsByClassName("prev button")[1].addEventListener("click", () => changeImageLightBox(-1));

document.getElementsByClassName("next button")[1].addEventListener("click", () => changeImageLightBox(1));

function changeImage(num) {
    const image = document.getElementsByClassName("product-image")[0].getElementsByClassName("current")[0];
    // console.log(image);
    let index = parseInt(image.name) - 1;
    document.getElementsByClassName("product-image")[0].getElementsByTagName("img")[index].classList.remove("current");
    index += num;
    if (index < 0) {
        index = 3;
    } else if (index >= 4) {
        index = 0;
    }
    document.getElementsByClassName("product-image")[0].getElementsByTagName("img")[index].classList.add("current");
}

function changeImageLightBox(num) {
    const image = document.getElementsByClassName("lightbox-product-image")[0].getElementsByClassName("current")[0];
    // console.log(image);
    let index = parseInt(image.name) - 1;
    document.getElementsByClassName("lightbox-product-image")[0].getElementsByTagName("img")[index].classList.remove("current");
    index += num;
    if (index < 0) {
        index = 3;
    } else if (index >= 4) {
        index = 0;
    }
    document.getElementsByClassName("lightbox-product-image")[0].getElementsByTagName("img")[index].classList.add("current");
}

function selectImage(img) {
    const index = parseInt(img.name) - 1;
    const images = document.getElementsByClassName("product-image")[0];
    const thumbnails = document.getElementsByClassName("product-thumbnails")[0];
    images.getElementsByClassName("current")[0].classList.remove("current");
    thumbnails.getElementsByClassName("current")[0].classList.remove("current");

    images.getElementsByTagName("img")[index].classList.add("current");
    thumbnails.getElementsByTagName("div")[index].classList.add("current");
}

function selectImageLB(img) {
    const index = parseInt(img.name) - 1;
    const images = document.getElementsByClassName("lightbox-product-image")[0];
    const thumbnails = document.getElementsByClassName("lightbox-product-thumbnails")[0];
    images.getElementsByClassName("current")[0].classList.remove("current");
    thumbnails.getElementsByClassName("current")[0].classList.remove("current");

    images.getElementsByTagName("img")[index].classList.add("current");
    thumbnails.getElementsByTagName("div")[index].classList.add("current");
}