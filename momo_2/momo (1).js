/**
 * Momo - Fonda's little buddy mascot
 *
 * Pure mascot only. Drop into any site.
 *
 * Usage:
 *   <script src="momo.js"></script>
 *   <script>
 *     MomoMascot.init({
 *       images: {
 *         mug:    './momo-mug.png',
 *         pompom: './momo-pompom.png',
 *         bag:    './momo-bag.png'
 *       }
 *     });
 *   </script>
 *
 * If images are in the same folder as this script you can just call:
 *   MomoMascot.init();
 */

(function (global) {
  'use strict';

  const DEFAULT_IMAGES = {
    mug: 'momo-mug.png',
    pompom: 'momo-pompom.png',
    bag: 'momo-bag.png',
  };

  const PHRASES = [
    "hey! it's momo, Fonda's little buddy!",
    "i'm not a button",
    "ouch",
    "hey, it's rude",
    "ouch, stop poking me",
    "okay, this is the 193847th time today!",
    "whatsup",
    "okay",
    "heehee~ that tickles",
    "soft ears only, please!",
    "momo needs a snack break…",
    "are you bored? me too!",
    "boop!",
    "Fonda says hi ✨",
    "paws up, no more poking!",
    "i'm just a little bunny…",
    "okay okay i see you",
    "hanging in there?",
    "one more and i start charging",
    "momo love you though ♡",
  ];

  const FALL_PHRASE = "hang tight! i'm falling!";
  const GREETING_PHRASE = "How are you doing buddy?";

  // Base config (size is calculated responsively)
  const config = {
    sizeDesktop: 148,         // 25% bigger than previous 118
    sizeMobile: 108,          // 25% bigger than previous 86
    mobileBreakpoint: 640,
    groundOffsetDesktop: 32,
    groundOffsetMobile: 22,
    walkSpeed: 0.765,         // 15% slower than previous 0.9
    bobAmount: 7,
    bubbleDuration: 3400,
    fallChance: 0.0055,
    minWalkTime: 7000,
    zIndex: 9999,
    fallWarningDuration: 1000, // time the "i'm falling" bubble shows before the fall actually starts
    fallGravity: 0.22,         // lower = slower, more gentle fall
    fallMaxVel: 7,             // terminal velocity cap so it never speeds up too much
    greetingDelay: 1200,       // how long after page load before momo greets the visitor
  };

  let state = {
    el: null,
    sprite: null,
    bubble: null,
    x: 100,
    y: 0,
    dir: 1,
    mode: 'walk',
    fallPending: false,
    fallVel: 0,
    phraseIndex: 0,
    bubbleTimer: null,
    lastFall: 0,
    raf: null,
    currentImage: 'mug',
    images: { ...DEFAULT_IMAGES },
    size: config.sizeDesktop,
    groundOffset: config.groundOffsetDesktop,
  };

  function getResponsiveSize() {
    const isMobile = window.innerWidth < config.mobileBreakpoint;
    return {
      size: isMobile ? config.sizeMobile : config.sizeDesktop,
      groundOffset: isMobile ? config.groundOffsetMobile : config.groundOffsetDesktop,
    };
  }

  function createStyles() {
    if (document.getElementById('momo-mascot-styles')) return;

    const style = document.createElement('style');
    style.id = 'momo-mascot-styles';
    style.textContent = `
      .momo-mascot {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: ${config.zIndex};
        pointer-events: none;
        user-select: none;
        will-change: transform;
        /* size set via JS for responsiveness */
      }
      .momo-mascot * {
        pointer-events: none;
      }
      .momo-mascot .momo-hit {
        position: absolute;
        inset: 0;
        pointer-events: auto;
        cursor: pointer;
        border: none;
        background: transparent;
        padding: 0;
        margin: 0;
      }
      .momo-mascot .momo-sprite {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0 3px 4px rgba(0,0,0,0.22));
        transform-origin: center bottom;
      }
      .momo-mascot.flipped .momo-sprite {
        transform: scaleX(-1);
      }
      /* Walking cycle – bounce + slight lean to feel like steps */
      .momo-mascot.bobbing .momo-sprite {
        animation: momo-walk 0.55s ease-in-out infinite;
      }
      @keyframes momo-walk {
        0%   { transform: translateY(0) rotate(0deg); }
        25%  { transform: translateY(-${config.bobAmount}px) rotate(-2.5deg); }
        50%  { transform: translateY(0) rotate(0deg); }
        75%  { transform: translateY(-${config.bobAmount * 0.85}px) rotate(2.5deg); }
        100% { transform: translateY(0) rotate(0deg); }
      }
      .momo-mascot.flipped.bobbing .momo-sprite {
        animation: momo-walk-flipped 0.55s ease-in-out infinite;
      }
      @keyframes momo-walk-flipped {
        0%   { transform: scaleX(-1) translateY(0) rotate(0deg); }
        25%  { transform: scaleX(-1) translateY(-${config.bobAmount}px) rotate(2.5deg); }
        50%  { transform: scaleX(-1) translateY(0) rotate(0deg); }
        75%  { transform: scaleX(-1) translateY(-${config.bobAmount * 0.85}px) rotate(-2.5deg); }
        100% { transform: scaleX(-1) translateY(0) rotate(0deg); }
      }

      /* Speech bubble – sized to content */
      .momo-bubble {
        position: absolute;
        bottom: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%) translateY(4px);
        background: #fff;
        color: #1a1a1a;
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
        font-size: 13.5px;
        font-weight: 500;
        line-height: 1.35;
        padding: 7px 12px;
        border-radius: 14px;
        box-shadow: 0 3px 14px rgba(0,0,0,0.16);
        white-space: nowrap;
        width: max-content;
        max-width: min(240px, 70vw);
        text-align: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.18s ease, transform 0.18s ease;
        word-break: break-word;
      }
      .momo-bubble.visible {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      /* allow wrapping only when text is long */
      .momo-bubble.wrap {
        white-space: normal;
      }
      .momo-bubble::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 6px solid transparent;
        border-top-color: #fff;
      }

      /* soft ground shadow */
      .momo-mascot::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 1px;
        width: 52%;
        height: 7px;
        background: radial-gradient(ellipse, rgba(0,0,0,0.2) 0%, transparent 72%);
        transform: translateX(-50%);
        pointer-events: none;
        z-index: -1;
      }
    `;
    document.head.appendChild(style);
  }

  function createDOM() {
    const root = document.createElement('div');
    root.className = 'momo-mascot bobbing';
    root.setAttribute('aria-hidden', 'true');

    const bubble = document.createElement('div');
    bubble.className = 'momo-bubble';
    root.appendChild(bubble);

    const hit = document.createElement('button');
    hit.type = 'button';
    hit.className = 'momo-hit';
    hit.setAttribute('aria-label', "Momo, Fonda's little buddy");
    hit.addEventListener('click', onClick);

    const img = document.createElement('img');
    img.className = 'momo-sprite';
    img.alt = 'Momo';
    img.draggable = false;
    img.src = state.images.mug;

    hit.appendChild(img);
    root.appendChild(hit);
    document.body.appendChild(root);

    state.el = root;
    state.sprite = img;
    state.bubble = bubble;

    applySize();
  }

  function applySize() {
    const { size, groundOffset } = getResponsiveSize();
    state.size = size;
    state.groundOffset = groundOffset;

    if (state.el) {
      state.el.style.width = size + 'px';
      state.el.style.height = size + 'px';
    }
  }

  function showBubble(text) {
    if (state.bubbleTimer) clearTimeout(state.bubbleTimer);

    state.bubble.textContent = text;

    // decide if it needs wrapping
    if (text.length > 28) {
      state.bubble.classList.add('wrap');
    } else {
      state.bubble.classList.remove('wrap');
    }

    state.bubble.classList.add('visible');
    state.bubbleTimer = setTimeout(() => {
      state.bubble.classList.remove('visible');
    }, config.bubbleDuration);
  }

  function onClick(e) {
    e.preventDefault();
    e.stopPropagation();

    // sometimes switch pose
    if (Math.random() < 0.38) {
      const keys = Object.keys(state.images);
      const next = keys[(keys.indexOf(state.currentImage) + 1) % keys.length];
      state.currentImage = next;
      state.sprite.src = state.images[next];
    }

    const phrase = PHRASES[state.phraseIndex % PHRASES.length];
    state.phraseIndex++;
    showBubble(phrase);
  }

  function updateTransform() {
    if (state.mode === 'fall') {
      state.el.style.bottom = 'auto';
      state.el.style.top = '0';
      state.el.style.transform = `translate(${state.x}px, ${state.y}px)`;
    } else {
      state.el.style.top = 'auto';
      state.el.style.bottom = '0';
      state.el.style.transform = `translate(${state.x}px, -${state.groundOffset}px)`;
    }

    if (state.dir === -1) {
      state.el.classList.add('flipped');
    } else {
      state.el.classList.remove('flipped');
    }
  }

  function pickNewDirection() {
    if (Math.random() < 0.32) {
      state.dir *= -1;
    }
  }

  function startFall() {
    // Warn first, then actually fall a moment later — never trigger mid-fall
    // or while a warning is already pending.
    if (state.mode !== 'walk' || state.fallPending) return;
    const now = Date.now();
    if (now - state.lastFall < config.minWalkTime) return;

    state.fallPending = true;
    state.lastFall = now;
    showBubble(FALL_PHRASE);

    setTimeout(() => {
      // Safety check in case destroy() ran during the warning window
      if (!state.el || !state.fallPending) return;
      beginFall();
    }, config.fallWarningDuration);
  }

  function beginFall() {
    state.fallPending = false;
    state.mode = 'fall';
    state.el.classList.remove('bobbing');
    state.fallVel = 0;

    state.y = -state.size - 50;
    state.x = Math.max(16, Math.min(window.innerWidth - state.size - 16,
      state.x + (Math.random() - 0.5) * 140));

    updateTransform();
  }

  function tick() {
    const maxX = window.innerWidth - state.size - 14;
    const minX = 14;

    if (state.mode === 'walk') {
      state.x += state.dir * config.walkSpeed;

      if (state.x >= maxX) {
        state.x = maxX;
        state.dir = -1;
      } else if (state.x <= minX) {
        state.x = minX;
        state.dir = 1;
      }

      if (Math.random() < 0.0038) {
        pickNewDirection();
      }

      if (Math.random() < config.fallChance) {
        startFall();
      }

      updateTransform();
    } else if (state.mode === 'fall') {
      state.fallVel = Math.min((state.fallVel || 0) + config.fallGravity, config.fallMaxVel);
      state.y += state.fallVel;

      const groundY = window.innerHeight - state.size - state.groundOffset;

      if (state.y >= groundY) {
        state.y = 0;
        state.mode = 'walk';
        state.fallVel = 0;
        state.el.classList.add('bobbing');
        if (Math.random() < 0.5) state.dir *= -1;
        updateTransform();
      } else {
        updateTransform();
      }
    }

    state.raf = requestAnimationFrame(tick);
  }

  function onResize() {
    applySize();
    const maxX = window.innerWidth - state.size - 14;
    if (state.x > maxX) state.x = maxX;
    if (state.x < 14) state.x = 14;
    updateTransform();
  }

  function init(userConfig = {}) {
    if (state.el) return;

    if (userConfig.images) {
      state.images = { ...DEFAULT_IMAGES, ...userConfig.images };
    }
    // allow overriding sizes if wanted
    if (userConfig.sizeDesktop) config.sizeDesktop = userConfig.sizeDesktop;
    if (userConfig.sizeMobile) config.sizeMobile = userConfig.sizeMobile;
    if (userConfig.zIndex) config.zIndex = userConfig.zIndex;

    createStyles();
    createDOM();

    state.x = 60 + Math.random() * 100;
    state.dir = Math.random() < 0.5 ? 1 : -1;
    state.lastFall = Date.now();
    updateTransform();

    window.addEventListener('resize', onResize);
    state.raf = requestAnimationFrame(tick);

    setTimeout(() => {
      if (state.el) showBubble(GREETING_PHRASE);
    }, config.greetingDelay);
  }

  function destroy() {
    if (state.raf) cancelAnimationFrame(state.raf);
    if (state.bubbleTimer) clearTimeout(state.bubbleTimer);
    window.removeEventListener('resize', onResize);
    if (state.el && state.el.parentNode) {
      state.el.parentNode.removeChild(state.el);
    }
    state.el = null;
  }

  global.MomoMascot = {
    init,
    destroy,
    showBubble,
  };
})(typeof window !== 'undefined' ? window : this);
