(function () {
  document.documentElement.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll reveal with a small stagger per row
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var siblings = Array.prototype.slice.call(entry.target.parentNode.children);
        entry.target.style.transitionDelay = (siblings.indexOf(entry.target) % 4) * 90 + 'ms';
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  // Sticky mobile CTA: show after the hero, hide while pricing is on screen
  var sticky = document.querySelector('.sticky-cta');
  var hero = document.querySelector('.hero, .page-hero');
  var pricing = document.getElementById('pricing');
  if (sticky && hero && 'IntersectionObserver' in window) {
    var heroVisible = true, pricingVisible = false;
    var update = function () {
      var show = !heroVisible && !pricingVisible;
      sticky.classList.toggle('is-visible', show);
      sticky.setAttribute('aria-hidden', String(!show));
      sticky.querySelector('a').tabIndex = show ? 0 : -1;
    };
    new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting; update(); }).observe(hero);
    if (pricing) new IntersectionObserver(function (e) { pricingVisible = e[0].isIntersecting; update(); }).observe(pricing);
  }

  // Conversion tracking on outbound order clicks
  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-track="order"]');
    if (!link) return;
    var pkg = link.getAttribute('data-pkg');
    var t = window.SITE_TRACKING || {};
    if (window.dataLayer) window.dataLayer.push({ event: 'order_click', package: pkg });
    if (window.gtag) {
      window.gtag('event', 'begin_checkout', { items: [{ item_id: 'pkg-' + pkg }] });
      if (t.adsId && t.adsLabel) window.gtag('event', 'conversion', { send_to: t.adsId + '/' + t.adsLabel });
    }
    if (window.uetq) window.uetq.push('event', 'begin_checkout', { event_label: 'pkg-' + pkg });
  });
})();
