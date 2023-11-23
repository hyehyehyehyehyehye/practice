// top search
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 스크롤시 일정값 이상이 되면 사라지게 만들기 badges
const badgeEl = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      gsap.to(badgeEl, 0.3, {
        opacity: 0,
        display: "none",
      });
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.3, {
        opacity: 1,
        display: "block",
      });
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
const toTopEl = document.querySelector("#to_top");
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

//화면이 켜지면 순차적으로 이미지 나타나게 하기

// // gsap.to()플러그인 사용
// const fadeEls = document.querySelectorAll(".visual .fade_in");

// fadeEls.forEach(function (fadeEl, index) {
//   gsap.to(fadeEl, 1, {
//     delay: (index + 1) * 0.7,
//     opacity: 1,
//   });
// });

// // 플러그인 사용하지 않음
const fadeEls = document.querySelectorAll(".visual .fade_in");

fadeEls.forEach(function (fadeEl, index) {
  fadeEl.style.transition = "opacity 1s";
  fadeEl.style.opacity = 0;

  setTimeout(function () {
    fadeEl.style.opacity = 1;
  }, (index + 1) * 700);
});

//swiper
new Swiper(".notice_line .swiper", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: { delay: 5000 },
  loop: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

//토글 열었다 닫았다
const promotionEl = document.querySelector(".promotion");
const promotionRoggleBtnEl = document.querySelector(".toggle_promotion");
let isHidePromotion = false;

promotionRoggleBtnEl.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

//둥둥 떠있는 반복 애니메이션
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: random(0, delay),
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// function random(min, max) {
//   return parseFloat((Math.random() * (max - min) + min).toFixed(2));
// }

// function floatingObject(selector, delay, size) {
//   const element = document.querySelector(selector);
//   const duration = random(1.5, 2.5) * 1000; // 밀리초 단위로 변환
//   const initialY = parseFloat(
//     getComputedStyle(element).getPropertyValue("top")
//   );
//   const targetY = initialY + size;

//   animate();

//   function animate() {
//     const animationTime = random(0, delay) * 1000; // 밀리초 단위로 변환

//     setTimeout(() => {
//       element.style.transition = `top ${duration}ms ease-in-out .5s`;
//       element.style.top = `${targetY}px`;

//       setTimeout(() => {
//         element.style.transition = `top 3s`;
//         element.style.top = `${initialY}px`;

//         animate();
//       }, duration);
//     }, animationTime);
//   }
// }

// floatingObject(".floating1", 1, 15);
// floatingObject(".floating2", 0.5, 15);
// floatingObject(".floating3", 1.5, 20);

// 특정 섹션이 보여지면 애니메이션 실행
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

// 올해 날짜
const thisYear = document.querySelector(".this_year");
thisYear.textContent = new Date().getFullYear();
