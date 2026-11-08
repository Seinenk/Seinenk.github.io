/*
 * Interações das páginas de projeto: sumário que acompanha a leitura, cópia das
 * cores, galeria com caixa de luz, comparação antes/depois, o Dino Runner
 * jogável e a execução do pytest. Tudo funciona sem animação quando o movimento
 * está desligado (data-motion="reduce").
 */

const root = document.documentElement;
const motionOn = () => root.dataset.motion === 'full';

/* ---------- sumário: destaca a seção que está sendo lida ---------- */
const toc = document.querySelector<HTMLElement>('[data-toc]');
if (toc && 'IntersectionObserver' in window) {
  const links = Array.from(toc.querySelectorAll<HTMLAnchorElement>('[data-toc-link]'));
  const byId = new Map(links.map((a) => [a.hash.slice(1), a]));
  const visible = new Map<string, number>();
  const setActive = (id: string) => {
    links.forEach((a) => {
      const on = a.hash.slice(1) === id;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
    const active = byId.get(id);
    if (active) {
      toc.style.setProperty('--toc-y', `${active.offsetTop}px`);
      toc.style.setProperty('--toc-h', `${active.offsetHeight}px`);
      toc.classList.add('has-active');
      const strip = active.closest('ol');
      if (strip && strip.scrollWidth > strip.clientWidth) {
        strip.scrollTo({ left: active.offsetLeft - 16, behavior: motionOn() ? 'smooth' : 'auto' });
      }
    }
  };
  // só contam os itens à mostra: com as abas, os das outras abas ficam escondidos
  const shown = () => links.filter((a) => a.offsetParent !== null).map((a) => a.hash.slice(1));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
        else visible.delete(entry.target.id);
      });
      // a seção ativa é a primeira (de cima para baixo) que está na faixa de leitura
      const order = shown();
      const current = order.find((id) => visible.has(id));
      if (current) setActive(current);
      // acima da primeira seção (ainda no topo da página), vale a primeira
      else if (order[0] && (document.getElementById(order[0])?.getBoundingClientRect().top ?? 0) > window.innerHeight * 0.2)
        setActive(order[0]);
    },
    { rootMargin: '-20% 0px -55% 0px' },
  );
  // trocou de aba: o destaque vai para a primeira seção dela
  document.addEventListener('case:tab', () => {
    const first = shown()[0];
    if (first) setActive(first);
  });
  byId.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

/* ---------- abas por área de atuação ---------- */
// O HTML traz as abas como âncoras e todas as seções à mostra (funciona sem script);
// um script embutido na página já escolheu a aba antes da primeira pintura
// (data-tab no <article>). Aqui entram a semântica de abas, o teclado e os botões.
const casePage = document.querySelector<HTMLElement>('[data-case]');
const tablist = document.querySelector<HTMLElement>('[data-tablist]');
if (casePage && tablist && casePage.dataset.tab) {
  const tabs = Array.from(tablist.querySelectorAll<HTMLAnchorElement>('[data-tab-link]'));
  const ids = tabs.map((a) => a.dataset.tabLink ?? '');
  const bar = document.querySelector<HTMLElement>('[data-tabs-bar]');
  const area = bar?.parentElement ?? null;
  const panelOf = (id: string) => document.getElementById(`aba-${id}`);

  tablist.setAttribute('role', 'tablist');
  tablist.setAttribute('aria-label', 'Áreas do projeto');
  tabs.forEach((a) => {
    const id = a.dataset.tabLink ?? '';
    a.id = `tab-${id}`;
    a.setAttribute('role', 'tab');
    a.setAttribute('aria-controls', `aba-${id}`);
    const panel = panelOf(id);
    if (panel) {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', a.id);
      panel.tabIndex = -1;
    }
  });

  // a pílula vai até a aba escolhida; no celular, a faixa rola até ela
  const placeInk = (animate: boolean) => {
    const active = tabs.find((a) => a.getAttribute('aria-selected') === 'true');
    if (!active) return;
    tablist.classList.toggle('is-moving', animate);
    tablist.style.setProperty('--ink-x', `${active.offsetLeft}px`);
    tablist.style.setProperty('--ink-w', `${active.offsetWidth}px`);
    tablist.classList.add('has-ink');
    const strip = tablist.parentElement;
    if (strip && strip.scrollWidth > strip.clientWidth) {
      strip.scrollTo({
        left: active.offsetLeft - (strip.clientWidth - active.offsetWidth) / 2,
        behavior: animate && motionOn() ? 'smooth' : 'auto',
      });
    }
  };

  // onde a área das abas começa, com a barra encostada no menu
  const areaTop = () => {
    if (!area || !bar) return 0;
    const stick = Number.parseFloat(getComputedStyle(bar).top) || 0;
    return area.getBoundingClientRect().top + window.scrollY - stick;
  };

  type Options = { scroll?: 'if-below' | 'always'; focus?: 'tab' | 'panel'; hash?: boolean };
  const select = (id: string, { scroll, focus, hash = true }: Options = {}) => {
    if (!ids.includes(id)) return;
    const before = casePage.dataset.tab ?? id;
    if (before !== id) {
      // a aba nova entra do lado para onde se andou
      casePage.style.setProperty('--tab-dir', ids.indexOf(id) > ids.indexOf(before) ? '1' : '-1');
      casePage.setAttribute('data-tab-switched', '');
    }
    casePage.dataset.tab = id;
    tabs.forEach((a) => {
      const on = a.dataset.tabLink === id;
      a.setAttribute('aria-selected', String(on));
      a.tabIndex = on ? 0 : -1;
    });
    placeInk(before !== id);
    if (hash) history.replaceState(null, '', `#aba-${id}`);
    const top = areaTop();
    if (scroll === 'always' || (scroll === 'if-below' && window.scrollY > top + 1)) {
      window.scrollTo({ top, behavior: motionOn() ? 'smooth' : 'auto' });
    }
    if (focus === 'tab') tabs.find((a) => a.dataset.tabLink === id)?.focus({ preventScroll: true });
    if (focus === 'panel') panelOf(id)?.focus({ preventScroll: true });
    document.dispatchEvent(new CustomEvent('case:tab', { detail: id }));
  };

  select(casePage.dataset.tab, { hash: false });
  new ResizeObserver(() => placeInk(false)).observe(tablist);

  tabs.forEach((a) =>
    a.addEventListener('click', (event) => {
      event.preventDefault();
      select(a.dataset.tabLink ?? '', { scroll: 'if-below' });
    }),
  );

  // teclado: setas, Home e End trocam de aba; espaço também escolhe
  tablist.addEventListener('keydown', (event) => {
    const i = tabs.findIndex((a) => a === document.activeElement);
    if (i < 0) return;
    const moves: Record<string, number> = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 };
    if (event.key in moves) {
      event.preventDefault();
      const target = tabs[(moves[event.key] + tabs.length) % tabs.length];
      select(target.dataset.tabLink ?? '', { focus: 'tab', scroll: 'if-below' });
    } else if (event.key === ' ') {
      event.preventDefault();
      select(tabs[i].dataset.tabLink ?? '', { scroll: 'if-below' });
    }
  });

  // fim de cada aba: anterior e próxima levam ao começo da outra aba
  document.querySelectorAll<HTMLAnchorElement>('[data-tab-go]').forEach((link) =>
    link.addEventListener('click', (event) => {
      event.preventDefault();
      select(link.dataset.tabGo ?? '', { scroll: 'always', focus: 'panel' });
    }),
  );
  document.querySelectorAll<HTMLAnchorElement>('[data-to-top]').forEach((link) =>
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: motionOn() ? 'smooth' : 'auto' });
      document.querySelector<HTMLElement>('.cs-title')?.focus({ preventScroll: true });
    }),
  );

  // um link para uma seção de outra aba (#visual, por exemplo) abre a aba dela
  window.addEventListener('hashchange', () => {
    const target = decodeURIComponent(location.hash.slice(1));
    if (target.startsWith('aba-')) {
      select(target.slice(4), { hash: false, scroll: 'always' });
      return;
    }
    const section = document.getElementById(target);
    const panel = section?.closest<HTMLElement>('[data-panel]');
    if (section && panel?.dataset.panel && panel.dataset.panel !== casePage.dataset.tab) {
      select(panel.dataset.panel, { hash: false });
      section.scrollIntoView();
    }
  });
}

/* ---------- copiar cores ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
  const label = button.querySelector<HTMLElement>('[data-copy-label]');
  const status = button.closest('.palette')?.querySelector<HTMLElement>('[data-copy-status]');
  let timer = 0;
  button.addEventListener('click', async () => {
    const value = button.dataset.copy ?? '';
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }
    button.classList.add('is-copied');
    if (label) label.textContent = 'Copiado!';
    if (status) status.textContent = `${value} copiado.`;
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      button.classList.remove('is-copied');
      if (label) label.textContent = 'Copiar';
    }, 1600);
  });
});

/* ---------- galeria e caixa de luz ---------- */
document.querySelectorAll<HTMLElement>('[data-gallery]').forEach((gallery) => {
  const track = gallery.querySelector<HTMLElement>('.gallery-track');
  const nav = gallery.querySelector<HTMLElement>('[data-gallery-nav]');
  const dialog = gallery.querySelector<HTMLDialogElement>('[data-lightbox]');
  const shots = Array.from(gallery.querySelectorAll<HTMLElement>('[data-lightbox-shot]'));
  let current = 0;
  let opener: HTMLElement | null = null;

  // setas da faixa só quando ela transborda
  if (track && nav) {
    const update = () => {
      nav.hidden = track.scrollWidth <= track.clientWidth + 4;
    };
    update();
    new ResizeObserver(update).observe(track);
    const step = (dir: number) =>
      track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: motionOn() ? 'smooth' : 'auto' });
    gallery.querySelector('[data-gallery-prev]')?.addEventListener('click', () => step(-1));
    gallery.querySelector('[data-gallery-next]')?.addEventListener('click', () => step(1));
  }

  if (!dialog || shots.length === 0) return;
  const show = (index: number) => {
    current = (index + shots.length) % shots.length;
    shots.forEach((shot, i) => (shot.hidden = i !== current));
  };
  gallery.querySelectorAll<HTMLButtonElement>('[data-shot]').forEach((button) => {
    button.addEventListener('click', () => {
      opener = button;
      show(Number(button.dataset.shot));
      dialog.showModal();
    });
  });
  dialog.querySelector('[data-lightbox-close]')?.addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => show(current - 1));
  dialog.querySelector('[data-lightbox-next]')?.addEventListener('click', () => show(current + 1));
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
  // clique fora da imagem fecha
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus());
});

/* ---------- antes e depois ---------- */
document.querySelectorAll<HTMLElement>('[data-before-after]').forEach((figure) => {
  const range = figure.querySelector<HTMLInputElement>('[data-ba-range]');
  if (!range) return;
  // os textos anunciados vêm do componente, com o nome de cada lado
  const { onlyAfter = '', onlyBefore = '', partial = '{n}%' } = figure.dataset;
  const apply = () => {
    const value = Number(range.value);
    figure.style.setProperty('--pos', `${value}%`);
    range.setAttribute('aria-valuetext', value <= 5 ? onlyAfter : value >= 95 ? onlyBefore : partial.replace('{n}', String(value)));
  };
  range.addEventListener('input', () => {
    figure.classList.remove('is-hinting');
    apply();
  });
  // ao aparecer pela primeira vez, a divisória dá uma volta para mostrar que se move
  if (motionOn() && 'IntersectionObserver' in window) {
    const hint = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        hint.disconnect();
        figure.classList.add('is-hinting');
        const steps = [72, 30, 50];
        steps.forEach((value, i) =>
          window.setTimeout(() => {
            if (!figure.classList.contains('is-hinting')) return;
            range.value = String(value);
            apply();
            if (i === steps.length - 1) window.setTimeout(() => figure.classList.remove('is-hinting'), 1200);
          }, 400 + i * 1200),
        );
      },
      { threshold: 0.6 },
    );
    hint.observe(figure);
  }
});

/* ---------- pytest: roda a saída de novo ---------- */
document.querySelectorAll<HTMLElement>('[data-pytest]').forEach((block) => {
  const run = () => {
    block.classList.remove('is-running');
    void block.offsetWidth;
    block.classList.add('is-running');
  };
  block.querySelector('[data-pytest-run]')?.addEventListener('click', run);
  if ('IntersectionObserver' in window) {
    const once = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        once.disconnect();
        run();
      },
      { threshold: 0.5 },
    );
    once.observe(block);
  }
});

/* ---------- Dino Runner jogável ---------- */
document.querySelectorAll<HTMLElement>('[data-dino]').forEach((game) => {
  const board = game.querySelector<HTMLElement>('[data-dino-board]');
  const leds = Array.from(game.querySelectorAll<HTMLElement>('[data-led]'));
  const scoreEl = game.querySelector<HTMLElement>('[data-dino-score]');
  const status = game.querySelector<HTMLElement>('[data-dino-status]');
  const startBtn = game.querySelector<HTMLButtonElement>('[data-dino-start]');
  const startLabel = game.querySelector<HTMLElement>('[data-dino-start-label]');
  const jumpBtn = game.querySelector<HTMLButtonElement>('[data-dino-jump]');
  const duckBtn = game.querySelector<HTMLButtonElement>('[data-dino-duck]');
  if (!board || leds.length !== 25) return;

  // mesmas constantes do dino_runner.c
  const STEP = 10;
  const ENEMY_START = 200;
  const ENEMY_MIN = 50;
  const ENEMY_DROP = 25;
  const SPEED_EVERY = 5000;
  const JUMP_HOLD = 100;

  let running = false;
  let raf = 0;
  let last = 0;
  let acc = 0;
  let jumpHeld = false;
  let duckHeld = false;
  let jumpLeft = 0;
  let enemyDelay = ENEMY_START;
  let enemyLeft = 0;
  let sinceSpeed = 0;
  let enemy: [number, number] = [4, -1]; // [linha, coluna]; coluna -1 = fora da tela
  let score = 0;

  const index = (row: number, col: number) => row * 5 + col;
  const dinoCells = (): [number, number][] => {
    if (duckHeld) return [
      [4, 0],
      [4, 1],
    ];
    if (jumpHeld || jumpLeft > 0) return [
      [2, 0],
      [3, 0],
    ];
    return [
      [3, 0],
      [4, 0],
    ];
  };
  const draw = (hit = false) => {
    leds.forEach((led) => led.classList.remove('is-dino', 'is-enemy', 'is-hit'));
    for (const [r, c] of dinoCells()) leds[index(r, c)].classList.add('is-dino');
    if (enemy[1] >= 0) leds[index(enemy[0], enemy[1])].classList.add(hit ? 'is-hit' : 'is-enemy');
  };
  const setScore = (value: number) => {
    score = value;
    if (scoreEl) scoreEl.textContent = String(value);
  };

  const step = () => {
    if (jumpLeft > 0 && !jumpHeld) jumpLeft -= STEP;
    sinceSpeed += STEP;
    enemyLeft -= STEP;
    if (enemyLeft <= 0) {
      if (enemy[1] === -1) {
        enemy = [2 + Math.floor(Math.random() * 3), 4];
      } else {
        enemy = [enemy[0], enemy[1] - 1];
        if (enemy[1] === -1) setScore(score + 1);
      }
      if (sinceSpeed >= SPEED_EVERY) {
        enemyDelay = Math.max(enemyDelay - ENEMY_DROP, ENEMY_MIN);
        sinceSpeed = 0;
      }
      enemyLeft = enemyDelay;
    }
    const hit = enemy[1] >= 0 && dinoCells().some(([r, c]) => r === enemy[0] && c === enemy[1]);
    draw(hit);
    return hit;
  };

  const loop = (now: number) => {
    if (!running) return;
    acc += Math.min(100, now - last);
    last = now;
    while (acc >= STEP) {
      acc -= STEP;
      if (step()) {
        stop(true);
        return;
      }
    }
    raf = requestAnimationFrame(loop);
  };

  function stop(gameOver = false) {
    running = false;
    cancelAnimationFrame(raf);
    game.classList.remove('is-playing');
    if (startLabel) startLabel.textContent = gameOver ? 'Jogar de novo' : 'Jogar';
    if (gameOver && status) status.textContent = `Fim de jogo: ${score} ${score === 1 ? 'inimigo desviado' : 'inimigos desviados'}.`;
  }

  const start = () => {
    setScore(0);
    enemy = [4, -1];
    enemyDelay = ENEMY_START;
    enemyLeft = 600;
    sinceSpeed = 0;
    jumpLeft = 0;
    acc = 0;
    running = true;
    game.classList.add('is-playing');
    if (startLabel) startLabel.textContent = 'Recomeçar';
    if (status) status.textContent = 'Jogo começou.';
    board.focus({ preventScroll: true });
    last = performance.now();
    raf = requestAnimationFrame(loop);
  };

  const press = (kind: 'jump' | 'duck', on: boolean) => {
    if (kind === 'jump') {
      jumpHeld = on;
      if (!on) jumpLeft = JUMP_HOLD;
      jumpBtn?.classList.toggle('is-pressed', on);
    } else {
      duckHeld = on;
      duckBtn?.classList.toggle('is-pressed', on);
    }
    if (!running) draw();
  };

  startBtn?.addEventListener('click', start);
  const hold = (button: HTMLButtonElement | null, kind: 'jump' | 'duck') => {
    if (!button) return;
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      press(kind, true);
    });
    const release = () => press(kind, false);
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
    // teclado: Enter/Espaço no botão funciona como um toque rápido
    button.addEventListener('click', (event) => {
      if (event.detail !== 0) return;
      press(kind, true);
      window.setTimeout(() => press(kind, false), 160);
    });
  };
  hold(jumpBtn, 'jump');
  hold(duckBtn, 'duck');

  game.addEventListener('keydown', (event) => {
    if (event.target instanceof HTMLButtonElement) return;
    if (event.key === 'ArrowUp' || event.key === ' ') {
      event.preventDefault();
      if (!event.repeat) press('jump', true);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!event.repeat) press('duck', true);
    } else if (event.key === 'Enter' && !running) {
      start();
    }
  });
  game.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp' || event.key === ' ') press('jump', false);
    if (event.key === 'ArrowDown') press('duck', false);
  });

  // pausa quando sai da tela ou a aba fica escondida
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && running) stop();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && running) stop();
    }).observe(game);
  }

  // quadro inicial: o dinossauro em pé e um inimigo chegando pela linha de baixo
  enemy = [4, 3];
  draw();
  enemy = [4, -1];
});

/* ---------- fontes da página: só quando a seção visual chega perto ---------- */
const lazyFonts = document.querySelector<HTMLStyleElement>('style[data-lazy-fonts]');
if (lazyFonts) {
  const enable = () => {
    lazyFonts.media = 'all';
  };
  const visual = document.getElementById('visual');
  if (!visual || !('IntersectionObserver' in window)) enable();
  else {
    const near = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        near.disconnect();
        enable();
      },
      { rootMargin: '1500px 0px' },
    );
    near.observe(visual);
  }
}

export {};
