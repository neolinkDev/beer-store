import { getElement } from './utils';

// '$' DOM variables

const $toggleNav      = getElement(".toggle-nav"),
      $sidebarOverlay = getElement(".sidebar-overlay"),
      $closeBtn       = getElement(".sidebar-close");

$toggleNav.addEventListener('click', () => {
  $sidebarOverlay.classList.add('show');
});

$closeBtn.addEventListener('click', () => {
  $sidebarOverlay.classList.remove('show');
});
