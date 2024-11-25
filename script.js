const sidebar = document.querySelector("#sidebar-nav");
sidebar.style.display = "none";

function toogleSidebar() {
  const isActive = sidebar.style.display === "none" ? false : true;
  console.log(isActive);
  if (isActive) {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
}
