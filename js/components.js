import { setupThemeToggle } from './theme.js';
import { setupNav } from './nav.js';

const sealSVG = `
<svg class="seal" viewBox="0 0 64 64" aria-hidden="true" focusable="false" role="presentation" width="32" height="32">
  <defs>
    <clipPath id="seal-clip">
      <circle cx="32" cy="32" r="29"/>
    </clipPath>
  </defs>
  <g clip-path="url(#seal-clip)" stroke="currentColor" stroke-width="1.4" stroke-linecap="butt" fill="none">
    <line x1="0" y1="6"  x2="64" y2="6"/>
    <line x1="0" y1="10" x2="64" y2="10"/>
    <line x1="0" y1="14" x2="64" y2="14"/>
    <line x1="0" y1="18" x2="64" y2="18"/>
    <line x1="0" y1="22" x2="64" y2="22"/>
    <line x1="0" y1="26" x2="64" y2="26"/>
    <line x1="0" y1="30" x2="64" y2="30"/>
    <line x1="0" y1="34" x2="64" y2="34"/>
    <line x1="0" y1="38" x2="64" y2="38"/>
    <line x1="0" y1="42" x2="64" y2="42"/>
    <line x1="0" y1="46" x2="64" y2="46"/>
    <line x1="0" y1="50" x2="64" y2="50"/>
    <line x1="0" y1="54" x2="64" y2="54"/>
    <line x1="0" y1="58" x2="64" y2="58"/>
  </g>
</svg>`;

export function renderMasthead() {
  const header = document.querySelector('.doc__masthead');
  if (!header) return;

  header.innerHTML = `
    <a class="doc__brand" href="/" aria-label="Ahad Web Studio — home">
      <span class="doc__brand-seal">${sealSVG}</span>
      <span class="doc__brand-text">
        <span class="doc__brand-name">Ahad Web Studio</span>
        <span class="doc__brand-tagline">Website fixes for small businesses</span>
      </span>
    </a>

    <div class="doc__divider" aria-hidden="true"></div>

    <div class="doc__meta-top">
      <div class="doc__meta-top-row">
        <button class="nav-mobile-toggle">MENU ↓</button>
        <nav class="nav" aria-label="Primary">
          <a class="nav__item" href="/#checks">Checks</a>
          <a class="nav__item" href="/#pricing">Pricing</a>
          <a class="nav__item" href="/sample/">Sample</a>
          <a class="nav__item" href="/#faq">FAQ</a>
          <a class="nav__item" href="/#contact">Contact</a>
        </nav>

        <div class="toggle" role="group" aria-label="Color theme" data-theme-toggle>
          <button type="button" class="toggle__btn" data-theme-set="auto" aria-pressed="true" title="Match system theme">AUTO</button>
          <button type="button" class="toggle__btn" data-theme-set="light" aria-pressed="false" title="Light theme">LIGHT</button>
          <button type="button" class="toggle__btn" data-theme-set="dark" aria-pressed="false" title="Dark theme">DARK</button>
        </div>
      </div>
    </div>
  `;
}

export function renderSidebar() {
  const sidebar = document.querySelector('.doc__sidebar');
  if (!sidebar) return;

  const section = sidebar.getAttribute('data-section') || '00/STUDIO';
  const meta = JSON.parse(sidebar.getAttribute('data-meta') || '{}');

  let metaHTML = '';
  for (const [key, value] of Object.entries(meta)) {
    metaHTML += `
      <div class="runner__field">
        <span class="runner__key">${key}</span>
        <span class="tnum">${value}</span>
      </div>
    `;
  }

  sidebar.innerHTML = `
    <div class="doc__sidebar-block">
      <div class="runner">
        <div class="runner__field">
          <span class="runner__key">SECTION</span>
          <span>${section}</span>
        </div>
        ${metaHTML}
      </div>
    </div>
  `;
}

export function renderColophon() {
  const footer = document.querySelector('.doc__colophon');
  if (!footer) return;

  footer.innerHTML = `
    <div class="doc__colophon-left">
      &copy; 2026 &nbsp; Ahad Web Studio · Lahore, Pakistan
    </div>
    <div class="doc__colophon-center"></div>
    <div class="doc__colophon-right">
      <a href="https://syedabdulahad.me">syedabdulahad.me</a>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderMasthead();
  renderSidebar();
  renderColophon();

  setupThemeToggle();
  setupNav();
});
