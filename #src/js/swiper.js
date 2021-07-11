const swiper = new Swiper('.intro-swiper',{
    speed: 1700,
    parallax:true,
    enabled: true,
    grabCursor:true,
    
      pagination: {
        el: '.intro-pagination',
        type: 'custom',
        renderCustom: function(swiper, current, total){
        return `<span class="intro__counter intro__counter--active">0${current}</span>
                
                <span class="intro__counter intro__counter--last">0${total}</span>`;
            }
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            dragSize: '8px',
            snapOnRelease: true,
        },
        
});