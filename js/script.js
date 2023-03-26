let upBtn = document.querySelector(".img_up");

window.onscroll = () => {
  this.scrollY >= 1000
    ? upBtn.classList.add("show")
    : upBtn.classList.remove("show");
};
upBtn.onclick = () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
