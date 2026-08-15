// const burgerBtn = document.querySelector('.header-burher-btn');//кнопка яка відкриває мобільне меню
// const mobileMenu = document.querySelector('.mobile-menu');//елемент до мобільного меню (div)
// const closeBtn = document.querySelectorAll('.header-close-btn');//кнопка яка закриває мобільне меню
// // const heroLink = document.querySelector('.hero-btn');// Линка в секції Hero дз
// // const backdrop = document.querySelector('.backdrop');// backdrop для модалки з формою дз
// const navLinks = document.querySelectorAll('.header-nav-list-item');//елементи списку навігації (li)

// burgerBtn.addEventListener('click', handleClickBurgerBtn);
// // heroLink.addEventListener('click', handleClickHeroLink);

// function handleClickBurgerBtn() {
//   mobileMenu.classList.add('is-open');
// }

// function handleClickCloseBtn(e) {
//   mobileMenu.classList.remove('is-open');
// //   backdrop.classList.remove('is-open');
// }
// navLinks.forEach((link) => link.addEventListener('click', handleClickCloseBtn));
// closeBtn.forEach((link) => link.addEventListener('click', handleClickCloseBtn));

// // function handleClickHeroLink() {
// //   backdrop.classList.add('is-open');
// // }

// Order modal
const orderModalBackdrop = document.querySelector('.order-modal-backdrop');
const orderModalOpenBtns = document.querySelectorAll('[data-order-modal-open]');
const orderModalCloseBtn = document.querySelector('.order-modal-close-btn');
const orderModalForm = document.querySelector('.order-modal-form');

orderModalOpenBtns.forEach(btn =>
  btn.addEventListener('click', handleOrderModalOpen)
);
orderModalCloseBtn.addEventListener('click', handleOrderModalClose);
orderModalBackdrop.addEventListener('click', handleOrderModalBackdropClick);
orderModalForm.addEventListener('submit', handleOrderModalSubmit);
document.addEventListener('keydown', handleOrderModalEscape);

function handleOrderModalOpen() {
  orderModalBackdrop.classList.add('is-modal-open');
  document.body.style.overflow = 'hidden';
}

function handleOrderModalClose() {
  orderModalBackdrop.classList.remove('is-modal-open');
  document.body.style.overflow = '';
  orderModalForm.reset();
  orderModalForm.classList.remove('is-validated');
}

function handleOrderModalBackdropClick(e) {
  if (e.target === orderModalBackdrop) {
    handleOrderModalClose();
  }
}

function handleOrderModalEscape(e) {
  const isOpen = orderModalBackdrop.classList.contains('is-modal-open');

  if (e.key === 'Escape' && isOpen) {
    handleOrderModalClose();
  }
}

function handleOrderModalSubmit(e) {
  e.preventDefault();
  orderModalForm.classList.add('is-validated');

  if (orderModalForm.checkValidity()) {
    handleOrderModalClose();
  }
}
