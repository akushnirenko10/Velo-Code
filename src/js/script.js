// Mobile menu
const burgerBtn = document.querySelector('.burger-button');
const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

burgerBtn.addEventListener('click', handleMobileMenuOpen);
mobileMenuCloseBtn.addEventListener('click', handleMobileMenuClose);
mobileMenuLinks.forEach(link =>
  link.addEventListener('click', handleMobileMenuClose)
);
document.addEventListener('keydown', handleMobileMenuEscape);

function handleMobileMenuOpen() {
  mobileMenuBackdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function handleMobileMenuClose() {
  mobileMenuBackdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}

function handleMobileMenuEscape(e) {
  const isOpen = mobileMenuBackdrop.classList.contains('is-open');

  if (e.key === 'Escape' && isOpen) {
    handleMobileMenuClose();
  }
}

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
