const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const links = document.querySelector(".link-list");

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
    links.innerHTML =
      links.innerHTML +
      // asigning the scroll function to the generated a tags
      `<li><a onclick='smoothScroll(${element})' >${element}</a><li>`;
  }
}

/* function that enables smooth scrolling, activated trough click */
function smoothScroll(target) {
  //getting the coordinate of the section where we want to scroll
  let targetPozition = target.getBoundingClientRect().top;
  // the current pozition
  let startPosition = window.pageYOffset;
  let distance = 0;
  // determining the Y coordinate where we want to scroll based on
  // the relationsheep between the current location and the target
  if (targetPozition > startPosition) {
    distance = targetPozition - startPosition;
  } else {
    distance = startPosition + targetPozition;
  }
  window.scrollTo({
    top: distance,
    behavior: "smooth"
  });
}

window.onscroll = function() {
  scrollFunction();
};

// w3school way of implementing sticky navbars
let sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
