import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

const content = {
  en: {
    brandDescriptor: 'SPORTS INFRASTRUCTURE',
    heroSide: 'EST. FOR THE GAME',
    structure: 'STRUCTURE',
    performance: 'PERFORMANCE',
    top: 'TOP',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    heroAlt: 'Football stadium slideshow',
    contactPhotoAlt: 'Football stadium illuminated at night',
    standsAlt: 'Stadium seating and football field',
    fieldAlt: 'Aerial view of a green football pitch',
    nav: ['About', 'Expertise', 'Approach', 'Contact'],
    project: 'Start a project',
    heroEyebrow: 'SPORTS INFRASTRUCTURE / BUILT WITH PURPOSE',
    heroTitle: ['WE BUILD', 'THE STAGE', 'FOR GREATNESS.'],
    heroCopy: 'Stadiums, football fields and sports surfaces engineered to make every moment count.',
    explore: 'Explore what we build',
    scroll: 'Scroll to explore',
    heroIndex: 'THE FIELD IS JUST THE BEGINNING',
    introEyebrow: 'X-TRAFIELDS / WHO WE ARE',
    introTitle: ['MORE THAN', 'A FIELD.'],
    introLead: 'We turn ambitious sports ideas into spaces ready for the real game.',
    introBody: 'X-TRAFIELDS is a stadium and sports surfaces construction company. From the first ground plan to the final line on the pitch, we bring structure, precision and passion to every build.',
    fifaLabel: 'FIFA CERTIFICATION', fifaDemo: 'DESIGN DEMO / UNVERIFIED', previousSlide: 'Previous stadium image', nextSlide: 'Next stadium image',
    introTag: 'DESIGNED TO PERFORM',
    expertiseEyebrow: 'WHAT WE BUILD',
    expertiseTitle: ['BUILT FOR', 'EVERY LEVEL', 'OF PLAY.'],
    expertiseCopy: 'Complete spaces. Exacting surfaces. One standard of execution.',
    services: [
      { number: '01', title: 'STADIUMS', copy: 'Purpose-built venues where structure, scale and atmosphere come together.' },
      { number: '02', title: 'FOOTBALL FIELDS', copy: 'Pitches made for the pace of the game, from community grounds to professional arenas.' },
      { number: '03', title: 'SPORTS SURFACES', copy: 'High-performance turf and playing surfaces built for consistency and durability.' }
    ],
    statementEyebrow: 'OUR POINT OF VIEW',
    statement: ['EVERY GREAT GAME', 'NEEDS A GREAT', 'FOUNDATION.'],
    processEyebrow: 'OUR APPROACH',
    processTitle: ['FROM VISION', 'TO KICKOFF.'],
    processCopy: 'A clear process, built around the needs of the people who will use the space.',
    steps: [
      { number: '01', title: 'PLAN', copy: 'We listen, study the site and shape a practical vision.' },
      { number: '02', title: 'BUILD', copy: 'We bring every layer together with disciplined execution.' },
      { number: '03', title: 'PLAY', copy: 'We deliver a space ready for years of memorable moments.' }
    ],
    contactEyebrow: 'LET’S BUILD WHAT’S NEXT',
    contactTitle: ['YOUR NEXT', 'FIELD STARTS', 'HERE.'],
    contactCopy: 'Have a stadium, pitch or sports surface in mind? Let’s turn the idea into a place worth playing on.',
    contactButton: 'Search us on Facebook',
    contactNote: 'Opens a Facebook search for X-trafields S.A.',
    footerLine: 'STADIUMS. FIELDS. SURFACES.',
    photoCredits: 'Illustrative photography: Pexels contributors',
    madeBy: 'Made by'
  },
  es: {
    brandDescriptor: 'INFRAESTRUCTURA DEPORTIVA',
    heroSide: 'HECHO PARA EL JUEGO',
    structure: 'ESTRUCTURA',
    performance: 'RENDIMIENTO',
    top: 'ARRIBA',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    heroAlt: 'Presentación de estadios de fútbol',
    contactPhotoAlt: 'Estadio de fútbol iluminado de noche',
    standsAlt: 'Tribunas de estadio y cancha de fútbol',
    fieldAlt: 'Vista aérea de una cancha de fútbol',
    nav: ['Nosotros', 'Especialidades', 'Proceso', 'Contacto'],
    project: 'Iniciar un proyecto',
    heroEyebrow: 'INFRAESTRUCTURA DEPORTIVA / CON PROPÓSITO',
    heroTitle: ['CONSTRUIMOS', 'EL ESCENARIO', 'DE LA GRANDEZA.'],
    heroCopy: 'Estadios, canchas de fútbol y superficies deportivas creadas para que cada momento cuente.',
    explore: 'Explorá lo que construimos',
    scroll: 'Deslizá para explorar',
    heroIndex: 'LA CANCHA ES SOLO EL COMIENZO',
    introEyebrow: 'X-TRAFIELDS / QUIÉNES SOMOS',
    introTitle: ['MÁS QUE', 'UNA CANCHA.'],
    introLead: 'Transformamos ideas deportivas ambiciosas en espacios listos para el juego real.',
    introBody: 'X-TRAFIELDS es una constructora de estadios y superficies deportivas. Del primer plano a la última línea de la cancha, aportamos estructura, precisión y pasión a cada obra.',
    fifaLabel: 'CERTIFICACIÓN FIFA', fifaDemo: 'DISEÑO DEMO / SIN VERIFICAR', previousSlide: 'Imagen anterior del estadio', nextSlide: 'Siguiente imagen del estadio',
    introTag: 'DISEÑADO PARA RENDIR',
    expertiseEyebrow: 'LO QUE CONSTRUIMOS',
    expertiseTitle: ['HECHO PARA', 'CADA NIVEL', 'DE JUEGO.'],
    expertiseCopy: 'Espacios completos. Superficies precisas. Un mismo estándar de ejecución.',
    services: [
      { number: '01', title: 'ESTADIOS', copy: 'Escenarios concebidos para unir estructura, escala y atmósfera.' },
      { number: '02', title: 'CANCHAS DE FÚTBOL', copy: 'Campos a la altura del juego, desde clubes de barrio hasta estadios profesionales.' },
      { number: '03', title: 'SUPERFICIES DEPORTIVAS', copy: 'Césped y superficies de alto rendimiento, consistentes y duraderas.' }
    ],
    statementEyebrow: 'NUESTRA VISIÓN',
    statement: ['TODO GRAN PARTIDO', 'NECESITA UNA GRAN', 'BASE.'],
    processEyebrow: 'NUESTRO PROCESO',
    processTitle: ['DE LA IDEA', 'AL PITAZO INICIAL.'],
    processCopy: 'Un proceso claro, pensado para quienes van a vivir el espacio.',
    steps: [
      { number: '01', title: 'PLANEAR', copy: 'Escuchamos, estudiamos el terreno y damos forma a una visión posible.' },
      { number: '02', title: 'CONSTRUIR', copy: 'Integramos cada capa con una ejecución rigurosa.' },
      { number: '03', title: 'JUGAR', copy: 'Entregamos espacios preparados para años de momentos memorables.' }
    ],
    contactEyebrow: 'CONSTRUYAMOS LO QUE VIENE',
    contactTitle: ['TU PRÓXIMA', 'CANCHA EMPIEZA', 'ACÁ.'],
    contactCopy: '¿Tenés en mente un estadio, una cancha o una superficie deportiva? Hagamos que esa idea cobre vida.',
    contactButton: 'Buscanos en Facebook',
    contactNote: 'Abre una búsqueda de X-trafields S.A. en Facebook.',
    footerLine: 'ESTADIOS. CANCHAS. SUPERFICIES.',
    photoCredits: 'Fotografías ilustrativas: colaboradores de Pexels',
    madeBy: 'Hecho por'
  },
  el: {
    brandDescriptor: 'ΑΘΛΗΤΙΚΕΣ ΥΠΟΔΟΜΕΣ',
    heroSide: 'ΦΤΙΑΓΜΕΝΟ ΓΙΑ ΤΟ ΠΑΙΧΝΙΔΙ',
    structure: 'ΔΟΜΗ',
    performance: 'ΑΠΟΔΟΣΗ',
    top: 'ΠΑΝΩ',
    menuOpen: 'Άνοιγμα μενού',
    menuClose: 'Κλείσιμο μενού',
    heroAlt: 'Παρουσίαση εικόνων σταδίων ποδοσφαίρου',
    contactPhotoAlt: 'Φωτισμένο γήπεδο ποδοσφαίρου τη νύχτα',
    standsAlt: 'Κερκίδες σταδίου και γήπεδο ποδοσφαίρου',
    fieldAlt: 'Εναέρια άποψη πράσινου γηπέδου ποδοσφαίρου',
    nav: ['Σχετικά', 'Εξειδίκευση', 'Διαδικασία', 'Επικοινωνία'],
    project: 'Ξεκινήστε ένα έργο',
    heroEyebrow: 'ΑΘΛΗΤΙΚΕΣ ΥΠΟΔΟΜΕΣ / ΜΕ ΣΚΟΠΟ',
    heroTitle: ['ΧΤΙΖΟΥΜΕ', 'ΤΗ ΣΚΗΝΗ', 'ΤΟΥ ΜΕΓΑΛΕΙΟΥ.'],
    heroCopy: 'Στάδια, γήπεδα ποδοσφαίρου και αθλητικές επιφάνειες σχεδιασμένα για κάθε σημαντική στιγμή.',
    explore: 'Δείτε τι κατασκευάζουμε',
    scroll: 'Κύλιση για εξερεύνηση',
    heroIndex: 'ΤΟ ΓΗΠΕΔΟ ΕΙΝΑΙ ΜΟΝΟ Η ΑΡΧΗ',
    introEyebrow: 'X-TRAFIELDS / ΠΟΙΟΙ ΕΙΜΑΣΤΕ',
    introTitle: ['ΚΑΤΙ ΠΑΡΑΠΑΝΩ', 'ΑΠΟ ΓΗΠΕΔΟ.'],
    introLead: 'Μετατρέπουμε φιλόδοξες αθλητικές ιδέες σε χώρους έτοιμους για πραγματικό παιχνίδι.',
    introBody: 'Η X-TRAFIELDS κατασκευάζει στάδια και αθλητικές επιφάνειες. Από το πρώτο σχέδιο έως την τελευταία γραμμή του γηπέδου, φέρνουμε δομή, ακρίβεια και πάθος σε κάθε έργο.',
    fifaLabel: 'ΠΙΣΤΟΠΟΙΗΣΗ FIFA', fifaDemo: 'ΔΕΙΓΜΑ / ΜΗ ΕΠΑΛΗΘΕΥΜΕΝΟ', previousSlide: 'Προηγούμενη εικόνα σταδίου', nextSlide: 'Επόμενη εικόνα σταδίου',
    introTag: 'ΣΧΕΔΙΑΣΜΕΝΟ ΓΙΑ ΑΠΟΔΟΣΗ',
    expertiseEyebrow: 'ΤΙ ΚΑΤΑΣΚΕΥΑΖΟΥΜΕ',
    expertiseTitle: ['ΓΙΑ ΚΑΘΕ', 'ΕΠΙΠΕΔΟ', 'ΠΑΙΧΝΙΔΙΟΥ.'],
    expertiseCopy: 'Ολοκληρωμένοι χώροι. Ακριβείς επιφάνειες. Ένα υψηλό πρότυπο κατασκευής.',
    services: [
      { number: '01', title: 'ΣΤΑΔΙΑ', copy: 'Χώροι όπου η δομή, η κλίμακα και η ατμόσφαιρα γίνονται ένα.' },
      { number: '02', title: 'ΓΗΠΕΔΑ ΠΟΔΟΣΦΑΙΡΟΥ', copy: 'Γήπεδα για κάθε ρυθμό παιχνιδιού, από την κοινότητα έως τον επαγγελματικό αθλητισμό.' },
      { number: '03', title: 'ΑΘΛΗΤΙΚΕΣ ΕΠΙΦΑΝΕΙΕΣ', copy: 'Χλοοτάπητες και επιφάνειες υψηλής απόδοσης με συνέπεια και αντοχή.' }
    ],
    statementEyebrow: 'Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ',
    statement: ['ΚΑΘΕ ΜΕΓΑΛΟΣ', 'ΑΓΩΝΑΣ ΘΕΛΕΙ', 'ΓΕΡΑ ΘΕΜΕΛΙΑ.'],
    processEyebrow: 'Η ΠΡΟΣΕΓΓΙΣΗ ΜΑΣ',
    processTitle: ['ΑΠΟ ΤΟ ΟΡΑΜΑ', 'ΣΤΗ ΣΕΝΤΡΑ.'],
    processCopy: 'Μια ξεκάθαρη διαδικασία, σχεδιασμένη για τους ανθρώπους που θα χρησιμοποιήσουν τον χώρο.',
    steps: [
      { number: '01', title: 'ΣΧΕΔΙΟ', copy: 'Ακούμε, μελετάμε τον χώρο και διαμορφώνουμε ένα ρεαλιστικό όραμα.' },
      { number: '02', title: 'ΚΑΤΑΣΚΕΥΗ', copy: 'Συνδυάζουμε κάθε στοιχείο με μεθοδική εκτέλεση.' },
      { number: '03', title: 'ΠΑΙΧΝΙΔΙ', copy: 'Παραδίδουμε χώρους έτοιμους για αξέχαστες στιγμές.' }
    ],
    contactEyebrow: 'ΑΣ ΧΤΙΣΟΥΜΕ ΤΟ ΕΠΟΜΕΝΟ',
    contactTitle: ['ΤΟ ΕΠΟΜΕΝΟ', 'ΓΗΠΕΔΟ ΞΕΚΙΝΑ', 'ΕΔΩ.'],
    contactCopy: 'Σχεδιάζετε στάδιο, γήπεδο ή αθλητική επιφάνεια; Ας δώσουμε μορφή στην ιδέα σας.',
    contactButton: 'Αναζητήστε μας στο Facebook',
    contactNote: 'Ανοίγει αναζήτηση στο Facebook για την X-trafields S.A.',
    footerLine: 'ΣΤΑΔΙΑ. ΓΗΠΕΔΑ. ΕΠΙΦΑΝΕΙΕΣ.',
    photoCredits: 'Ενδεικτικές φωτογραφίες: δημιουργοί του Pexels',
    madeBy: 'Δημιουργία'
  }
};

const photos = {
  hero: '/images/night-stadium.jpg',
  stadium: '/images/hero-stadium.jpg',
  field: '/images/aerial-field.jpg',
  turf: '/images/turf-detail.jpg',
  stands: '/images/stadium-stands.jpg'
};

const heroSlides = ['/images/stadium-aerial.jpg', '/images/stadium-day.jpg', '/images/night-stadium.jpg'];

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M3 12h17m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function LineTitle({ lines, className = '' }) {
  return (
    <span className={className}>
      {lines.map((line) => <span className="title-line" key={line}>{line}</span>)}
    </span>
  );
}

function App() {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('extra-fields-language');
    return ['en', 'es', 'el'].includes(saved) ? saved : 'es';
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const lenisRef = useRef(null);
  const t = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `X-TRAFIELDS — ${t.heroTitle.join(' ')}`;
    localStorage.setItem('extra-fields-language', language);
  }, [language, t.heroTitle]);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return undefined;

    const lenis = new Lenis({
      duration: 1.35,
      smoothWheel: true,
      wheelMultiplier: 0.76,
      touchMultiplier: 1
    });
    lenisRef.current = lenis;
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setActiveSlide((index) => (index + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const revealElements = [...document.querySelectorAll('[data-reveal]')];
    let frame = 0;
    const revealPassed = () => {
      frame = 0;
      revealElements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.92) element.classList.add('is-visible');
      });
    };
    const scheduleReveal = () => { if (!frame) frame = window.requestAnimationFrame(revealPassed); };
    revealPassed();
    window.addEventListener('scroll', scheduleReveal, { passive: true });
    window.addEventListener('resize', scheduleReveal);
    return () => {
      window.removeEventListener('scroll', scheduleReveal);
      window.removeEventListener('resize', scheduleReveal);
      window.cancelAnimationFrame(frame);
    };
  }, [language]);

  const jumpTo = (id) => {
    setMenuOpen(false);
    const target = document.querySelector(id);
    if (!target) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -72 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#top" onClick={(event) => { event.preventDefault(); jumpTo('#top'); }} aria-label="X-TRAFIELDS home">
          <img className="brand-logo" src="/images/x-trafields-logo.png" alt="X-TRAFIELDS" />
        </a>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {['#about', '#expertise', '#approach', '#contact'].map((id, index) => (
            <a href={id} key={id} onClick={(event) => { event.preventDefault(); jumpTo(id); }}>{t.nav[index]}</a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-picker" aria-label="Language selection">
            {['en', 'es', 'el'].map((lang) => (
              <button
                key={lang}
                className={language === lang ? 'is-active' : ''}
                type="button"
                onClick={() => setLanguage(lang)}
                aria-label={lang === 'en' ? 'English' : lang === 'es' ? 'Español' : 'Ελληνικά'}
                aria-pressed={language === lang}
              >
                {lang === 'el' ? 'GR' : lang.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="header-cta" type="button" onClick={() => jumpTo('#contact')}>
            {t.project}<ArrowIcon diagonal />
          </button>
          <button
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-slides" role="img" aria-label={t.heroAlt}>
            {heroSlides.map((src, index) => <div key={src} className={`hero-image ${activeSlide === index ? 'is-active' : ''}`} style={{ backgroundImage: `url(${src})` }} aria-hidden="true" />)}
          </div>
          <div className="hero-shade" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-meta"><span className="meta-dot" />{t.heroEyebrow}</div>
            <h1 id="hero-title"><LineTitle lines={t.heroTitle} /></h1>
            <div className="hero-bottom-row">
              <p>{t.heroCopy}</p>
              <button type="button" className="round-arrow" onClick={() => jumpTo('#expertise')} aria-label={t.explore}>
                <ArrowIcon diagonal />
              </button>
            </div>
          </div>
          <div className="hero-side-note">X-TRAFIELDS <span>—</span> {t.heroSide}</div>
          <div className="hero-floor">
            <div className="fifa-badge" aria-label={`${t.fifaLabel}. ${t.fifaDemo}`}>
              <span>{t.fifaLabel}<small>{t.fifaDemo}</small></span>
              <img src="/images/fifa-logo.svg" alt="FIFA" />
            </div>
            <button type="button" onClick={() => jumpTo('#about')}><span className="scroll-line" />{t.scroll}</button>
            <div className="slide-controls">
              <button type="button" onClick={() => setActiveSlide((index) => (index + heroSlides.length - 1) % heroSlides.length)} aria-label={t.previousSlide}>←</button>
              <span aria-live="polite">0{activeSlide + 1} / 0{heroSlides.length}</span>
              <button type="button" onClick={() => setActiveSlide((index) => (index + 1) % heroSlides.length)} aria-label={t.nextSlide}>→</button>
            </div>
          </div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-kicker" data-reveal="wipe"><span className="kicker-bar" />{t.introEyebrow}</div>
          <div className="intro-layout">
            <div className="intro-copy" data-reveal="from-left">
              <h2><LineTitle lines={t.introTitle} /></h2>
              <p className="intro-lead">{t.introLead}</p>
              <p className="body-copy">{t.introBody}</p>
              <div className="intro-signature"><span className="signature-line" />{t.introTag}</div>
            </div>
            <div className="intro-collage" data-reveal="pop">
              <div className="collage-outline" />
              <div className="collage-main image-frame"><img src={photos.stands} alt={t.standsAlt} loading="lazy" /></div>
              <div className="collage-small image-frame"><img src={photos.field} alt={t.fieldAlt} loading="lazy" /></div>
              <div className="collage-square"><span>X-TRA<br />FIELDS</span><ArrowIcon diagonal /></div>
              <div className="collage-caption">{t.structure} <span>×</span> {t.performance}</div>
            </div>
          </div>
        </section>

        <section className="expertise section-pad" id="expertise">
          <div className="section-kicker" data-reveal="wipe"><span className="kicker-bar" />{t.expertiseEyebrow}</div>
          <div className="expertise-heading" data-reveal="from-left">
            <h2><LineTitle lines={t.expertiseTitle} /></h2>
            <p>{t.expertiseCopy}</p>
          </div>
          <div className="service-grid">
            {t.services.map((service, index) => (
              <button
                className={`service-card service-card-${index + 1} ${activeService === index ? 'is-active' : ''}`}
                type="button"
                key={service.number}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
                data-reveal="pop"
              >
                <img src={[photos.stadium, photos.field, photos.turf][index]} alt="" loading="lazy" />
                <span className="card-shade" />
                <span className="service-number">{service.number} / 03</span>
                <span className="service-content">
                  <span className="service-title">{service.title}</span>
                  <span className="service-copy">{service.copy}</span>
                </span>
                <span className="service-arrow"><ArrowIcon diagonal /></span>
              </button>
            ))}
          </div>
        </section>

        <section className="statement" aria-labelledby="statement-title">
          <div className="statement-image" />
          <div className="statement-overlay" />
          <div className="statement-cross" aria-hidden="true">+</div>
          <div className="statement-content" data-reveal="from-left">
            <div className="section-kicker"><span className="kicker-bar" />{t.statementEyebrow}</div>
            <h2 id="statement-title"><LineTitle lines={t.statement} /></h2>
          </div>
          <div className="statement-corner" aria-hidden="true"><img src="/images/x-trafields-logo.png" alt="" /></div>
        </section>

        <section className="approach section-pad" id="approach">
          <div className="section-kicker" data-reveal="wipe"><span className="kicker-bar" />{t.processEyebrow}</div>
          <div className="approach-top" data-reveal="from-right">
            <h2><LineTitle lines={t.processTitle} /></h2>
            <p>{t.processCopy}</p>
          </div>
          <div className="process-grid">
            {t.steps.map((step) => (
              <div className="process-card" key={step.number} data-reveal="pop">
                <span className="process-number">{step.number}</span>
                <div className="process-content"><h3>{step.title}</h3><p>{step.copy}</p></div>
                <span className="process-cross" aria-hidden="true">+</span>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-panel" data-reveal="from-left">
            <div className="section-kicker"><span className="kicker-bar" />{t.contactEyebrow}</div>
            <h2><LineTitle lines={t.contactTitle} /></h2>
            <p>{t.contactCopy}</p>
            <a
              href="https://www.facebook.com/search/top?q=X-trafields%20S.A"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {t.contactButton}<ArrowIcon diagonal />
            </a>
            <small>{t.contactNote}</small>
          </div>
          <div className="contact-photo"><img src={photos.hero} alt={t.contactPhotoAlt} loading="lazy" /></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand" href="#top" onClick={(event) => { event.preventDefault(); jumpTo('#top'); }}><img className="brand-logo" src="/images/x-trafields-logo.png" alt="X-TRAFIELDS" /></a>
          <p>{t.footerLine}</p>
          <span>© {new Date().getFullYear()} X-TRAFIELDS S.A.</span>
        </div>
        <div className="footer-bottom">
          <span>{t.photoCredits}</span>
          <span className="footer-credit">{t.madeBy} <a href="https://zigodev.com.ar" target="_blank" rel="noopener noreferrer">zigodev</a></span>
          <a href="#top" onClick={(event) => { event.preventDefault(); jumpTo('#top'); }}>↑ {t.top}</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
