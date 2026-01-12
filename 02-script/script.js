document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggleBtn');
    const pestana = document.getElementById('pestana');

    if (!btn || !pestana) return;

    function setState(shown) {
        pestana.classList.toggle('hidden', !shown);
        pestana.setAttribute('aria-hidden', String(!shown));
        btn.setAttribute('aria-expanded', String(shown));
    }

    function toggle() {
        const currentlyShown = btn.getAttribute('aria-expanded') === 'true';
        setState(!currentlyShown);
    }

    btn.addEventListener('click', toggle);

    // Cerrar al clicar fuera
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (btn.contains(target) || pestana.contains(target)) return;
        if (btn.getAttribute('aria-expanded') === 'true') setState(false);
    });

    // Cerrar con Escape y devolver focus al botón
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
            setState(false);
            btn.focus();
        }
    });
});