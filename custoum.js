const btns = document.querySelectorAll("#btns div");
const pages = document.querySelectorAll("#content > div");

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
   
    pages.forEach(page => page.classList.add("d-none"));

   
    pages[i].classList.remove("d-none");
  });
});
