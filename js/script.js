 //스크롤 숫자 표시
 let text = document.querySelector('.text');
 window.addEventListener("scroll", function () {
   let wScroll = window.pageYOffset;
   console.log(parseInt(wScroll))
   text.innerHTML = parseInt(wScroll)
 });


//goto function
let menunav = document.querySelectorAll('.header-menu>a');
function windowScroll (){
  menunav.addEventListener("click", function(){
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  })
}
windowScroll();

function gotoAbout (){
    // 원하는 위치로 스크롤
    scrollTo(0, 2000);
}
function gotoTravel (){
    // 원하는 위치로 스크롤
    scrollTo(0, 4000);
}
function gotoWork (){
    // 원하는 위치로 스크롤
    scrollTo(0, 10000);
}



