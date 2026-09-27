/* ELA 301 laboratory reports — table-of-contents scroll-spy and smooth anchoring.
   Progressive enhancement only: the pages are fully usable with JavaScript disabled. */
(function () {
  'use strict';

  var toc = document.querySelector('.toc');
  if (!toc) return;

  var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
  if (!links.length) return;

  /* Pair each TOC link with the section it points at. */
  var entries = links.map(function (link) {
    var id = decodeURIComponent(link.getAttribute('href').slice(1));
    return { link: link, target: document.getElementById(id) };
  }).filter(function (e) { return e.target; });

  if (!entries.length) return;

  var current = null;

  function setActive(entry) {
    if (entry === current) return;
    if (current) current.link.classList.remove('active');
    if (entry) entry.link.classList.add('active');
    current = entry;
  }

  /* Choose the last section whose top has passed the reading line near the top
     of the viewport. Falls back to the first section while above all of them. */
  function update() {
    var line = (window.innerHeight || document.documentElement.clientHeight) * 0.28;
    var found = null;
    for (var i = 0; i < entries.length; i++) {
      var top = entries[i].target.getBoundingClientRect().top;
      if (top <= line) found = entries[i]; else break;
    }

    /* At the very bottom of the page, always highlight the final section, so the
       last (often short) block is reachable in the contents list. */
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight;
    var viewport = window.innerHeight || document.documentElement.clientHeight;
    if (scrollY + viewport >= docHeight - 4) found = entries[entries.length - 1];

    setActive(found || entries[0]);
  }

  /* Throttle to one update per animation frame. */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      ticking = false;
      update();
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  window.addEventListener('hashchange', onScroll);
  document.addEventListener('DOMContentLoaded', update);
  update();
})();
