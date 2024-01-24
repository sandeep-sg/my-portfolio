document.querySelector("ul i").onclick = function () {
  document.querySelector("body").classList.toggle("dark");
};
document.querySelector(".menu i").onclick = () => {

  document.querySelector("ul").style.display = "block";
  document.querySelector("ul").style.right = "0px";
  document.body.style.overflow = "hidden";

  document.querySelector("ul").style.backdropFilter = "blur(10px)";
};
let closeMenu = document.querySelector(".close");

closeMenu.addEventListener("click", function () {
  document.querySelector("ul").style.display = "none";
  document.body.style.overflow = "scroll";
});
document.querySelector("ul").addEventListener("blur", function () {
  console.log("blur");
});
