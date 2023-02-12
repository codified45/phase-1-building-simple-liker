// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function init(){
  heartClick();
}

function heartClick(){
  const heartsArray = document.querySelectorAll('.like-glyph');
  heartsArray.forEach((heart) => {
    heart.addEventListener('click', e => {
      mimicServerCall()
        .then(res => {
          if(res && e.target.textContent === EMPTY_HEART) {
            e.target.className += " activated-heart";
            e.target.textContent = FULL_HEART;
          } 
          else if(res && e.target.textContent === FULL_HEART) {
            e.target.classList.remove('activated-heart');
            e.target.textContent = EMPTY_HEART;
          }
        })
            .catch((res) => {
              const modalDiv = document.querySelector('#modal');
              modalDiv.classList.remove('hidden');
              modalDiv.firstElementChild.textContent = res;
              setTimeout(() => modalDiv.className='hidden', 3000);
            })
    })
  })
}

// function heartClickHandler(event)

document.addEventListener('DOMContentLoaded', init);
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
