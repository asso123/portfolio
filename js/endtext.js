// cookie
let currentCookie = document.cookie;
let cookieCheck = currentCookie.indexOf("kse");
// console.log(cookieCheck)

if (cookieCheck > -1) {
  document.querySelector(".notice").style.display = "none";
} else {
  document.querySelector(".notice").style.display = "block";
}

document.querySelector(".hide").addEventListener("click", () => {
  let date = new Date();
  date.setMinutes(date.getMinutes() + 1);
  let setCookie = "CookieName=kse; ";
  setCookie += "expires=" + date.toUTCString();

  document.cookie = setCookie;
});

document.querySelector(".Nclose").addEventListener("click", function (e) {
  e.preventDefault();
  this.parentElement.style.display = "none";
});