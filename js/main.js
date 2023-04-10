function toggleNavbar() {
    var navbarLinks = document.querySelector('.navbar-links');
    if (navbarLinks.style.display === 'none') {
      navbarLinks.style.display = 'flex';
    } else {
      navbarLinks.style.display = 'none';
    }
  }