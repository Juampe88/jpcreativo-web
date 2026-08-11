"use client";

import { FormEvent, PointerEvent, useRef, useState } from "react";

const projects = [
  {
    name: "Sr. Pancho Gourmet",
    kind: "Identidad integral",
    categories: ["Identidad", "Packaging", "Espacios"],
    detail: "Marca, packaging y experiencia gastronÃ³mica",
    visual: "srpancho",
    number: "01",
    href: "/proyectos/sr-pancho-gourmet",
  },
  {
    name: "La AngÃ©lica",
    kind: "Identidad",
    categories: ["Identidad", "Espacios"],
    detail: "Hospitalidad rural Â· Entre RÃ­os",
    visual: "rural",
    number: "02",
    href: "/proyectos/la-angelica",
  },
  {
    name: "Colonia AyuÃ­",
    kind: "Identidad institucional",
    categories: ["Identidad", "CampaÃ±a", "Espacios"],
    detail: "Sistema pÃºblico Â· Territorio y comunidad",
    visual: "ayui",
    number: "03",
    href: "/proyectos/colonia-ayui",
  },
  {
    name: "AntÃ¡rtida",
    kind: "Identidad integral",
    categories: ["Identidad", "Packaging"],
    detail: "Helados artesanales Â· Una historia familiar desde 1960",
    visual: "antartida",
    number: "04",
    href: "/proyectos/antartida",
  },
  {
    name: "Pablito Viajero",
    kind: "DiseÃ±o editorial",
    categories: ["Editorial"],
    detail: "Libros de viaje Â· DiseÃ±o, maquetaciÃ³n y preprensa",
    visual: "editorial",
    number: "05",
    href: "/proyectos/pablito-viajero",
  },
  {
    name: "CartelerÃ­a & espacios",
    kind: "ProducciÃ³n integral",
    categories: ["Espacios"],
    detail: "CorpÃ³reos, seÃ±alÃ©tica, grÃ¡fica aplicada e instalaciÃ³n",
    visual: "cartelar",
    number: "06",
    href: "/proyectos/carteleria-espacios",
  },
];

const filters = ["Todos", "Identidad", "Packaging", "Editorial", "CampaÃ±a", "Espacios"];

const clientLogoData = [
  ["Vaca Tuerta", 1], ["Tecnomix", 2], ["Swimming", 3], ["GirirÃ­", 4],
  ["Sinergia", 5], ["Schattenhofer", 7], ["Cartelar", 8], ["Remsa", 9],
  ["Playmotur", 10], ["Pasta Rica", 11], ["Kaizen", 12],
  ["MH Estudio Inmobiliario", 13], ["Mercado Plaza", 14], ["Marilyn Shop", 15],
  ["MaranhÃ£o", 16], ["Manojo Market", 17], ["Lubricentro ZorraquÃ­n", 18],
  ["Letroye Parabrisas", 19], ["Las Lilas", 20], ["LH La Hacienda", 21],
  ["Keto Prep", 22], ["Integral Service", 23], ["Il Forno", 24], ["Gromet", 25],
  ["Florentina", 26], ["Flo", 27], ["Humbral", 28], ["Farneda", 29],
  ["Schen Berger", 30], ["EUP", 31], ["Energy Sound", 32],
  ["En sus marcas", 33], ["El GalpÃ³n", 34], ["Dinar", 35],
  ["CompaÃ±Ã­a de Vinos", 36], ["GrÃ¼nBauch", 37], ["EfecÃ© Distribuciones", 38],
  ["Yrigoyen Centro MÃ©dico", 39], ["Casa RubÃ©n", 40],
  ["CabaÃ±a La Florencia", 41], ["Burnit", 42], ["BNZ", 43],
  ["AyuÃ­ Industriales", 44], ["Aranda", 45], ["Amaoto", 46],
  ["Alexis GuichÃ³n", 47], ["Agroinga", 48], ["Club 9 de Julio", 49],
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
    const subject = `Consulta web Â· ${project}`;
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

        <nav className="main-nav" aria-label="NavegaciÃ³n principal">
          <a href="#estudio">Estudio</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#servicios">Servicios</a>
        </nav>

        <a className="header-cta" href="#contacto">
          Hablemos <span aria-hidden="true">â†—</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Estudio de diseÃ±o grÃ¡fico Â· Concordia, ER
          </p>
          <h1>
            Ideas que se
            <span className="hero-accent"> hacen ver.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Identidad, comunicaciÃ³n y piezas que le dan forma a proyectos
              con personalidad.
            </p>
            <a className="circle-link" href="#portfolio" aria-label="Proyectos">
              <span>Proyectos</span>
              <b aria-hidden="true">â†“</b>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="SelecciÃ³n grÃ¡fica de trabajos de Jotape Creativo">
  <div className="art-grid" aria-hidden="true">
    <div className="art-card art-card--blue">
      <span className="art-number">01</span>
      <img className="art-card__responsive-logo" src="/brand/logo-compact-white.svg" alt="" />
      <div className="art-card__copy">
        <strong>Marca</strong>
        <i>con carÃ¡cter</i>
      </div>
    </div>
            <div className="art-card art-card--light">
              <span className="art-label">Sistema visual oficial</span>
              <div className="art-logo-lockup">
                <img src="/brand/logo-horizontal-color.svg" alt="" />
              </div>
            </div>
            <div className="art-card art-card--dark">
              <span className="art-label">DiseÃ±o que funciona</span>
              <div className="type-stack">FORMA<br /><em>+</em> IDEA</div>
            </div>
          </div>
          <div className="art-caption">
            <span>Branding</span><span>Editorial</span><span>CampaÃ±as</span>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section-heading">
          <p className="section-kicker">Proyectos seleccionados</p>
          <h2>Trabajo que habla<br /><em>por sÃ­ solo.</em></h2>
          <p className="section-intro">
            Una selecciÃ³n inicial de identidades, campaÃ±as y experiencias
            desarrolladas para marcas de la regiÃ³n.
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
                    <span className="rural-card-label">Identidad con raÃ­ces</span>
                  </>
                )}
                {project.visual === "antartida" && (
                  <>
                    <img
                      className="antartida-card-photo"
                      src="/projects/antartida/sign.webp"
                      alt=""
                    />
                    <span className="antartida-card-shade" />
                    <span className="antartida-card-label">Receta original Â· 1960</span>
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
                    <span className="cartelar-card-label">Del diseÃ±o al espacio</span>
                    <span className="cartelar-word">HACER<br />VISIBLE</span>
                  </>
                )}
                {project.visual === "editorial" && (
                  <>
                    <img className="editorial-card-photo" src="/projects/editorial/book-scene.webp" alt="" />
                    <span className="editorial-card-shade" />
                    <span className="editorial-card-label">DiseÃ±o editorial Â· desde el km 0</span>
                    <span className="editorial-card-word">HISTORIAS<br /><em>QUE VIAJAN</em></span>
                  </>
                )}
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-meta">
                <h3>{project.name}</h3>
                <span>{project.kind}</span>
                <p>{project.detail}</p>
                {project.href && <b className="project-open" aria-hidden="true">Ver caso â†—</b>}
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
            Proyectos grandes, pequeÃ±os, pÃºblicos y privados. Distintas escalas,
            una misma forma de acompaÃ±ar.
          </p>
        </div>

        <div className="clients-marquee" aria-label="SelecciÃ³n de clientes de Jotape Creativo">
          <LogoMarqueeRow logos={clientLogos.slice(0, 24)} />
          <LogoMarqueeRow logos={clientLogos.slice(24)} reverse offset={24} />
        </div>

        <p className="clients-note">
          ArrastrÃ¡ con el mouse o con el dedo Â· AcercÃ¡ el cursor para recuperar el color original.
        </p>
      </section>

      <section className="studio-section" id="estudio">
        <div className="studio-intro">
          <p className="section-kicker section-kicker--light">Jotape por dentro</p>
          <h2>DiseÃ±o cercano.<br /><em>Criterio profesional.</em></h2>
          <div className="studio-copy">
            <p>
              Jotape Creativo es un estudio independiente que acompaÃ±a a cada
              cliente desde la idea hasta la pieza terminada.
            </p>
            <p>
              Escuchamos, pensamos y diseÃ±amos sistemas visuales listos para
              vivir en el mundo real: desde una marca hasta un cartel, una carta
              o una campaÃ±a completa.
            </p>
          </div>
        </div>

        <div className="services" id="servicios">
          <p className="section-kicker section-kicker--light">QuÃ© hacemos</p>
          <div className="service-list">
            <article><span>01</span><h3>Identidad de marca</h3><p>Concepto, logo, sistema visual y guÃ­a de uso.</p></article>
            <article><span>02</span><h3>ComunicaciÃ³n</h3><p>CampaÃ±as, redes, piezas editoriales y contenido.</p></article>
            <article><span>03</span><h3>Espacios & soporte</h3><p>CartelerÃ­a, seÃ±alÃ©tica, packaging y aplicaciones.</p></article>
            <article><span>04</span><h3>DirecciÃ³n creativa</h3><p>Una mirada integral para proyectos que quieren crecer.</p></article>
          </div>
        </div>

        <div className="contact-panel" id="contacto">
          <div className="contact-copy">
            <p className="section-kicker">Contacto</p>
            <h2>Â¿TenÃ©s un proyecto<br /><em>en mente?</em></h2>
            <p>Contame un poco. Arrancamos con una charla simple y vemos cÃ³mo darle forma.</p>
            <div className="contact-channels" aria-label="Canales de contacto">
              <a href="https://www.instagram.com/jotape.creativo/" target="_blank" rel="noreferrer">
                <span>Instagram</span>
                <strong>@jotape.creativo â†—</strong>
              </a>
              <a href="https://wa.me/5493412123601?text=Hola%20Juampe%2C%20vi%20tu%20portfolio%20y%20quiero%20contarte%20un%20proyecto." target="_blank" rel="noreferrer">
                <span>WhatsApp</span>
                <strong>+54 9 341 2 123601 â†—</strong>
              </a>
              <a href="mailto:juanpedrocarbonara@gmail.com">
                <span>Email</span>
                <strong>juanpedrocarbonara@gmail.com â†—</strong>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Nombre</span>
              <input name="name" type="text" placeholder="Â¿CÃ³mo te llamÃ¡s?" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="tu@email.com" required />
            </label>
            <label>
              <span>Proyecto</span>
              <select name="project" defaultValue="">
                <option value="" disabled>Â¿QuÃ© necesitÃ¡s?</option>
                <option>Identidad de marca</option>
                <option>CampaÃ±a o comunicaciÃ³n</option>
                <option>CartelerÃ­a o espacio</option>
                <option>Otro proyecto</option>
              </select>
            </label>
            <label>
              <span>Mensaje</span>
              <textarea name="message" placeholder="Contame la idea, el momento del proyecto y quÃ© te gustarÃ­a lograr." required />
            </label>
            <button className="submit-button" type="submit">
              Enviar consulta <span aria-hidden="true">â†—</span>
            </button>
            {sent && (
              <p className="form-note" role="status">
                Abrimos tu aplicaciÃ³n de correo con el mensaje listo para enviar.
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
          <p>DiseÃ±o grÃ¡fico Â· Concordia, Entre RÃ­os</p>
          <div className="footer-links">
            <a href="https://www.instagram.com/jotape.creativo/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:juanpedrocarbonara@gmail.com">Email</a>
            <a href="https://wa.me/5493412123601" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <a href="#inicio">Volver arriba â†‘</a>
        </footer>
      </section>
    </main>
  );
}
