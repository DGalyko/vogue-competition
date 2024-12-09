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