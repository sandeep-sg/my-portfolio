function heroSectionAnimation() {
    gsap.from("nav ul li", {
      y: -30,
      opacity: 0,
      duration: 1,
      stagger: 0.4,
    });
    gsap.from(".hero-section h1", {
      x: -100,
      delay: 0.5,
      opacity: 0,
      stagger: 0.5,
    });
    gsap.from(".hero-section .right img", {
      x: 100,
      delay: 0.8,
      opacity: 0,
    });
    let tl = gsap.timeline();
    tl.to(".small-screen-nav ", {
      right: 0,
    });
    tl.from(".small-screen-nav ul li", {
      x: 100,
      opacity: 0,
      duration: 0.4,
      stagger: 0.3,
    });
    tl.from("#close-menu", {
      x: 100,
      opacity: 0,
      duration: 0.35,
    });
    tl.pause();
  
    let menu = document.getElementById("humburger");
    let closeMenu = document.getElementById("close-menu");
    let smallScreenNav = document.querySelector(".small-screen-nav");
    console.log(smallScreenNav);
    menu.addEventListener("click", function () {
      tl.play();
      document.body.style.overflow = "hidden";
      smallScreenNav.style.display = "block";
    });
    closeMenu.addEventListener("click", function () {
      tl.reverse();
      document.body.style.overflowY = "scroll";
      setTimeout(() => {
         smallScreenNav.style.display = "none"
      }, 2500);
     
    });
  }
  heroSectionAnimation()
  
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const form = document.querySelector("form");
  const nameError = document.querySelector(".name-error");
  const emailError = document.querySelector(".email-error");
  const messageError = document.querySelector(".message-error");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    nameError.innerText = name.value == "" ? "Please enter name" : "";
    emailError.innerText =
      email.value == "" || !emailRegex.test(email.value)
        ? "Please enter vaild email"
        : "";
    messageError.innerText = message.value == "" ? "Please enter message" : "";
    if (
      name.value &&
      email.value &&
      emailRegex.test(email.value) &&
      message.value
    ) {
      
      form.submit();
      name.value = "";
      email.value = "";
      message.value = "";
    }
  });
  
  