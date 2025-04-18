const btn = () => {
    let btn = document.querySelector('.header__btn');
    let close = document.querySelector('.header__close');
    let header = document.querySelector('.header');
    let item = document.querySelectorAll('.header__item');

    btn.addEventListener('click', () => {
        header.classList.add('active');
        btn.classList.add('none');
    })
    close.addEventListener('click', () => {
        header.classList.remove('active');
        btn.classList.remove('none');
    })

    item.forEach((el) => {
        el.addEventListener('click', () => {
            header.classList.remove('active');
            btn.classList.remove('none');
        })
    })

}
btn();

const speakers = () => {
    let items = document.querySelectorAll('.drop');
    items.forEach((el) => {
        el.addEventListener('click', () => {
            items.forEach((item) => {
                if (item !== el) {
                    item.classList.remove('active');
                }
            });
            el.classList.toggle('active');
        });
    });
};
speakers();

const video = () => {
    let video = document.querySelectorAll('.about__video');
    video.forEach((item)  => {
        item.muted = true;
        item.play().catch(error => {
            console.error('Автозапуск відео заблоковано:', error);
        });
    })
}
video();

const initSliders = () => {
    const sliders = document.querySelectorAll(".tile__gallery_wrapper");

    sliders.forEach((sliderWrapper) => {
        const galleryList = sliderWrapper.querySelector(".tile__gallery_list");
        const leftArrow = sliderWrapper.querySelector(".arr__left");
        const rightArrow = sliderWrapper.querySelector(".arr__right");

        if (!galleryList || !leftArrow || !rightArrow) return;

        const images = galleryList.querySelectorAll("img:not(.arr)");

        const updateArrows = () => {
            const scrollLeft = galleryList.scrollLeft;
            const maxScroll = galleryList.scrollWidth - galleryList.clientWidth;

            if (galleryList.scrollWidth <= galleryList.clientWidth) {
                leftArrow.classList.add("disabled");
                rightArrow.classList.add("disabled");
                return;
            }

            if (scrollLeft <= 0) {
                leftArrow.classList.add("disabled");
            } else {
                leftArrow.classList.remove("disabled");
            }

            if (scrollLeft >= maxScroll - 1) {
                rightArrow.classList.add("disabled");
            } else {
                rightArrow.classList.remove("disabled");
            }
        };

        const scrollToImage = (direction) => {
            const scrollLeft = galleryList.scrollLeft;
            let targetImage = null;

            if (direction === 'right') {
                for (let img of images) {
                    if (img.offsetLeft > scrollLeft + 5) {
                        targetImage = img;
                        break;
                    }
                }
            } else {
                for (let i = images.length - 1; i >= 0; i--) {
                    if (images[i].offsetLeft < scrollLeft - 5) {
                        targetImage = images[i];
                        break;
                    }
                }
            }

            if (targetImage) {
                galleryList.scrollTo({
                    left: targetImage.offsetLeft,
                    behavior: 'smooth'
                });
            }
        };

        leftArrow.addEventListener("click", () => scrollToImage("left"));
        rightArrow.addEventListener("click", () => scrollToImage("right"));
        galleryList.addEventListener("scroll", updateArrows);
        window.addEventListener("resize", updateArrows);
        updateArrows();
    });
};

// Виклик після повного завантаження сторінки + невелика затримка
window.addEventListener("load", () => {
    setTimeout(() => {
        initSliders();
    }, 1000); // можна зменшити до 100-300ms
});
