const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        currentIndex = index;

        showImage();

        lightbox.style.display = "flex";

    });

});

function showImage(){

    lightboxImg.src = galleryImages[currentIndex].src;

}

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= galleryImages.length){
        currentIndex = 0;
    }

    showImage();

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = galleryImages.length - 1;
    }

    showImage();

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display = "none";

});

/* About Modal */

const aboutBtn = document.getElementById("aboutBtn");
const aboutModal = document.getElementById("aboutModal");

aboutBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    aboutModal.style.display = "block";

});

/* Contact Modal */

const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");

contactBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    contactModal.style.display = "block";

});

/* Close Modals */

const modalCloseBtns = document.querySelectorAll(".close-modal");

modalCloseBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        aboutModal.style.display = "none";
        contactModal.style.display = "none";

    });

});

window.addEventListener("click",(e)=>{

    if(e.target === aboutModal){
        aboutModal.style.display = "none";
    }

    if(e.target === contactModal){
        contactModal.style.display = "none";
    }

});

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display === "flex"){

        if(e.key === "ArrowRight"){
            nextBtn.click();
        }

        if(e.key === "ArrowLeft"){
            prevBtn.click();
        }

        if(e.key === "Escape"){
            lightbox.style.display = "none";
        }

    }

});