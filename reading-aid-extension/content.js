// Reading Aid Extension - Content Script
(function() {
  'use strict';

  let rulerEl = null;
  let rulerOn = false;
  let dyslexicOn = false;
  let overlayType = '';
  let speakingEl = null;

  // --- Reading Ruler ---
  function createRuler() {
    rulerEl = document.createElement('div');
    rulerEl.className = 'ra-ruler';
    rulerEl.style.display = 'none';
    document.body.appendChild(rulerEl);
  }

  function onMouseMove(e) {
    if (!rulerOn || !rulerEl) return;
    rulerEl.style.top = (e.clientY - 26) + 'px';
  }

  // --- Commands from popup ---
  chrome.runtime.onMessage.addListener((msg, sender, respond) => {
    switch (msg.cmd) {
      case 'toggleRuler':
        rulerOn = msg.on;
        if (!rulerEl) createRuler();
        rulerEl.style.display = rulerOn ? 'block' : 'none';
        document.body.style.cursor = rulerOn ? 'none' : '';
        break;

      case 'toggleDyslexic':
        dyslexicOn = msg.on;
        document.body.classList.toggle('ra-dyslexic', dyslexicOn);
        break;

      case 'setOverlay':
        document.body.classList.remove('ra-overlay-cream', 'ra-overlay-rose', 'ra-overlay-blue', 'ra-overlay-green');
        if (msg.overlay) document.body.classList.add('ra-overlay-' + msg.overlay);
        overlayType = msg.overlay;
        break;

      case 'speakSelection':
        const sel = window.getSelection().toString();
        if (sel) {
          const utt = new SpeechSynthesisUtterance(sel);
          utt.lang = 'zh-CN';
          utt.rate = 0.85;
          speechSynthesis.speak(utt);
        }
        break;

      case 'stopSpeech':
        speechSynthesis.cancel();
        break;

      case 'getState':
        respond({ rulerOn, dyslexicOn, overlayType });
        return true; // async response
    }
  });

  document.addEventListener('mousemove', onMouseMove, { passive: true });

  // Initialize ruler element
  createRuler();
})();
