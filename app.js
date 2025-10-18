const menuIcon = document.getElementById("menu-icon")
const xIcon = document.getElementById("x-icon")
const bottomBar = document.getElementById("bottom-bar")

menuIcon.addEventListener("click", function() {
 bottomBar.style.display = "flex"
 bottomBar.style.transform = "translatey(0px)"
})

xIcon.addEventListener("click", function() {
 bottomBar.style.display = "none"
})

