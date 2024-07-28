// Part 1 - Getting Started

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

mainEl.classList.add("flex-ctr");

// Part 2 - Creating a Menu Bar

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
