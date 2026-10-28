import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContactForm, { whatsappNumber } from './ContactForm';

const gatewayContent = {
  es: {
    prompt: 'DOS FORMAS DE CONSTRUIR EL FUTURO',
    choose: 'Elegí una experiencia',
    architecture: 'Arquitectura a medida',
    architectureCopy: 'Diseño, obra llave en mano y espacios únicos.',
    sports: 'Corporativa y deportiva',
    sportsCopy: 'Infraestructura, estadios y superficies de alto rendimiento.',
    enter: 'Explorar'
  },
  en: {
    prompt: 'TWO WAYS TO BUILD THE FUTURE',
    choose: 'Choose an experience',
    architecture: 'Bespoke architecture',
    architectureCopy: 'Design, turnkey construction and singular spaces.',
    sports: 'Corporate and sports',
    sportsCopy: 'Infrastructure, stadiums and high-performance surfaces.',
    enter: 'Explore'
  },
  el: {
    prompt: 'ΔΥΟ ΤΡΟΠΟΙ ΝΑ ΧΤΙΣΟΥΜΕ ΤΟ ΜΕΛΛΟΝ',
    choose: 'Επιλέξτε εμπειρία',
    architecture: 'Αρχιτεκτονική κατά παραγγελία',
    architectureCopy: 'Σχεδιασμός, κατασκευή με το κλειδί στο χέρι και μοναδικοί χώροι.',
    sports: 'Εταιρικά και αθλητικά έργα',
    sportsCopy: 'Υποδομές, στάδια και επιφάνειες υψηλής απόδοσης.',
    enter: 'Εξερεύνηση'
  }
};

const architectureContent = {
  es: {
    nav: ['Estudio', 'Servicios', 'Proyectos', 'Contacto'],
    menu: 'Divisiones',
    project: 'Iniciar un proyecto',
    heroEyebrow: 'X-TRAFIELDS × CEO CONTRACT',
    heroTitle: ['ARQUITECTURA', 'HECHA A', 'MEDIDA.'],
    heroCopy: 'Diseñamos y ejecutamos espacios donde la precisión técnica, la materialidad y una mirada internacional se encuentran.',
    heroCta: 'Descubrir el estudio',
    heroSide: 'DISEÑO · CONSTRUCCIÓN · FIT-OUT',
    introEyebrow: 'UNA CULTURA DE EXCELENCIA',
    introTitle: ['TRADICIÓN PARA', 'CONSTRUIR LO', 'INESPERADO.'],
    introLead: 'Una práctica integral para proyectos que exigen identidad, calidad y control absoluto de cada detalle.',
    introBody: 'La experiencia internacional de CEO Contract reúne arquitectura, ingeniería, contratación llave en mano, renovación, restauración, fit-out y fabricación especializada. Un mismo equipo acompaña cada proyecto desde la primera idea hasta la entrega final.',
    quote: 'El amor por la tradición. El coraje de innovar.',
    metrics: [
      { value: '+60', label: 'años de tradición constructiva' },
      { value: '17', label: 'países con referencias' },
      { value: '+200', label: 'referencias internacionales' },
      { value: '3', label: 'continentes de experiencia' }
    ],
    servicesEyebrow: 'CAPACIDADES INTEGRADAS',
    servicesTitle: ['DE LA IDEA', 'A LA ÚLTIMA', 'TERMINACIÓN.'],
    servicesCopy: 'Un único interlocutor para coordinar diseño, obra, equipamiento y fabricación.',
    services: [
      { title: 'Arquitectura y diseño', copy: 'Concepto, proyecto ejecutivo e ingeniería coordinada para espacios residenciales, hoteleros, corporativos y públicos.' },
      { title: 'Obra llave en mano', copy: 'Planificación, ejecución, control de costos y entrega completa con alcance integral.' },
      { title: 'Renovación y fit-out', copy: 'Intervenciones precisas que transforman edificios existentes sin perder su carácter.' },
      { title: 'Fabricación a medida', copy: 'Carpintería, metal, mobiliario y terminaciones especiales producidas por equipos expertos.' }
    ],
    craftEyebrow: 'MATERIALIDAD Y OFICIO',
    craftTitle: ['LO ESPECIAL', 'SE CONSTRUYE', 'EN EL DETALLE.'],
    craftCopy: 'Artesanos, arquitectos, ingenieros y diseñadores industriales trabajan sobre texturas, maderas, metales y piezas únicas para convertir una idea en una experiencia tangible.',
    projectsEyebrow: 'DESARROLLOS DESTACADOS',
    projectsTitle: ['ARQUITECTURA', 'QUE ACTIVA', 'NUEVOS LUGARES.'],
    projects: [
      {
        title: 'CHAÑAR III',
        location: 'SAN PATRICIO DEL CHAÑAR · NEUQUÉN',
        copy: 'Un desarrollo residencial contemporáneo concebido para responder a la nueva demanda habitacional del corazón energético argentino.',
        facts: ['4 TORRES', '240 UNIDADES', 'CENTRO COMERCIAL']
      },
      {
        title: 'ROCKHAUS',
        location: 'VACA MUERTA · NEUQUÉN',
        copy: 'Residencias premium con una propuesta integral de paisaje, amenities, conectividad y confort para una comunidad activa todo el año.',
        facts: ['MASTERPLAN', 'RESIDENCIAS PREMIUM', 'AMENITIES']
      }
    ],
    legacyEyebrow: 'EXPERIENCIA INTERNACIONAL',
    legacyTitle: ['ESPACIOS PÚBLICOS', 'DE ALTA COMPLEJIDAD.'],
    legacyCopy: 'La experiencia del equipo incluye auditorios, edificios de gobierno, hoteles, residencias, espacios comerciales y equipamiento especial en Europa, Asia, África y América.',
    legacyCards: ['Auditorios y cultura', 'Edificios públicos y corporativos'],
    contactEyebrow: 'HAGAMOS ALGO EXTRAORDINARIO',
    contactTitle: ['TU IDEA', 'MERECE UN', 'ESPACIO ÚNICO.'],
    contactCopy: 'Contanos qué querés transformar. Nuestro equipo puede acompañarte desde la estrategia inicial hasta la entrega llave en mano.',
    formEyebrow: 'CONTANOS TU PROYECTO', formTitle: 'Empecemos a diseñar.',
    formName: 'Tu nombre', formEmail: 'Correo electrónico', formProject: 'Tipo de proyecto', formMessage: 'Contanos un poco más',
    formProjectOptions: ['Seleccioná un tipo de proyecto', 'Residencial', 'Corporativo', 'Hospitalidad', 'Renovación y fit-out', 'Otro'],
    formNamePlaceholder: 'Nombre y apellido', formEmailPlaceholder: 'vos@empresa.com', formMessagePlaceholder: 'Contanos dónde, qué y cuándo tenés en mente...',
    formSubmit: 'Enviar consulta', formSending: 'Enviando...', formSuccess: '¡Gracias! Tu mensaje fue enviado.',
    formError: 'No se pudo enviar tu mensaje. Intentá de nuevo.', formInvalid: 'Completá tu nombre, un correo válido y el mensaje.',
    formPending: 'Formulario de muestra: el envío se habilitará cuando agreguemos el correo de contacto.',
    whatsappLabel: 'Chatear por WhatsApp', whatsappPending: 'Falta confirmar el número de WhatsApp',
    footerLine: 'ARQUITECTURA. OFICIO. INNOVACIÓN.',
    credits: 'Contenido e imágenes: documentación provista por X-TRAFIELDS y CEO Contract.',
    top: 'Arriba',
    madeBy: 'Hecho por'
  },
  en: {
    nav: ['Studio', 'Services', 'Projects', 'Contact'],
    menu: 'Divisions',
    project: 'Start a project',
    heroEyebrow: 'X-TRAFIELDS × CEO CONTRACT',
    heroTitle: ['BESPOKE', 'ARCHITECTURE,', 'BUILT.'],
    heroCopy: 'We design and deliver spaces where technical precision, material depth and an international point of view come together.',
    heroCta: 'Discover the studio',
    heroSide: 'DESIGN · CONSTRUCTION · FIT-OUT',
    introEyebrow: 'A CULTURE OF EXCELLENCE',
    introTitle: ['TRADITION TO', 'BUILD THE', 'UNEXPECTED.'],
    introLead: 'An integrated practice for projects that demand identity, quality and complete control of every detail.',
    introBody: 'CEO Contract brings together architecture, engineering, turnkey contracting, renovation, restoration, fit-out and specialist manufacturing. One team follows every project from the first idea to final handover.',
    quote: 'The love of tradition. The courage of innovation.',
    metrics: [
      { value: '+60', label: 'years of building tradition' },
      { value: '17', label: 'countries with references' },
      { value: '+200', label: 'international references' },
      { value: '3', label: 'continents of experience' }
    ],
    servicesEyebrow: 'INTEGRATED CAPABILITIES',
    servicesTitle: ['FROM THE IDEA', 'TO THE FINAL', 'FINISH.'],
    servicesCopy: 'One point of contact for design, construction, furnishing and manufacturing.',
    services: [
      { title: 'Architecture and design', copy: 'Concept, detailed design and coordinated engineering for residential, hospitality, corporate and public spaces.' },
      { title: 'Turnkey construction', copy: 'Planning, delivery, cost control and complete handover under one integrated scope.' },
      { title: 'Renovation and fit-out', copy: 'Precise interventions that transform existing buildings while preserving their character.' },
      { title: 'Custom manufacturing', copy: 'Woodwork, metalwork, furniture and special finishes produced by expert teams.' }
    ],
    craftEyebrow: 'MATERIAL AND CRAFT',
    craftTitle: ['THE EXCEPTIONAL', 'LIVES IN', 'THE DETAIL.'],
    craftCopy: 'Craftspeople, architects, engineers and industrial designers work with textures, wood, metal and unique pieces to turn an idea into a tangible experience.',
    projectsEyebrow: 'FEATURED DEVELOPMENTS',
    projectsTitle: ['ARCHITECTURE', 'THAT ACTIVATES', 'NEW PLACES.'],
    projects: [
      { title: 'CHAÑAR III', location: 'SAN PATRICIO DEL CHAÑAR · NEUQUÉN', copy: 'A contemporary residential development created for the new housing demand at the heart of Argentina’s energy region.', facts: ['4 TOWERS', '240 UNITS', 'RETAIL CENTER'] },
      { title: 'ROCKHAUS', location: 'VACA MUERTA · NEUQUÉN', copy: 'Premium residences combining landscape, amenities, connectivity and comfort for an active year-round community.', facts: ['MASTERPLAN', 'PREMIUM RESIDENCES', 'AMENITIES'] }
    ],
    legacyEyebrow: 'INTERNATIONAL EXPERIENCE',
    legacyTitle: ['COMPLEX', 'PUBLIC SPACES.'],
    legacyCopy: 'The team’s experience spans auditoriums, government buildings, hotels, residences, commercial environments and specialist furnishing across Europe, Asia, Africa and the Americas.',
    legacyCards: ['Auditoriums and culture', 'Public and corporate buildings'],
    contactEyebrow: 'LET’S MAKE SOMETHING EXTRAORDINARY',
    contactTitle: ['YOUR IDEA', 'DESERVES A', 'SINGULAR SPACE.'],
    contactCopy: 'Tell us what you want to transform. Our team can guide the project from early strategy to turnkey handover.',
    formEyebrow: 'TELL US ABOUT YOUR PROJECT', formTitle: 'Let’s start designing.',
    formName: 'Your name', formEmail: 'Email address', formProject: 'Project type', formMessage: 'Tell us a little more',
    formProjectOptions: ['Select a project type', 'Residential', 'Corporate', 'Hospitality', 'Renovation and fit-out', 'Other'],
    formNamePlaceholder: 'Name and surname', formEmailPlaceholder: 'you@company.com', formMessagePlaceholder: 'Tell us where, what and when you have in mind...',
    formSubmit: 'Send inquiry', formSending: 'Sending...', formSuccess: 'Thank you! Your message has been sent.',
    formError: 'Your message could not be sent. Please try again.', formInvalid: 'Please complete your name, a valid email and your message.',
    formPending: 'Demo form — sending will be enabled when a contact email is added.',
    whatsappLabel: 'Chat on WhatsApp', whatsappPending: 'WhatsApp number pending',
    footerLine: 'ARCHITECTURE. CRAFT. INNOVATION.',
    credits: 'Content and imagery: documentation supplied by X-TRAFIELDS and CEO Contract.',
    top: 'Top',
    madeBy: 'Made by'
  },
  el: {
    nav: ['Στούντιο', 'Υπηρεσίες', 'Έργα', 'Επικοινωνία'],
    menu: 'Τομείς',
    project: 'Ξεκινήστε ένα έργο',
    heroEyebrow: 'X-TRAFIELDS × CEO CONTRACT',
    heroTitle: ['ΑΡΧΙΤΕΚΤΟΝΙΚΗ', 'ΣΤΑ ΜΕΤΡΑ', 'ΣΑΣ.'],
    heroCopy: 'Σχεδιάζουμε και υλοποιούμε χώρους όπου συναντώνται η τεχνική ακρίβεια, η υλικότητα και η διεθνής ματιά.',
    heroCta: 'Ανακαλύψτε το στούντιο',
    heroSide: 'ΣΧΕΔΙΑΣΜΟΣ · ΚΑΤΑΣΚΕΥΗ · FIT-OUT',
    introEyebrow: 'ΚΟΥΛΤΟΥΡΑ ΑΡΙΣΤΕΙΑΣ',
    introTitle: ['ΠΑΡΑΔΟΣΗ ΓΙΑ', 'ΤΟ ΑΠΡΟΣΜΕΝΟ.'],
    introLead: 'Μια ολοκληρωμένη πρακτική για έργα που απαιτούν ταυτότητα, ποιότητα και πλήρη έλεγχο κάθε λεπτομέρειας.',
    introBody: 'Η CEO Contract συνδυάζει αρχιτεκτονική, μηχανική, κατασκευή με το κλειδί στο χέρι, ανακαίνιση, αποκατάσταση, fit-out και εξειδικευμένη παραγωγή. Μία ομάδα συνοδεύει κάθε έργο από την πρώτη ιδέα έως την παράδοση.',
    quote: 'Η αγάπη για την παράδοση. Το θάρρος της καινοτομίας.',
    metrics: [
      { value: '+60', label: 'χρόνια κατασκευαστικής παράδοσης' },
      { value: '17', label: 'χώρες με έργα αναφοράς' },
      { value: '+200', label: 'διεθνείς αναφορές' },
      { value: '3', label: 'ήπειροι εμπειρίας' }
    ],
    servicesEyebrow: 'ΟΛΟΚΛΗΡΩΜΕΝΕΣ ΔΥΝΑΤΟΤΗΤΕΣ',
    servicesTitle: ['ΑΠΟ ΤΗΝ ΙΔΕΑ', 'ΣΤΗΝ ΤΕΛΙΚΗ', 'ΛΕΠΤΟΜΕΡΕΙΑ.'],
    servicesCopy: 'Ένας συνεργάτης για σχεδιασμό, κατασκευή, εξοπλισμό και παραγωγή.',
    services: [
      { title: 'Αρχιτεκτονική και σχεδιασμός', copy: 'Σύλληψη, μελέτη εφαρμογής και συντονισμένη μηχανική για κατοικίες, ξενοδοχεία, εταιρικούς και δημόσιους χώρους.' },
      { title: 'Κατασκευή με το κλειδί στο χέρι', copy: 'Σχεδιασμός, εκτέλεση, έλεγχος κόστους και πλήρης παράδοση.' },
      { title: 'Ανακαίνιση και fit-out', copy: 'Ακριβείς παρεμβάσεις που μεταμορφώνουν υπάρχοντα κτίρια διατηρώντας τον χαρακτήρα τους.' },
      { title: 'Ειδική κατασκευή', copy: 'Ξυλουργικές και μεταλλικές κατασκευές, έπιπλα και ειδικά φινιρίσματα από έμπειρες ομάδες.' }
    ],
    craftEyebrow: 'ΥΛΙΚΑ ΚΑΙ ΤΕΧΝΗ',
    craftTitle: ['ΤΟ ΞΕΧΩΡΙΣΤΟ', 'ΖΕΙ ΣΤΗ', 'ΛΕΠΤΟΜΕΡΕΙΑ.'],
    craftCopy: 'Τεχνίτες, αρχιτέκτονες, μηχανικοί και βιομηχανικοί σχεδιαστές μετατρέπουν υφές, ξύλο, μέταλλο και μοναδικά κομμάτια σε απτή εμπειρία.',
    projectsEyebrow: 'ΕΠΙΛΕΓΜΕΝΕΣ ΑΝΑΠΤΥΞΕΙΣ',
    projectsTitle: ['ΑΡΧΙΤΕΚΤΟΝΙΚΗ', 'ΠΟΥ ΕΝΕΡΓΟΠΟΙΕΙ', 'ΝΕΟΥΣ ΤΟΠΟΥΣ.'],
    projects: [
      { title: 'CHAÑAR III', location: 'SAN PATRICIO DEL CHAÑAR · NEUQUÉN', copy: 'Σύγχρονη οικιστική ανάπτυξη για τις νέες ανάγκες στέγασης της ενεργειακής περιοχής της Αργεντινής.', facts: ['4 ΠΥΡΓΟΙ', '240 ΜΟΝΑΔΕΣ', 'ΕΜΠΟΡΙΚΟ ΚΕΝΤΡΟ'] },
      { title: 'ROCKHAUS', location: 'VACA MUERTA · NEUQUÉN', copy: 'Premium κατοικίες με τοπίο, παροχές, συνδεσιμότητα και άνεση για μια ενεργή κοινότητα όλο τον χρόνο.', facts: ['MASTERPLAN', 'PREMIUM ΚΑΤΟΙΚΙΕΣ', 'ΠΑΡΟΧΕΣ'] }
    ],
    legacyEyebrow: 'ΔΙΕΘΝΗΣ ΕΜΠΕΙΡΙΑ',
    legacyTitle: ['ΔΗΜΟΣΙΟΙ ΧΩΡΟΙ', 'ΥΨΗΛΗΣ ΠΟΛΥΠΛΟΚΟΤΗΤΑΣ.'],
    legacyCopy: 'Η εμπειρία της ομάδας περιλαμβάνει αμφιθέατρα, κυβερνητικά κτίρια, ξενοδοχεία, κατοικίες, εμπορικούς χώρους και ειδικό εξοπλισμό σε Ευρώπη, Ασία, Αφρική και Αμερική.',
    legacyCards: ['Αμφιθέατρα και πολιτισμός', 'Δημόσια και εταιρικά κτίρια'],
    contactEyebrow: 'ΑΣ ΔΗΜΙΟΥΡΓΗΣΟΥΜΕ ΚΑΤΙ ΕΞΑΙΡΕΤΙΚΟ',
    contactTitle: ['Η ΙΔΕΑ ΣΑΣ', 'ΑΞΙΖΕΙ ΕΝΑΝ', 'ΜΟΝΑΔΙΚΟ ΧΩΡΟ.'],
    contactCopy: 'Πείτε μας τι θέλετε να μεταμορφώσετε. Η ομάδα μας αναλαμβάνει από την αρχική στρατηγική έως την παράδοση.',
    formEyebrow: 'ΠΕΙΤΕ ΜΑΣ ΓΙΑ ΤΟ ΕΡΓΟ ΣΑΣ', formTitle: 'Ας ξεκινήσουμε τον σχεδιασμό.',
    formName: 'Το όνομά σας', formEmail: 'Email', formProject: 'Τύπος έργου', formMessage: 'Πείτε μας περισσότερα',
    formProjectOptions: ['Επιλέξτε τύπο έργου', 'Κατοικία', 'Εταιρικό', 'Φιλοξενία', 'Ανακαίνιση και fit-out', 'Άλλο'],
    formNamePlaceholder: 'Ονοματεπώνυμο', formEmailPlaceholder: 'you@company.com', formMessagePlaceholder: 'Πείτε μας πού, τι και πότε σχεδιάζετε...',
    formSubmit: 'Αποστολή αιτήματος', formSending: 'Αποστολή...', formSuccess: 'Ευχαριστούμε! Το μήνυμά σας στάλθηκε.',
    formError: 'Δεν ήταν δυνατή η αποστολή. Δοκιμάστε ξανά.', formInvalid: 'Συμπληρώστε όνομα, έγκυρο email και μήνυμα.',
    formPending: 'Δοκιμαστική φόρμα — η αποστολή θα ενεργοποιηθεί όταν προστεθεί email.',
    whatsappLabel: 'Συνομιλία στο WhatsApp', whatsappPending: 'Εκκρεμεί ο αριθμός WhatsApp',
    footerLine: 'ΑΡΧΙΤΕΚΤΟΝΙΚΗ. ΤΕΧΝΗ. ΚΑΙΝΟΤΟΜΙΑ.',
    credits: 'Περιεχόμενο και εικόνες: υλικό των X-TRAFIELDS και CEO Contract.',
    top: 'Πάνω',
    madeBy: 'Δημιουργία'
  }
};

function Arrow({ diagonal = true }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d={diagonal ? 'M5 19 19 5M8 5h11v11' : 'M3 12h17m-7-7 7 7-7 7'} stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function LanguagePicker({ language, setLanguage, light = false }) {
  return (
    <div className={`experience-languages ${light ? 'is-light' : ''}`} aria-label="Language selection">
      {['en', 'es', 'el'].map((lang) => (
        <button
          key={lang}
          type="button"
          className={language === lang ? 'is-active' : ''}
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          aria-label={lang === 'en' ? 'English' : lang === 'es' ? 'Español' : 'Ελληνικά'}
        >
          {lang === 'el' ? 'GR' : lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function ExperienceGateway({ language, setLanguage, onSelect }) {
  const t = gatewayContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = 'X-TRAFIELDS — Architecture, corporate and sports';
  }, [language]);

  return (
    <main className="experience-gateway">
      <div className="gateway-topline">
        <span>{t.prompt}</span>
        <LanguagePicker language={language} setLanguage={setLanguage} />
      </div>
      <div className="gateway-brand">
        <img src="/images/x-trafields-logo.png" alt="X-TRAFIELDS" />
        <span>{t.choose}</span>
      </div>
      <div className="gateway-panels">
        <button className="gateway-panel gateway-architecture" type="button" onClick={() => onSelect('architecture')}>
          <img src="/images/architecture/architecture-hero.webp" alt="" />
          <span className="gateway-panel-shade" />
          <span className="gateway-panel-content">
            <span className="gateway-tag">X-TRAFIELDS / ATELIER</span>
            <strong>{t.architecture}</strong>
            <span className="gateway-copy">{t.architectureCopy}</span>
            <span className="gateway-enter">{t.enter}<Arrow /></span>
          </span>
        </button>
        <button className="gateway-panel gateway-sports" type="button" onClick={() => onSelect('sports')}>
          <img src="/images/stadium-aerial.jpg" alt="" />
          <span className="gateway-panel-shade" />
          <span className="gateway-panel-content">
            <span className="gateway-tag">X-TRAFIELDS / PERFORMANCE</span>
            <strong>{t.sports}</strong>
            <span className="gateway-copy">{t.sportsCopy}</span>
            <span className="gateway-enter">{t.enter}<Arrow /></span>
          </span>
        </button>
      </div>
      <span className="gateway-index gateway-index-left">A</span>
      <span className="gateway-index gateway-index-right">B</span>
    </main>
  );
}

export function ArchitectureSite({ language, setLanguage, onHome, onSports }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenisRef = useRef(null);
  const t = architectureContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `X-TRAFIELDS — ${t.heroTitle.join(' ')}`;
  }, [language, t.heroTitle]);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return undefined;
    const lenis = new Lenis({ duration: 1.4, smoothWheel: true, wheelMultiplier: 0.78, touchMultiplier: 1 });
    lenisRef.current = lenis;
    let frame;
    const animate = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const elements = [...document.querySelectorAll('[data-arch-reveal]')];
    const reveal = () => {
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.9) element.classList.add('is-visible');
      });
    };
    reveal();
    window.addEventListener('scroll', reveal, { passive: true });
    return () => window.removeEventListener('scroll', reveal);
  }, [language]);

  const jumpTo = (id) => {
    setMenuOpen(false);
    const target = document.querySelector(id);
    if (!target) return;
    if (lenisRef.current) lenisRef.current.scrollTo(target, { offset: -76 });
    else target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="architecture-site">
      <header className={`architecture-header ${scrolled ? 'is-scrolled' : ''}`}>
        <button className="architecture-brand" type="button" onClick={onHome} aria-label="X-TRAFIELDS home">
          <img src="/images/x-trafields-logo.png" alt="X-TRAFIELDS" />
        </button>
        <nav className={`architecture-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Architecture navigation">
          {['#architecture-about', '#architecture-services', '#architecture-projects', '#architecture-contact'].map((id, index) => (
            <a href={id} key={id} onClick={(event) => { event.preventDefault(); jumpTo(id); }}>{t.nav[index]}</a>
          ))}
        </nav>
        <div className="architecture-actions">
          <button className="division-switch" type="button" onClick={onHome}>{t.menu}</button>
          <LanguagePicker language={language} setLanguage={setLanguage} light />
          <button className="architecture-cta" type="button" onClick={() => jumpTo('#architecture-contact')}>{t.project}<Arrow /></button>
          <button className={`architecture-menu ${menuOpen ? 'is-open' : ''}`} type="button" onClick={() => setMenuOpen((current) => !current)} aria-label="Menu" aria-expanded={menuOpen}><span /><span /></button>
        </div>
      </header>

      <main>
        <section className="architecture-hero" id="architecture-top">
          <div className="architecture-hero-copy">
            <span className="architecture-eyebrow">{t.heroEyebrow}</span>
            <h1>{t.heroTitle.map((line) => <span key={line}>{line}</span>)}</h1>
            <div className="architecture-hero-bottom">
              <p>{t.heroCopy}</p>
              <button type="button" onClick={() => jumpTo('#architecture-about')}>{t.heroCta}<Arrow /></button>
            </div>
          </div>
          <div className="architecture-hero-visual">
            <img src="/images/architecture/architecture-hero.webp" alt="Contemporary residential architecture" />
            <span className="architecture-hero-overlay" />
            <span className="architecture-hero-side">{t.heroSide}</span>
          </div>
          <div className="architecture-hero-detail">
            <img src="/images/architecture/architecture-detail.webp" alt="Custom architectural metal detail" />
          </div>
        </section>

        <section className="architecture-intro architecture-section" id="architecture-about">
          <div className="architecture-section-label" data-arch-reveal="line">{t.introEyebrow}</div>
          <div className="architecture-intro-grid">
            <div data-arch-reveal="left">
              <h2>{t.introTitle.map((line) => <span key={line}>{line}</span>)}</h2>
              <p className="architecture-intro-lead">{t.introLead}</p>
              <p className="architecture-copy">{t.introBody}</p>
            </div>
            <blockquote data-arch-reveal="right">“{t.quote}”</blockquote>
          </div>
          <div className="architecture-metrics" data-arch-reveal="cards">
            {t.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
        </section>

        <section className="architecture-services architecture-section" id="architecture-services">
          <div className="architecture-section-label" data-arch-reveal="line">{t.servicesEyebrow}</div>
          <div className="architecture-heading-row" data-arch-reveal="left">
            <h2>{t.servicesTitle.map((line) => <span key={line}>{line}</span>)}</h2>
            <p>{t.servicesCopy}</p>
          </div>
          <div className="architecture-service-grid" data-arch-reveal="cards">
            {t.services.map((service) => (
              <article key={service.title}>
                <span className="architecture-service-mark" aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <Arrow />
              </article>
            ))}
          </div>
        </section>

        <section className="architecture-craft">
          <div className="architecture-craft-images" data-arch-reveal="left">
            <img className="architecture-craft-main" src="/images/architecture/architecture-interior.webp" alt="Custom designed contemporary interior" loading="lazy" />
            <img className="architecture-craft-small" src="/images/architecture/architecture-craft.webp" alt="Craftsperson working on a custom architectural element" loading="lazy" />
          </div>
          <div className="architecture-craft-copy" data-arch-reveal="right">
            <div className="architecture-section-label">{t.craftEyebrow}</div>
            <h2>{t.craftTitle.map((line) => <span key={line}>{line}</span>)}</h2>
            <p>{t.craftCopy}</p>
          </div>
        </section>

        <section className="architecture-projects architecture-section" id="architecture-projects">
          <div className="architecture-section-label" data-arch-reveal="line">{t.projectsEyebrow}</div>
          <div className="architecture-heading-row" data-arch-reveal="left">
            <h2>{t.projectsTitle.map((line) => <span key={line}>{line}</span>)}</h2>
          </div>
          <div className="architecture-project-list">
            {t.projects.map((project, index) => (
              <article className="architecture-project" key={project.title} data-arch-reveal={index ? 'right' : 'left'}>
                <div className="architecture-project-image">
                  <img src={index ? '/images/architecture/rockhaus-entry.webp' : '/images/architecture/chanar-aerial.webp'} alt={project.title} loading="lazy" />
                  <span>{project.location}</span>
                </div>
                <div className="architecture-project-body">
                  <h3>{project.title}</h3>
                  <p>{project.copy}</p>
                  <div>{project.facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="architecture-legacy">
          <div className="architecture-legacy-copy" data-arch-reveal="left">
            <div className="architecture-section-label">{t.legacyEyebrow}</div>
            <h2>{t.legacyTitle.map((line) => <span key={line}>{line}</span>)}</h2>
            <p>{t.legacyCopy}</p>
          </div>
          <div className="architecture-legacy-grid" data-arch-reveal="cards">
            {['/images/architecture/architecture-auditorium.webp', '/images/architecture/architecture-public.webp'].map((image, index) => (
              <figure key={image}>
                <img src={image} alt={t.legacyCards[index]} loading="lazy" />
                <figcaption>{t.legacyCards[index]}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="architecture-contact" id="architecture-contact">
          <div className="architecture-contact-copy" data-arch-reveal="left">
            <div className="architecture-section-label">{t.contactEyebrow}</div>
            <h2>{t.contactTitle.map((line) => <span key={line}>{line}</span>)}</h2>
            <p>{t.contactCopy}</p>
          </div>
          <div className="architecture-form-stage" data-arch-reveal="right">
            <ContactForm t={t} variant="architecture" />
          </div>
        </section>
      </main>

      <footer className="architecture-footer">
        <div className="architecture-footer-main">
          <button type="button" onClick={onHome}><img src="/images/x-trafields-logo.png" alt="X-TRAFIELDS" /></button>
          <p>{t.footerLine}</p>
          <button type="button" onClick={onSports}>{gatewayContent[language].sports}<Arrow /></button>
        </div>
        <div className="architecture-footer-bottom">
          <span>{t.credits}</span>
          <a href="#architecture-top" onClick={(event) => { event.preventDefault(); jumpTo('#architecture-top'); }}>↑ {t.top}</a>
        </div>
        <div className="architecture-footer-credit">{t.madeBy} <a href="https://zigodev.com.ar" target="_blank" rel="noopener noreferrer">zigodev</a></div>
      </footer>

      {whatsappNumber ? (
        <a className="whatsapp-float architecture-whatsapp" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label={t.whatsappLabel} title={t.whatsappLabel}><FontAwesomeIcon icon={faWhatsapp} /></a>
      ) : (
        <button className="whatsapp-float architecture-whatsapp is-pending" type="button" disabled aria-label={t.whatsappPending} title={t.whatsappPending}><FontAwesomeIcon icon={faWhatsapp} /></button>
      )}
    </div>
  );
}
