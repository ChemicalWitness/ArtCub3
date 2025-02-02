const navList = document.querySelector('.header__nav-list');
const navButton = document.querySelector('.header__nav-btn');

export const initHeaderMenu = () => {
  navButton.addEventListener('click', (evt) => {
    if (navList.classList.contains('is-opened')) {
      navList.classList.remove('is-opened');
    } else {
      navList.classList.add('is-opened');
    }
  });
};
