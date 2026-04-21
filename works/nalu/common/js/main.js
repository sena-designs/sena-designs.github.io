console.log('main.js 読み込まれた！');

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const spMenu = document.querySelector('.spMenu');
  const overlay = document.querySelector('.spMenu_overlay');
  const closeBtn = document.querySelector('.spMenu_close');

  if (!hamburger || !spMenu) return;

  const openMenu = () => {
    hamburger.classList.add('is-open');
    spMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    hamburger.classList.remove('is-open');
    spMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    spMenu.classList.contains('is-open') ? closeMenu() : openMenu();
  });

  overlay?.addEventListener('click', closeMenu);
  closeBtn?.addEventListener('click', closeMenu);
});
