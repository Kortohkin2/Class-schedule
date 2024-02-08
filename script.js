const modalController =({modal,btnClose,btnOpen}) =>{
const btnEl = document.querySelector(btnOpen),
      modalEl = document.querySelector(modal),
      tabsBtn = document.querySelectorAll('.tabs__nav-btn'),
      tabsItems = document.querySelectorAll('.tabs__item');
      
      tabsBtn.forEach(function(item){
        item.addEventListener('click',function(){
           let currentBtn = item;
           let tabId = currentBtn.getAttribute('data-tab');
           let currentTab =document.querySelector(tabId);
           let imgVersions = document.querySelectorAll('.under');
           tabsBtn.forEach(function(item){
            item.classList.remove('active')
           });
           tabsItems.forEach(function(item){
            item.classList.remove('active')
           });
           currentBtn.classList.add('active');
           currentTab.classList.add('active');

        });
      });

modalEl.style.cssText =`
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;

const closeModal = event =>{
    const target = event.target;
    if(target=== modalEl || target.closest(btnClose)){
    modalEl.style.opacity= 0;
setTimeout(()=>{
modalEl.style.visibility = 'hidden';
},300)
    }
}

const openModal = ()=>{
    modalEl.style.visibility = 'visible';
    modalEl.style.opacity= 1;
    

}

btnEl.addEventListener('click', openModal);
modalEl.addEventListener('click', closeModal);
}
modalController({
    modal:'.modal_1',
    btnOpen: '.sb1',
    btnClose: '.modal__close'
})
modalController({
    modal:'.modal_3',
    btnOpen: '.sb3',
    btnClose: '.modal__close'
})
modalController({
    modal:'.modal_4',
    btnOpen: '.sb4',
    btnClose: '.modal__close'
})
modalController({
    modal:'.modal_5',
    btnOpen: '.sb5',
    btnClose: '.modal__close'
})
modalController({
    modal:'.modal_6',
    btnOpen: '.sb6',
    btnClose: '.modal__close'
})
modalController({
    modal:'.modal_7',
    btnOpen: '.sb7',
    btnClose: '.modal__close'
})
modalController({
    modal:'.modal_8',
    btnOpen: '.sb8',
    btnClose: '.modal__close'
})
modalController({
    modal:'.modal_9',
    btnOpen: '.sb9',
    btnClose: '.modal__close'
})



