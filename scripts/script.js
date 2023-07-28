const slider = document.querySelector('.brands__swiper');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth < 767)  {
        mySwiper = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            wrapperClass: 'brands__swiper-wrapper',
            slideClass: 'brands__swiper-slide',
            pagination: {
                el: '.pagination', clickable: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },

                720: {
                    slidesPerView: 3,
                }
            }
        });


    }

    if (window.innerWidth > 767) {


        if (slider.classList.contains('swiper-initialized')) {
            mySwiper.destroy();
        }

    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
})

let img = document.querySelector('.btn__open-img');
let brands = document.querySelector('.brands__swiper');
let btn = document.querySelector('.btn__open');

btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (brands.classList.contains('over')) {

        brands.classList.remove('over');
        document.querySelector('.text').textContent = "Показать все";
        img.classList.remove('arrows_rotate');
        img.classList.add('arrows_revers');

    } else {

        brands.classList.add('over');
        document.querySelector('.text').textContent = "Скрыть";
        img.classList.add('arrows_rotate');
        img.classList.remove('arrows_revers');
    }
})