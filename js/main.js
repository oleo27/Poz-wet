const navBtn = document.querySelector(".nav-toggle");
const navBtnClose = document.querySelector(".nav-close");
const navList = document.querySelector(".nav-list");

navBtn.addEventListener("click", () => {
	navList.classList.add("active");
	navBtn.style.display = "none";
	navBtnClose.style.display = "block";
});

navBtnClose.addEventListener("click", () => {
	navList.classList.remove("active");
	navBtn.style.display = "block";
	navBtnClose.style.display = "none";
});
