'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const toggleModal = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

for (let button of btnsOpenModal) {
  button.addEventListener('click', toggleModal);
}

btnCloseModal.addEventListener('click', toggleModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('.hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
