console.log('yy');

$(document).ready(function(){
  

  $('.main').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    appendDots: $('.navbar-links'),
    // arrows:true
  });
  $('.sliderFour').slick({
    slidesToShow: 1,
    
    vertical: true,
    
    
    
    verticalSwiping: true,
  });
});
//POPUp=========================================================
let inputOne = document.querySelector('.one_input')
let inputTwo = document.querySelector('.two_input')
let inputFree = document.querySelector('.free_input')
let sendBtn = document.querySelector('.send_info')
sendBtn.classList.add('activbtn')
function openPopup() {
    let startPopup = document.querySelector('.inner_popup')
    startPopup.style.display = 'block'
    
}
function closePopup() {
    let startPopup = document.querySelector('.inner_popup')
    startPopup.style.display = 'none'
}

function infoInput() {
    if (inputOne.value.length !== 0 && inputTwo.value.length !== 0 && inputFree.value.length !== 0 ) {
        sendBtn.removeAttribute('disabled')
        sendBtn.classList.remove('activbtn')
    } else {
        
    }
}

function send() {
    let information = JSON.stringify(inputOne.value + ' ' + inputTwo.value + ' ' + inputFree.value + ' квартира')
    console.log(information); 
}
//END POPUP=====================================================
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})