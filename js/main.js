Splitting();
const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  pagination: {
    el: "#mainVisual .pagination",
    type: "bullets",
    clickable: true,
  },
});

const productSlider = new Swiper("#product .list", {
  speed: 600,
  slidesPerView: 3, //화면에 보여지는 갯수
  slidesPerGroup: 3, //묶음
  navigation: {
    prevEl: "#product .prev",
    nextEl: "#product .next",
  },
});

gsap.from("#mainVisual .slogan .main .char", { opacity: 0, x: 150, skewX: -45, ease: "power4", duration: 1, stagger: 0.1 });
gsap.from("#mainVisual .slogan .sub .char", { opacity: 0, x: 150, ease: "power4", duration: 1, stagger: 0.05, delay: 1 });

const gnbList = $("#gnb .list > li");
const faqList = $(".faqBox ul li");
gnbList.on("mouseenter", function () {
  $(this).find(".depth02").stop().slideDown(250);
});
gnbList.on("mouseleave", function () {
  $(this).find(".depth02").stop().slideUp(100);
});

faqList.on("click", function () {
  $(this).toggleClass("on");
  $(this).siblings("li").removeClass("on");
  $(this).find("dd").stop().slideToggle();
  $(this).siblings("li").find("dd").stop().slideUp();
});

const header = $("#header");
const btnTop = $(".btnTop");
$(window).on("scroll", function () {
  const st = $(window).scrollTop();
  if (st > 0) {
    if (!header.hasClass("scroll")) {
      header.addClass("scroll");
    }
  } else {
    if (header.hasClass("scroll")) {
      header.removeClass("scroll");
    }
  }

  //console.log(st);
});

const onedayCheck = $("#onedayCheck");
const btnOneday = $(".popup .oneday");
const popup = $(".popup");

let isChecked = onedayCheck.is(":checked");
console.log(isChecked);

onedayCheck.on("change", function () {
  //console.log($(this).is(":checked"));
  isChecked = $(this).is(":checked");
  console.log(isChecked);
});
btnOneday.on("click", function () {
  gsap.to(popup, { top: -600, duration: 1, ease: "back.in" });
  // in점점 빠르게,out 점점 느리게, inOut 좀좀 빠륵다가 점점 느리게
  if (isChecked) {
    Cookies.set("oneday", "one", { expires: 1 });
  }
});

if (Cookies.get("oneday") === "one") {
  popup.hide();
} else {
  popup.show();
}

//f(x,y) = x+y*3; f(3,5) = 18
