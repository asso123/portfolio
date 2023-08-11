const wheelEventName = (/Firefox/i.test(navigator.userAgent))? "wheel" : "mousewheel";
const workLayers = [...document.querySelectorAll('.working_layer')];
const tracker = document.querySelector('.track-active');
const trackerNumber = document.querySelector('.track-number');
let itemDisplayed = 0;
let animationPlaying = false;

function resetClasses() {
  for(let i = 0; i < 4; i++) {
    workLayers[0].children[i].classList.remove('item-displayed');
    workLayers[1].children[i * 2].classList.remove('item-displayed');
  }
}

document.addEventListener(wheelEventName, event => {
  if(!animationPlaying) {
   const nextItem = itemDisplayed + Math.sign(event.deltaY);
    if(nextItem >= 0 && nextItem <= 3) {
      itemDisplayed += Math.sign(event.deltaY);
      workLayers[0].style = `transform: translateX(${-itemDisplayed * 85}vw);`;
      workLayers[1].style = `transform: translateX(${- itemDisplayed * 85 * 2}vw);`;
      workLayers[1].children[itemDisplayed * 2].classList.add('item-revealed');
      
      resetClasses();
      workLayers[0].children[itemDisplayed].classList.add('item-displayed');
      workLayers[1].children[itemDisplayed * 2].classList.add('item-displayed');
      
      tracker.style = `transform: translateX(${itemDisplayed * 100}%);`;
      trackerNumber.innerText = `0${itemDisplayed + 1}`;
      setTimeout(() => {
        animationPlaying = false;
      }, 2200);
      animationPlaying = true;
    } 
  }
});

