

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    

    toggle.addEventListener('click', () => {
        nav.classList.toggle("show-menu");
        toggle.classList.toggle("show-icon");
})
}

showMenu('nav-toggle', 'nav-menu')


const changeHeaderColor = () => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector('header')
      const logo = document.querySelector('.nav-logo')
      const toggle = document.querySelector('.nav-toggle')

      if (window.scrollY > 580) {
        header.style.backgroundColor = "#f26e7761";
        logo.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.332)";
        toggle.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.332)";
        logo.style.padding = '.3em'


      } else {
        header.style.backgroundColor = "transparent";
        logo.style.padding = "0";
       logo.style.boxShadow = "none";
       toggle.style.boxShadow = "none";

      }
    });
}

changeHeaderColor()