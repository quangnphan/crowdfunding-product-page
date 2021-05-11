var iconClose = document.getElementById('icon-close');
var openModals = document.querySelectorAll('.open-modal');
var bookmark = document.getElementById('bookmark');
var bookmarked = document.getElementById('bookmarked');
var bookmarktext = document.getElementById('bm-text');
var gotitBtn = document.getElementById('got-it');
var heading = document.querySelectorAll('.h1-selection');
var items = document.querySelectorAll('.item');
var submit = document.querySelectorAll('.submit-btn');
var hbg = document.getElementById('hbg');

hbg.addEventListener('click',()=>{
    if(hbg.parentElement.parentElement.classList.contains('mobile-active')){
        hbg.parentElement.parentElement.classList.remove('mobile-active')
        hbg.src = 'images/icon-hamburger.svg';
    }else{
        hbg.parentElement.parentElement.classList.add('mobile-active')
        hbg.src = 'images/icon-close-menu.svg';
    }
})

openModals.forEach(btn =>{
    btn.addEventListener('click',()=>{
        window.scrollTo({top: 200, behavior: 'smooth'});
        document.body.classList.add('active-modal');
    })
})

iconClose.addEventListener("click", ()=>{
    document.body.classList.remove('active-modal');
})

bookmark.addEventListener('click',()=>{
    bookmarked.classList.toggle('bookmarked');
    if(bookmarked.classList.contains('bookmarked')){
        bookmarktext.innerHTML = "Bookmarked";
    }else{
        bookmarktext.innerHTML = "Bookmark";
    }
})

var radio = document.querySelectorAll(".radio");
radio.forEach(button=>{
    button.addEventListener('change',()=>{
        radio.forEach(btn=>{
            if(btn.checked){
                btn.parentElement.parentElement.classList.add('selected');
            }else{
                btn.parentElement.parentElement.classList.remove('selected');
            }
        })
    })
})
/*act as if we click the radio button*/
heading.forEach(h1=>{
    h1.addEventListener('click',()=>{
       h1.parentElement.parentElement.previousElementSibling.click();
    })
})

/*submit button */
submit.forEach(btn=>{
    btn.addEventListener('click',()=>{
        window.scrollTo({top: 200, behavior: 'smooth'});
        document.body.classList.add('alert');
    })
})

/*refresh page*/
gotitBtn.addEventListener('click',()=>{
    window.location.reload();
})

