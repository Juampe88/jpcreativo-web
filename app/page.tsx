"use client";

import { FormEvent, PointerEvent, useRef, useState } from "react";

const projects = [
  {
    name: "Sr. Pancho Gourmet",
    kind: "Identidad integral",
    categories: ["Identidad", "Packaging", "Espacios"],
    detail: "Marca, packaging y experiencia gastronómica",
    visual: "srpancho",
    number: "01",
    href: "/proyectos/sr-pancho-gourmet",
  },
  {
    name: "La Angélica",
    kind: "Identidad",
    categories: ["Identidad", "Espacios"],
    detail: "Hospitalidad rural · Entre Ríos",
    visual: "rural",
    number: "02",
    href: "/proyectos/la-angelica",
  },
  {
    name: "Colonia Ayuí",
    kind: "Identidad institucional",
    categories: ["Identidad", "Campaña", "Espacios"],
    detail: "Sistema público · Territorio y comunidad",
    visual: "ayui",
    number: "03",
    href: "/proyectos/colonia-ayui",
  },
  {
    name: "Antártida",
    kind: "Identidad integral",
    categories: ["Identidad", "Packaging"],
    detail: "Helados artesanales · Una historia familiar desde 1960",
    visual: "antartida",
    number: "04",
    href: "/proyectos/antartida",
  },
  {
    name: "Pablito Viajero",
    kind: "Diseño editorial",
    categories: ["Editorial"],
    detail: "Libros de viaje · Diseño, maquetación y preprensa",
    visual: "editorial",
    number: "05",
    href: "/proyectos/pablito-viajero",
  },
  {
    name: "Cartelería & espacios",
    kind: "Producción integral",
    categories: ["Espacios"],
    detail: "Corpóreos, señalética, gráfica aplicada e instalación",
    visual: "cartelar",
    number: "06",
    href: "/proyectos/carteleria-espacios",
  },
];

const filters = ["Todos", "Identidad", "Packaging", "Editorial", "Campaña", "Espacios"];

const clientLogoData = [
  ["Vaca Tuerta", 1], ["Tecnomix", 2], ["Swimming", 3], ["Girirí", 4],
  ["Sinergia", 5], ["Schattenhofer", 7], ["Cartelar", 8], ["Remsa", 9],
  ["Playmotur", 10], ["Pasta Rica", 11], ["Kaizen", 12],
  ["MH Estudio Inmobiliario", 13], ["Mercado Plaza", 14], ["Marilyn Shop", 15],
  ["Maranhão", 16], ["Manojo Market", 17], ["Lubricentro Zorraquín", 18],
  ["Letroye Parabrisas", 19], ["Las Lilas", 20], ["LH La Hacienda", 21],
  ["Keto Prep", 22], ["Integral Service", 23], ["Il Forno", 24], ["Gromet", 25],
  ["Florentina", 26], ["Flo", 27], ["Humbral", 28], ["Farneda", 29],
  ["Schen Berger", 30], ["EUP", 31], ["Energy Sound", 32],
  ["En sus marcas", 33], ["El Galpón", 34], ["Dinar", 35],
  ["Compañía de Vinos", 36], ["GrünBauch", 37], ["Efecé Distribuciones", 38],
  ["Yrigoyen Centro Médico", 39], ["Casa Rubén", 40],
  ["Cabaña La Florencia", 41], ["Burnit", 42], ["BNZ", 43],
  ["Ayuí Industriales", 44], ["Aranda", 45], ["Amaoto", 46],
  ["Alexis Guichón", 47], ["Agroinga", 48], ["Club 9 de Julio", 49],
] as const;

const clientLogos = clientLogoData.map(([name, number]) => {
  const file = String(number).padStart(2, "0");
  return {
    name,
    mono: `/clients/mono/client-${file}.svg`,
    color: `/clients/color/client-${file}.svg`,
  };
});

function LogoMarqueeRow({
  logos,
  reverse = false,
  offset = 0,
}: {
  logos: typeof clientLogos;
  reverse?: boolean;
  offset?: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, x: 0, scroll: 0 });
  const [dragging, setDragging] = useState(false);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || !rowRef.current) return;
    drag.current = {
      active: true,
      x: event.clientX,
      scroll: rowRef.current.scrollLeft,
    };
    rowRef.current.setPointerCapture(event.pointerId);
    setDragging(true);
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current.active || !rowRef.current) return;
    rowRef.current.scrollLeft =
      drag.current.scroll - (event.clientX - drag.current.x);
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (!drag.current.active || !rowRef.current) return;
    drag.current.active = false;
    if (rowRef.current.hasPointerCapture(event.pointerId)) {
      rowRef.current.releasePointerCapture(event.pointerId);
    }
    setDragging(false);
  }

  return (
    <div
      className={`clients-row${reverse ? " clients-row--reverse" : ""}${dragging ? " is-dragging" : ""}`}
      ref={rowRef}
      onPointerDown={startDrag}
      onPointerMove={moveDrag}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div className="clients-track">
        {[0, 1].map((copyIndex) => (
          <div
            className="clients-group"
            aria-hidden={copyIndex === 1}
            key={`group-${offset}-${copyIndex}`}
          >
            {logos.map((logo) => (
              <div className="client-logo" key={`${logo.name}-${copyIndex}`}>
                <img
                  className="client-logo__mono"
                  src={logo.mono}
                  alt={copyIndex === 0 ? logo.name : ""}
                  loading="lazy"
                  draggable={false}
                />
                <img
                  className="client-logo__color"
                  src={logo.color}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [sent, setSent] = useState(false);
  const visibleProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const project = String(data.get("project") || "Nuevo proyecto");
    const message = String(data.get("message") || "");
    const subject = `Consulta web · ${project}`;
    const body = [
      `Hola Juampe, soy ${name}.`,
      "",
      message,
      "",
      `Mi email: ${email}`,
    ].join("\n");

    window.location.href = `mailto:juanpedrocarbonara@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Jotape Creativo, inicio">
          <img
            className="brand-logo brand-logo--header"
            src="/brand/logo-compact-color.svg"
            alt="Jotape Creativo"
          />
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#estudio">Estudio</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#servicios">Servicios</a>
        </nav>

        <a className="header-cta" href="#contacto">
          Hablemos <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Estudio de diseño gráfico · Concordia, ER
          </p>
          <h1>
            Ideas que se
            <span className="hero-accent"> hacen ver.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Identidad, comunicación y piezas que le dan forma a proyectos
              con personalidad.
            </p>
            <a className="circle-link" href="#portfolio" aria-label="Proyectos">
              <span>Proyectos</span>
              <b aria-hidden="true">↓</b>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Selección gráfica de trabajos de Jotape Creativo">
  <div className="art-grid" aria-hidden="true">
    <div className="art-card art-card--blue">
      <span className="art-number">01</span>
      <img className="art-card__responsive-logo" src="/brand/logo-compact-white.svg" alt="" />
      <div className="art-card__copy">
        <strong>Marca</strong>
        <i>con carácter</i>
      </div>
    </div>
            <div className="art-card art-card--light">
              <span className="art-label">Sistema visual oficial</span>
              <div className="art-logo-lockup">
                <img src="/brand/logo-horizontal-color.svg" alt="" />
              </div>
            </div>
            <div className="art-card art-card--dark">
              <span className="art-label">Diseño que funciona</span>
              <div className="type-stack">FORMA<br /><em>+</em> IDEA</div>
            </div>
          </div>
          <div className="art-caption">
            <span>Branding</span><span>Editorial</span><span>Campañas</span>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section-heading">
          <p className="section-kicker">Proyectos seleccionados</p>
          <h2>Trabajo que habla<br /><em>por sí solo.</em></h2>
          <p className="section-intro">
            Una selección inicial de identidades, campañas y experiencias
            desarrolladas para marcas de la región.
          </p>
        </div>

        <div className="filter-row" aria-label="Filtrar proyectos">
          {filters.map((filter) => (
            <button
              className={filter === activeFilter ? "filter active" : "filter"}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
              aria-pressed={filter === activeFilter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-grid" aria-live="polite">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.name}>
              {project.href && (
                <a className="project-card-link" href={project.href} aria-label={`Ver proyecto ${project.name}`} />
              )}
              <div className={`project-visual visual--${project.visual}`} aria-hidden="true">
                {project.visual === "srpancho" && (
                  <>
                    <img className="srpancho-card-photo" src="/projects/sr-pancho/hero-person.webp" alt="" />
                    <span className="srpancho-card-label">Identidad en movimiento</span>
                    <img className="srpancho-card-logo" src="/projects/sr-pancho/logo-stacked-white-yellow.svg" alt="" />
                  </>
                )}
                {project.visual === "rural" && (
                  <>
                    <img className="rural-card-photo" src="/projects/la-angelica/hero.webp" alt="" />
                    <span className="rural-card-shade" />
                    <img className="rural-card-logo" src="/projects/la-angelica/logo.svg" alt="" />
                    <span className="rural-card-label">Identidad con raíces</span>
                  </>
                )}
                {project.visual === "antartida" && (
                  <>
                    <img
                      className="antartida-card-photo"
                      src="/projects/antartida/cup.webp"
                      alt=""
                    />
                    <span className="antartida-card-shade" />
                    <span className="antartida-card-label">Receta original · 1960</span>
                  </>
                )}
                {project.visual === "ayui" && (
                  <>
                    <img className="ayui-card-photo" src="/projects/colonia-ayui/home-card.webp" alt="" />
                    <span className="ayui-card-shade" />
                    <img className="ayui-card-logo" src="/projects/colonia-ayui/logo-municipal.svg" alt="" />
                    <span className="ayui-card-label">Identidad para un territorio</span>
                  </>
                )}
                {project.visual === "cartelar" && (
                  <>
                    <img className="cartelar-card-photo" src="/projects/carteleria/hero.webp" alt="" />
                    <span className="cartelar-card-shade" />
                    <span className="cartelar-card-label">Del diseño al espacio</span>
                    <span className="cartelar-word">HACER<br />VISIBLE</span>
                  </>
                )}
                {project.visual === "editorial" && (
                  <>
                    <img className="editorial-card-photo" src="/projects/editorial/book-scene.webp" alt="" />
                    <span className="editorial-card-shade" />
                    <span className="editorial-card-label">Diseño editorial · desde el km 0</span>
                    <span className="editorial-card-word">HISTORIAS<br /><em>QUE VIAJAN</em></span>
                  </>
                )}
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-meta">
                <h3>{project.name}</h3>
                <span>{project.kind}</span>
                <p>{project.detail}</p>
                {project.href && <b className="project-open" aria-hidden="true">Ver caso ↗</b>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="clients-section" aria-labelledby="clients-title">
        <div className="clients-heading">
          <p className="section-kicker section-kicker--light">Marcas con las que trabajamos</p>
          <h2 id="clients-title">
            Nos eligieron para hacer visible
            <em> lo que son.</em>
          </h2>
          <p>
            Proyectos grandes, pequeños, públicos y privados. Distintas escalas,
            una misma forma de acompañar.
          </p>
        </div>

        <div className="clients-marquee" aria-label="Selección de clientes de Jotape Creativo">
          <LogoMarqueeRow logos={clientLogos.slice(0, 24)} />
          <LogoMarqueeRow logos={clientLogos.slice(24)} reverse offset={24} />
        </div>

        <p className="clients-note">
          Arrastrá con el mouse o con el dedo · Acercá el cursor para recuperar el color original.
        </p>
      </section>

      <section className="studio-section" id="estudio">
        <div className="studio-intro">
          <p className="section-kicker section-kicker--light">Jotape por dentro</p>
          <h2>Diseño cercano.<br /><em>Criterio profesional.</em></h2>
          <div className="studio-copy">
            <p>
              Jotape Creativo es un estudio independiente que acompaña a cada
              cliente desde la idea hasta la pieza terminada.
            </p>
            <p>
              Escuchamos, pensamos y diseñamos sistemas visuales listos para
              vivir en el mundo real: desde una marca hasta un cartel, una carta
              o una campaña completa.
            </p>
          </div>
        </div>

        <div className="services" id="servicios">
          <p className="section-kicker section-kicker--light">Qué hacemos</p>
          <div className="service-list">
            <article><span>01</span><h3>Identidad de marca</h3><p>Concepto, logo, sistema visual y guía de uso.</p></article>
            <article><span>02</span><h3>Comunicación</h3><p>Campañas, redes, piezas editoriales y contenido.</p></article>
            <article><span>03</span><h3>Espacios & soporte</h3><p>Cartelería, señalética, packaging y aplicaciones.</p></article>
            <article><span>04</span><h3>Dirección creativa</h3><p>Una mirada integral para proyectos que quieren crecer.</p></article>
          </div>
        </div>

        <div className="contact-panel" id="contacto">
          <div className="contact-copy">
            <p className="section-kicker">Contacto</p>
            <h2>¿Tenés un proyecto<br /><em>en mente?</em></h2>
            <p>Contame un poco. Arrancamos con una charla simple y vemos cómo darle forma.</p>
            <div className="contact-channels" aria-label="Canales de contacto">
              <a href="https://www.instagram.com/jotape.creativo/" target="_blank" rel="noreferrer">
                <span>Instagram</span>
                <strong>@jotape.creativo ↗</strong>
              </a>
              <a href="https://wa.me/5493412123601?text=Hola%20Juampe%2C%20vi%20tu%20portfolio%20y%20quiero%20contarte%20un%20proyecto." target="_blank" rel="noreferrer">
                <span>WhatsApp</span>
                <strong>+54 9 341 2 123601 ↗</strong>
              </a>
              <a href="mailto:juanpedrocarbonara@gmail.com">
                <span>Email</span>
                <strong>juanpedrocarbonara@gmail.com ↗</strong>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Nombre</span>
              <input name="name" type="text" placeholder="¿Cómo te llamás?" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="tu@email.com" required />
            </label>
            <label>
              <span>Proyecto</span>
              <select name="project" defaultValue="">
                <option value="" disabled>¿Qué necesitás?</option>
                <option>Identidad de marca</option>
                <option>Campaña o comunicación</option>
                <option>Cartelería o espacio</option>
                <option>Otro proyecto</option>
              </select>
            </label>
            <label>
              <span>Mensaje</span>
              <textarea name="message" placeholder="Contame la idea, el momento del proyecto y qué te gustaría lograr." required />
            </label>
            <button className="submit-button" type="submit">
              Enviar consulta <span aria-hidden="true">↗</span>
            </button>
            {sent && (
              <p className="form-note" role="status">
                Abrimos tu aplicación de correo con el mensaje listo para enviar.
              </p>
            )}
          </form>
        </div>

        <footer>
          <a className="brand brand--footer" href="#inicio" aria-label="Jotape Creativo, inicio">
            <img
              className="brand-logo brand-logo--footer"
              src="/brand/logo-horizontal-white.svg"
              alt="Jotape Creativo"
            />
          </a>
          <p>Diseño gráfico · Concordia, Entre Ríos</p>
          <div className="footer-links">
            <a href="https://www.instagram.com/jotape.creativo/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:juanpedrocarbonara@gmail.com">Email</a>
            <a href="https://wa.me/5493412123601" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <a href="#inicio">Volver arriba ↑</a>
        </footer>
      </section>
    </main>
  );
}
