$(document).ready(function(){
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/next.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                  arrows: false,
                  dots: true
                }
              }
        ]
    });

    let tabs = document.querySelectorAll('.catalog__tab');
    let items = document.querySelectorAll('.catalog-item');

    for(let i = 0; i<tabs.length; i++){
        tabs[i].addEventListener('click', function(){
            this.classList.add('catalog__tab_active');
            console.log(this.dataset.index);
            for(let m = 0; m<tabs.length; m++){
                if(tabs[m] != this){
                    tabs[m].classList.remove('catalog__tab_active');
                } 
             }
             
            for(let y = 0; y<items.length; y++){
                if(this.dataset.index == items[y].dataset.item){
                    items[y].classList.remove('none');
                    items[y].classList.add('block');
                }else {
                    items[y].classList.add('none');
                }   
                
            }
        })
    }

    // link 
    let link = document.querySelectorAll('.catalog-item__link');
    let back = document.querySelectorAll('.catalog-item__back');


    for(let i = 0; i<link.length; i++){
        link[i].addEventListener('click', function(e){
            e.preventDefault();
            this.parentNode.parentNode.classList.add('left');
        })
    }

    for(let i = 0; i<back.length; i++){
        back[i].addEventListener('click', function(e){
            e.preventDefault();
            this.parentNode.parentNode.parentNode.classList.remove('left');
        })
    }

    let buttonsConsultation = document.querySelectorAll('button[data-button=consultation]');
    let modalConsultation = document.getElementById('consultation');
    let overlay = document.getElementById('overlay');
    let closed = document.querySelectorAll('.modal__closed');

    for(let i =0; i < buttonsConsultation.length; i++) {
        buttonsConsultation[i].addEventListener('click', function(){
            modalConsultation.classList.add('block');
            overlay.classList.add('block');
        })
    }

    // функція для хрестика який закриває модальне вікно
    for(let i = 0; i < closed.length; i++ ) {
        closed[i].addEventListener('click', function(){
            modalConsultation.classList.remove('block');
            overlay.classList.remove('block');
        })
    }
  });

