var flagBtnNav = false
function showNav(){
    flagBtnNav =! flagBtnNav
    let nav = document.querySelector('.nav')
    // nav.style.top 
    document.querySelector('.line-2').classList.toggle('hide') // hide middle line
    if(flagBtnNav == true){
        document.querySelector('.corer-1r').style.transform = 'translateY(2px) translateX(-2px) rotate(-45deg) '
        document.querySelector('.corer-3l').style.transform = 'translateY(-2px) translateX(2px) rotate(-45deg) '
        document.querySelector('.corer-1l').style.transform = 'translateY(2px) translateX(2px) rotate(45deg) '
        document.querySelector('.corer-3r').style.transform = 'translateY(-2px) translateX(-2px) rotate(45deg)' 
        nav.style.top = '10vh'  
    }
    else{
        document.querySelector('.corer-1r').style.transform = 'translateY(0)'
        document.querySelector('.corer-3l').style.transform = 'translateY(0)'
        document.querySelector('.corer-1l').style.transform = 'translateY(0)'
        document.querySelector('.corer-3r').style.transform = 'translateY(0)'
        nav.style.top = '-100vh'  
    }
    
}
// search handle
function showBar(btn, classElmt){
    let elmt = document.querySelector(classElmt)
    btn.classList.toggle('fa-times')
    elmt.classList.toggle('search-active')
}
// sign handle
function hideSign(classElmt){
    let elmt = document.querySelector(classElmt)
    elmt.classList.remove('show-login');
}
function showSign(classElmt){
    let elmt = document.querySelector(classElmt)
    elmt.classList.add('show-login')
}

let swiper = new Swiper(".review-slider", {
    spaceBetween :20,
    loop:true,
    autoplay:{
        delay:2500
    },
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
});