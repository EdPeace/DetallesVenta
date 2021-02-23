var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

/*
let ele1=document.getElementsByClassName("visible1");
let ele2=document.getElementsByClassName("novisible2");
let ele3=document.getElementsByClassName("novisible3");
console.log(ele2);


console.log("Holis");

cambios=(tipo)=>{
    switch(tipo) {
        case 1:
                if(ele1.length >0)
                ele2.style.display='block';
                ele1.style.display='none';
                ele1.classList.remove("visible1");
                ele1.classList.add("novisible1");
                ele3.style.display='none';
                break;

      /*  case 2:
                elementos[po1].style.display='none';
                elementos[po2].style.display='block';
                elementos[po3].style.display='none';
                break;
        case 3:
                elementos[po1].style.display='none';
                elementos[po2].style.display='none';
                elementos[po3].style.display='block';
                break;
    }
}

*/