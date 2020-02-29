const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

const sections = document.getElementsByClassName("landing-section");

header.addEventListener("click", () => {
  navbar.innerHTML = navbar.innerHTML + `<div><a>cat</a></div>`;
});
console.log(sections);

function gettingLinks() {
  const sections = document.getElementsByClassName("landing-section");
  const sectionsId = [...sections];
  const links = sectionsId.map(section => section.id);
  console.log(links);
  updateNavbar(links);
}
gettingLinks();

function updateNavbar(array) {
  for (element of array) {
    navbar.innerHTML =
      navbar.innerHTML + `<div><a href='#${element}'>${element}</a></div>`;
  }
}
