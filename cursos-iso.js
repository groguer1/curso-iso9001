/* ============================================================
   CURSOS ISO — JavaScript Maestro
   Academia de Consultoría ISO — David Mateos
   ============================================================ */

/* ---- Acordeón ---- */
function initAccordion() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const isOpen = trigger.classList.contains('open');
      document.querySelectorAll('.accordion-trigger.open').forEach(t => {
        t.classList.remove('open');
        const b = t.nextElementSibling;
        if (b) b.classList.remove('open');
      });
      if (!isOpen) {
        trigger.classList.add('open');
        const body = trigger.nextElementSibling;
        if (body) body.classList.add('open');
      }
    });
  });
}

/* ---- Progress bar de lectura ---- */
function initProgressBar() {
  const bar = document.querySelector('.progress-bar-fill');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  });
}

/* ---- Progreso del curso en localStorage ---- */
const PROGRESS_KEY = 'cursos_iso_progress_v1';

function getProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch { return {}; }
}
function markComplete(lessonId) {
  const p = getProgress();
  p[lessonId] = true;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  updateProgressUI();
}
function updateProgressUI() {
  const p = getProgress();
  const links = document.querySelectorAll('[data-lesson-id]');
  if (!links.length) return;
  const done = [...links].filter(l => p[l.dataset.lessonId]).length;
  const pct  = Math.round((done / links.length) * 100);
  const el   = document.getElementById('course-progress-pct');
  if (el) el.textContent = pct + '%';
  links.forEach(l => {
    if (p[l.dataset.lessonId]) l.classList.add('completed');
  });
}

/* ---- Smooth reveal en scroll ---- */
function initReveal() {
  if (!window.IntersectionObserver) return;
  const els = document.querySelectorAll(
    '.modulo-card, .curso-card, .ref-card, .plantilla-card, .termino-card'
  );
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    obs.observe(el);
  });
}

/* ---- Filtro de glosario ---- */
function initGlosarioFiltro() {
  const btns = document.querySelectorAll('.filtro-btn');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filtro = btn.dataset.filtro;
      document.querySelectorAll('.termino-card').forEach(card => {
        if (filtro === 'todo' || card.dataset.norma === filtro) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ---- Buscador de glosario ---- */
function initGlosarioBuscador() {
  const input = document.getElementById('glosario-search');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    document.querySelectorAll('.termino-card').forEach(card => {
      const texto = card.textContent.toLowerCase();
      card.style.display = (!q || texto.includes(q)) ? '' : 'none';
    });
  });
}

/* ---- Tooltips de referencia normativa ---- */
function initNormTooltips() {
  document.querySelectorAll('[data-norm-ref]').forEach(el => {
    el.style.cursor = 'help';
    el.style.borderBottom = '1px dashed var(--acento-mid)';
    el.title = el.dataset.normRef;
  });
}

/* ---- Sidebar active link ---- */
function initSidebarActive() {
  const current = window.location.href;
  document.querySelectorAll('.sidebar__nav a, .sidebar nav ul li a').forEach(a => {
    if (a.href === current) a.classList.add('active');
  });
}

/* ---- Copiar al portapapeles ---- */
function copiar(texto, btn) {
  navigator.clipboard.writeText(texto).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Copiado';
    setTimeout(() => { btn.textContent = orig; }, 2000);
  });
}

/* ---- Animación contador stats ---- */
function initCounters() {
  const stats = document.querySelectorAll('.stat__num');
  if (!stats.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.target || el.textContent);
      const suffix = el.dataset.suffix || '';
      const isFloat = target % 1 !== 0;
      let current = 0;
      const step = target / 50;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = isFloat ? current.toFixed(1) + suffix : Math.round(current) + suffix;
        if (current >= target) clearInterval(timer);
      }, 30);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach(el => obs.observe(el));
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
  initProgressBar();
  updateProgressUI();
  initReveal();
  initGlosarioFiltro();
  initGlosarioBuscador();
  initNormTooltips();
  initSidebarActive();
  initCounters();
});
