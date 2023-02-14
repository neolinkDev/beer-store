import { getElement } from './utils';

// '$' DOM variables

const $toggleNav      = getElement(".toggle-nav"),
      $sidebarOverlay = getElement(".sidebar-overlay"),
      $closeBtn       = getElement(".sidebar-close");

const bHidden = getElement('body');


$toggleNav.addEventListener('click', () => {
  $sidebarOverlay.classList.add('show');
  bHidden.classList.add('b-hidden');
});

$closeBtn.addEventListener('click', () => {
  $sidebarOverlay.classList.remove('show');
  bHidden.classList.remove('b-hidden');
});
