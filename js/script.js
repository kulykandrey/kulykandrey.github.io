$(document).ready(function () {
  // Age calculate
  let age = document.getElementById("age-value");
  age.innerHTML = age_count("1999-02-10 00:00:00");

  // Slider settings
  $(".slider").slick({
    arrows: true,
    dots: true,
    speed: 500,
    draggable: false,
    touchThreshold: 10,
    // responsive: [
    //   {
    //     breakpoint: 769,
    //     settings: {
    //       arrows: false,
    //     },
    //   },
    // ],
  });
});

// // To top button
let btn = $("#to-top-button");
$(window).scroll(function () {
  if ($(window).scrollTop() > 600) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1100);
});

let swiper = document.getElementById("swiper");

swiper.addEventListener("click", function () {
  let iframe = document.querySelector(".slick-current iframe");
  let iframeDoc = iframe.contentWindow;
  alert(iframeDoc);
});

// Age calculating
function age_count(date) {
  // now
  var now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  now = now.toISOString().substr(0, 19).replace("T", " ");
  // calculate
  var age = now.substr(0, 4) - date.substr(0, 4);
  if (now.substr(5) < date.substr(5)) --age;
  // output
  return age;
}
