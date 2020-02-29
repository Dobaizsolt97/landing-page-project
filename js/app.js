const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

const sections = document.getElementsByClassName("landing-section");

/* getting the link titles and their responsive target by selecting the 
sections based on their class (.landing-section), then turning the resulted object
into an array, from wich we extract the id by mapping
*/
function gettingLinks() {
  const sections = document.getElementsByClassName("landing-section");
  const sectionsId = [...sections];
  const links = sectionsId.map(section => section.id);
  console.log(links);
  updateNavbar(links);
}
gettingLinks();

/* populate navbar with a tags to target the page sections */
function updateNavbar(array) {
  for (element of array) {
    navbar.innerHTML =
      navbar.innerHTML + `<div><a href='#${element}'>${element}</a></div>`;
  }
}
