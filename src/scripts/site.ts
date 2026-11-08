/**
 * Interações do site: tema, paleta, movimento, menu, animações ao rolar,
 * contadores, texto digitado, luz nos cartões e filtros de projetos.
 * Tudo é aprimoramento progressivo: sem JavaScript o conteúdo continua completo.
 */

type Mode = 'light' | 'dark';
type Motion = 'full' | 'reduce';

const root = document.documentElement;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

const store = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* navegação privada ou armazenamento bloqueado: a escolha vale só nesta página */
    }
  },
};

const motionOn = () => root.dataset.motion === 'full';

/* ---------- tema claro e escuro ---------- */
const themeColors = (window as unknown as { __themeColors?: Record<string, Record<Mode, string>> })
  .__themeColors;

function syncThemeUI() {
  const dark = root.dataset.mode === 'dark';
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(dark));
  });
  const color = themeColors?.[root.dataset.palette ?? '']?.[dark ? 'dark' : 'light'];
  if (color) {
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute('content', color);
    });
  }
  document.querySelectorAll<HTMLInputElement>('[data-palette-option]').forEach((input) => {
    input.checked = input.value === root.dataset.palette;
  });
}

function changeTheme(update: () => void, origin?: HTMLElement) {
  const startViewTransition = (
    document as Document & { startViewTransition?: (cb: () => void) => { finished: Promise<void> } }
  ).startViewTransition;

  if (!motionOn()) {
    update();
    return;
  }

  if (!startViewTransition) {
    root.classList.add('theme-fade');
    update();
    window.setTimeout(() => root.classList.remove('theme-fade'), 450);
    return;
  }

  const rect = origin?.getBoundingClientRect();
  const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
  const y = rect ? rect.top + rect.height / 2 : 0;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  root.style.setProperty('--vt-x', `${x}px`);
  root.style.setProperty('--vt-y', `${y}px`);
  root.style.setProperty('--vt-r', `${radius}px`);
  root.classList.add('theme-transition');
  const transition = startViewTransition.call(document, update);
  transition.finished.finally(() => root.classList.remove('theme-transition'));
}

function setMode(mode: Mode, origin?: HTMLElement) {
  changeTheme(() => {
    root.dataset.mode = mode;
    syncThemeUI();
  }, origin);
}

document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next: Mode = root.dataset.mode === 'dark' ? 'light' : 'dark';
    store.set('cm-mode', next);
    setMode(next, btn);
  });
});

// Sem escolha salva, o site acompanha o sistema operacional.
prefersDark.addEventListener('change', (event) => {
  if (!store.get('cm-mode')) setMode(event.matches ? 'dark' : 'light');
});

/* ---------- paletas ---------- */
document.querySelectorAll<HTMLInputElement>('[data-palette-option]').forEach((input) => {
  input.addEventListener('change', () => {
    if (!input.checked) return;
    store.set('cm-palette', input.value);
    changeTheme(() => {
      root.dataset.palette = input.value;
      syncThemeUI();
    }, input.closest('[popover]')?.previousElementSibling as HTMLElement | undefined);
  });
});

/* ---------- movimento ---------- */
const motionListeners = new Set<(on: boolean) => void>();

function syncMotionUI() {
  document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(!motionOn()));
  });
}

document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next: Motion = motionOn() ? 'reduce' : 'full';
    store.set('cm-motion', next);
    root.dataset.motion = next;
    syncMotionUI();
    revealAll();
    motionListeners.forEach((fn) => fn(next === 'full'));
  });
});

syncThemeUI();
syncMotionUI();

/* ---------- cabeçalho ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
if (header) {
  let ticking = false;
  const update = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

/* ---------- menu do celular ---------- */
const menu = document.querySelector<HTMLDialogElement>('#menu-mobile');
const menuOpen = document.querySelector<HTMLButtonElement>('[data-menu-open]');
if (menu && menuOpen && typeof menu.showModal === 'function') {
  const close = () => menu.open && menu.close();
  menuOpen.addEventListener('click', () => menu.showModal());
  menu.querySelectorAll('[data-menu-close], [data-menu-link]').forEach((el) => {
    el.addEventListener('click', close);
  });
  menu.addEventListener('click', (event) => {
    if (event.target === menu) close();
  });
  window.matchMedia('(min-width: 62rem)').addEventListener('change', (event) => {
    if (event.matches) close();
  });
}

/* ---------- revelar ao rolar ---------- */
const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
const onVisible = new WeakMap<Element, () => void>();

function show(el: Element) {
  el.classList.add('is-visible');
  onVisible.get(el)?.();
  onVisible.delete(el);
}

const revealObserver =
  'IntersectionObserver' in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              show(entry.target);
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
      )
    : null;

function revealAll() {
  if (motionOn()) return;
  revealTargets.forEach(show);
}

if (revealObserver && motionOn()) {
  revealTargets.forEach((el) => revealObserver.observe(el));
} else {
  revealTargets.forEach(show);
}
root.classList.add('reveal-ready');

/* ---------- animações contínuas só enquanto visíveis ---------- */
if ('IntersectionObserver' in window) {
  const ambient = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('is-paused', !entry.isIntersecting));
  });
  document.querySelectorAll('[data-ambient]').forEach((el) => ambient.observe(el));
}

/* ---------- contadores ---------- */
document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
  const target = Number(el.dataset.count);
  const holder = el.closest('[data-reveal]') ?? el;
  const run = () => {
    if (!motionOn() || !Number.isFinite(target)) {
      el.textContent = target.toLocaleString('pt-BR');
      return;
    }
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      el.textContent = Math.round(target * eased).toLocaleString('pt-BR');
      if (t < 1) requestAnimationFrame(tick);
    };
    el.textContent = '0';
    requestAnimationFrame(tick);
  };
  if (holder.classList.contains('is-visible')) run();
  else onVisible.set(holder, run);
});

/* ---------- texto digitado ---------- */
document.querySelectorAll<HTMLElement>('[data-typewriter]').forEach((el) => {
  const output = el.querySelector<HTMLElement>('[data-typewriter-text]');
  let words: string[] = [];
  try {
    words = JSON.parse(el.dataset.words ?? '[]');
  } catch {
    return;
  }
  if (!output || words.length === 0) return;

  let word = 0;
  let chars = words[0].length;
  let deleting = false;
  let timer = 0;
  let inView = true;

  const step = () => {
    window.clearTimeout(timer);
    if (!motionOn() || !inView || document.hidden) return;
    const current = words[word];
    chars += deleting ? -1 : 1;
    output.textContent = current.slice(0, chars);
    let delay = deleting ? 32 : 70;
    if (!deleting && chars >= current.length) {
      deleting = true;
      delay = 2200;
    } else if (deleting && chars <= 0) {
      deleting = false;
      word = (word + 1) % words.length;
      delay = 380;
    }
    timer = window.setTimeout(step, delay);
  };

  const restart = (on: boolean) => {
    window.clearTimeout(timer);
    if (on) {
      timer = window.setTimeout(step, 1600);
    } else {
      word = 0;
      chars = words[0].length;
      deleting = false;
      output.textContent = words[0];
    }
  };

  motionListeners.add(restart);
  document.addEventListener('visibilitychange', () => restart(motionOn()));
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      restart(motionOn() && inView);
    }).observe(el);
  }
  restart(motionOn());
});

/* ---------- cartão carlos.ts: código, design, documento e slides ---------- */
document.querySelectorAll<HTMLElement>('[data-studio]').forEach((studio) => {
  const scenes = Array.from(studio.querySelectorAll<HTMLElement>('[data-scene]'));
  const tabs = Array.from(studio.querySelectorAll<HTMLButtonElement>('[data-scene-tab]'));
  const tabGroup = studio.querySelector<HTMLElement>('[data-studio-tabs]');
  const status = studio.querySelector<HTMLElement>('[data-studio-status]');
  if (scenes.length < 2) return;
  if (tabGroup) tabGroup.hidden = false;

  let current = 0;
  let auto = true; // troca sozinha até a pessoa escolher uma visão
  let visible = false;
  let waiting = false; // ponteiro em cima ou foco do teclado: não troca de cena
  let timer = 0;
  let remaining = 0;
  let startedAt = 0;

  const duration = (i: number) => Number(scenes[i].dataset.duration) || 8000;
  const animating = () => motionOn() && visible && !document.hidden;

  // Liga e desliga o relógio que passa para a próxima cena, guardando o tempo que falta.
  const clock = () => {
    studio.classList.toggle('is-held', motionOn() && !animating());
    studio.classList.toggle('is-waiting', waiting);
    studio.classList.toggle('is-auto', auto);
    const advance = animating() && auto && !waiting;
    if (advance && !startedAt) {
      startedAt = performance.now();
      timer = window.setTimeout(() => {
        startedAt = 0;
        show((current + 1) % scenes.length);
      }, Math.max(0, remaining));
    } else if (!advance && startedAt) {
      window.clearTimeout(timer);
      remaining -= performance.now() - startedAt;
      startedAt = 0;
    }
  };

  const play = (scene: HTMLElement) => {
    scene.classList.remove('is-playing');
    if (!motionOn()) return;
    void scene.offsetWidth; // força o recomeço das animações da cena
    scene.classList.add('is-playing');
  };

  function show(index: number, manual = false) {
    const previous = scenes[current];
    window.clearTimeout(timer);
    startedAt = 0;
    current = index;
    remaining = duration(index);
    scenes.forEach((scene, i) => scene.classList.toggle('is-active', i === index));
    play(scenes[index]);
    if (previous !== scenes[index]) {
      // a cena anterior termina de sumir no estado final e só então volta ao início
      window.setTimeout(() => {
        if (!previous.classList.contains('is-active')) previous.classList.remove('is-playing');
      }, 700);
    }
    tabs.forEach((tab, i) => tab.setAttribute('aria-pressed', String(i === index)));
    studio.style.setProperty('--scene-ms', `${remaining}ms`);
    if (manual) {
      auto = false;
      if (status) status.textContent = `Cartão mostrado como ${tabs[index]?.dataset.label ?? ''}.`;
    }
    clock();
  }

  tabs.forEach((tab, i) => tab.addEventListener('click', () => show(i, true)));
  studio.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'mouse') return;
    waiting = true;
    clock();
  });
  studio.addEventListener('pointerleave', (event) => {
    if (event.pointerType !== 'mouse') return;
    waiting = false;
    clock();
  });
  studio.addEventListener('focusin', (event) => {
    if (!(event.target as Element).matches(':focus-visible')) return;
    waiting = true;
    clock();
  });
  studio.addEventListener('focusout', (event) => {
    if (studio.contains(event.relatedTarget as Node | null)) return;
    waiting = false;
    clock();
  });
  document.addEventListener('visibilitychange', clock);
  motionListeners.add((on) => {
    if (on) {
      show(current);
    } else {
      scenes.forEach((scene) => scene.classList.remove('is-playing'));
      clock();
    }
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        clock();
      },
      { threshold: 0.3 },
    ).observe(studio);
  } else {
    visible = true;
  }
  show(0);
});

/* ---------- luz que segue o ponteiro e inclinação ---------- */
if (finePointer.matches) {
  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });

  document.querySelectorAll<HTMLElement>('[data-tilt-area]').forEach((area) => {
    const target = area.querySelector<HTMLElement>('[data-tilt]');
    if (!target) return;
    let frame = 0;
    area.addEventListener('pointermove', (event) => {
      if (!motionOn()) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = area.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        target.style.setProperty('--tilt-x', `${(-py * 7).toFixed(2)}deg`);
        target.style.setProperty('--tilt-y', `${(px * 9).toFixed(2)}deg`);
      });
    });
    area.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      target.style.setProperty('--tilt-x', '0deg');
      target.style.setProperty('--tilt-y', '0deg');
    });
  });
}

/* ---------- filtro de projetos ---------- */
const filterGroup = document.querySelector<HTMLElement>('[data-filters]');
if (filterGroup) {
  filterGroup.hidden = false;
  const buttons = Array.from(filterGroup.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-project-type]'));
  const status = document.querySelector<HTMLElement>('[data-filter-status]');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const value = btn.dataset.filter ?? 'todos';
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      let shown = 0;
      items.forEach((item, index) => {
        const match = value === 'todos' || item.dataset.projectType === value;
        item.hidden = !match;
        if (match) {
          shown += 1;
          item.style.setProperty('--i', String(index % 3));
          item.classList.remove('is-visible');
          requestAnimationFrame(() => requestAnimationFrame(() => item.classList.add('is-visible')));
        }
      });
      if (status) {
        status.textContent = `${shown} ${shown === 1 ? 'projeto exibido' : 'projetos exibidos'}`;
      }
    });
  });
}
