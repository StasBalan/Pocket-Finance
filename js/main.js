const DEFAULT_SLIDER_NAVIGATION_ITEMS = [
  '<img src="./img/arrow-nav.svg">',
  '<img src="./img/arrow-nav.svg">',
];

$(document).ready(() => {
  applySliderControllerClients('.slider__items');
  applyMenuController();
  applyModalController();
});

function applySliderControllerClients(item) {
  $(document).ready(() => {
      $(item).owlCarousel({
          loop:true,
          dots:true,
          nav: true,
          responsive: {
              0: {
                  items: 1,
                  nav:false,
              },
              768: {
                  items: 2,
              },
              1280: {
                  items: 3,
              },
              1500: {
                  items: 5,
              },
          },
          navText: DEFAULT_SLIDER_NAVIGATION_ITEMS
      });
  });
}

function applyMenuController() {
  const burger = document.querySelector('.mobile-header__burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const cross = document.querySelector('.mobile-header__cross');
  const mobileHeader = document.querySelector('.mobile-header');
  
  cross.style.display = 'none';

  function showMobileMenu() {
    mobileMenu.classList.add('show-menu');
    document.body.style.overflowY = "hidden";
    burger.style.display = 'none';
    cross.style.display = 'block';
    mobileHeader.style.boxShadow = 'none';
  }

  function hideMobileMenu() {
    mobileMenu.classList.remove('show-menu');
    document.body.style.overflowY = "auto";
    burger.style.display = 'block';
    cross.style.display = 'none';
    mobileHeader.style.boxShadow = '0px 12px 120px rgba(0, 0, 0, 0.32)';
  }

  burger.addEventListener('click', showMobileMenu);
  cross.addEventListener('click', hideMobileMenu);
}

function applyModalController() {
  const modal = document.querySelector('.modal-join');
  const buttons = document.querySelectorAll('.join__button');

  function openModal() {
    modal.style.display = "flex";
    document.body.style.overflowY = "hidden";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  }

  buttons.forEach((button) => {
    button.addEventListener('click', openModal);
  });
}
