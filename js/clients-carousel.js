$(document).ready(function (){
    
    // Находим блок со слайдами

    const owl = $('#clients-slider');
    
    // Запуск карусели с 1 айтемом
    
    owl.owlCarousel({
        items: 1,
        loop: true
    })

    // Находим кастомные кнопки

    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    // Клик на кнопку назад и движение назад
    
    prev.click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    })
    
    // Клик на кнопку вперед и движение вперед
    
    next.click(function () {
        owl.trigger('next.owl.carousel');
    })
})



