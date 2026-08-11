import type { Metadata } from "next";

const ASSET = "/projects/sr-pancho";

export const metadata: Metadata = {
  title: "Sr. Pancho Gourmet — Identidad gastronómica",
  description:
    "Identidad integral, packaging, comunicación y experiencia de marca para Sr. Pancho Gourmet.",
};

const posters = [
  ["poster-bondi.webp", "Bondi Burger"],
  ["poster-tasty.webp", "Grand Tasty"],
  ["poster-mili.webp", "Mili Burger"],
  ["poster-chicken.webp", "Chicken"],
];

const tvPlates = [
  ["tv-lomito.webp", "Lomito completo"],
  ["tv-panchos.webp", "Panchos dobles"],
  ["tv-worldcup.webp", "Campaña Vamos Argentina"],
];

const stories = [
  ["story-branches.webp", "Comunicación de sucursales"],
  ["story-burgers.webp", "Promoción de hamburguesas"],
  ["story-veggie.webp", "Contenido de producto"],
];

const merch = [
  ["merch-cup.webp", "Vaso infantil"],
  ["merch-bottle.webp", "Botella reutilizable"],
  ["merch-mug.webp", "Taza"],
  ["merch-opener.webp", "Llavero destapador"],
];

export default function SrPanchoGourmet() {
  return (
    <main className="case-page srp-case" id="top">
      <header className="case-header">
        <a className="case-brand" href="/" aria-label="Jotape Creativo, inicio">
          <img src="/brand/logo-compact-color.svg" alt="Jotape Creativo" />
        </a>
        <a className="case-back" href="/#portfolio">
          <span aria-hidden="true">←</span> Todos los proyectos
        </a>
        <a className="case-contact" href="/#contacto">
          Hablemos <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="srp-hero">
        <div className="srp-hero-copy">
          <p className="case-overline">Proyecto seleccionado · Identidad integral</p>
          <h1>
            Sr. Pancho
            <em>Gourmet</em>
          </h1>
          <p className="srp-hero-summary">
            Una identidad preparada para vivir en el local, viajar en una mochila,
            envolver una hamburguesa y convertirse en objeto.
          </p>
          <div className="case-tags" aria-label="Áreas del proyecto">
            <span>Identidad</span>
            <span>Packaging</span>
            <span>Comunicación</span>
            <span>Espacios</span>
          </div>
        </div>

        <figure className="srp-hero-photo">
          <img src={`${ASSET}/hero-person.webp`} alt="Persona sosteniendo una caja de Sr. Pancho" />
          <figcaption>Una marca lista para compartir</figcaption>
        </figure>

        <img className="srp-hero-mark" src={`${ASSET}/mustache.svg`} alt="" />
        <div className="srp-hero-index" aria-hidden="true">01</div>
      </section>

      <section className="case-intro">
        <div className="case-intro-title">
          <p className="case-overline">El proyecto</p>
          <h2>Una marca hecha para <em>moverse.</em></h2>
        </div>
        <div className="case-intro-copy">
          <p>
            Sr. Pancho necesitaba mucho más que una firma. El sistema creció sobre
            una combinación directa de amarillo, negro y blanco, con un bigote que
            funciona como gesto reconocible incluso en las aplicaciones más chicas.
          </p>
          <p>
            La identidad se extendió a packaging, indumentaria, cartelería, pantallas,
            redes, delivery y una colaboración especial de cerveza artesanal.
          </p>
        </div>
        <dl className="case-facts">
          <div><dt>Sector</dt><dd>Gastronomía</dd></div>
          <div><dt>Alcance</dt><dd>Identidad integral</dd></div>
          <div><dt>Tipografía</dt><dd>Montserrat Black</dd></div>
          <div><dt>Dirección</dt><dd>Jotape Creativo</dd></div>
        </dl>
      </section>

      <figure className="case-wide-image">
        <img src={`${ASSET}/storefront.webp`} alt="Fachada de Sr. Pancho Gourmet" />
        <figcaption>La identidad en su contexto real</figcaption>
      </figure>

      <section className="identity-system">
        <header className="case-section-heading case-section-heading--light">
          <p className="case-overline">Sistema de identidad</p>
          <h2>Reconocible en cualquier <em>formato.</em></h2>
          <p>Una arquitectura flexible construida a partir de peso, contraste y humor.</p>
        </header>
        <div className="identity-grid">
          <div className="identity-card identity-card--yellow">
            <img src={`${ASSET}/logo-stacked-black.svg`} alt="Logo principal de Sr. Pancho" />
            <span>Versión principal</span>
          </div>
          <div className="identity-card identity-card--white">
            <img src={`${ASSET}/logo-horizontal.svg`} alt="Versión horizontal de Sr. Pancho" />
            <span>Adaptación horizontal</span>
          </div>
          <div className="identity-card identity-card--black">
            <img src={`${ASSET}/logo-stacked-white-yellow.svg`} alt="Logo de Sr. Pancho en negativo" />
            <span>Alto contraste</span>
          </div>
          <div className="identity-card identity-card--mark">
            <img src={`${ASSET}/mustache.svg`} alt="Bigote, símbolo de Sr. Pancho" />
            <span>Un gesto que firma</span>
          </div>
        </div>
      </section>

      <section className="packaging-section">
        <header className="case-section-heading">
          <p className="case-overline">Packaging</p>
          <h2>Del plano<br />al <em>objeto.</em></h2>
          <p>
            El sistema se transforma en una experiencia táctil: caja, papas,
            banderita y juego conviven en una misma pieza.
          </p>
        </header>

        <div className="packaging-lead">
          <img src={`${ASSET}/box-hand.webp`} alt="Caja infantil de Sr. Pancho sostenida en una mano" />
          <span className="packaging-stamp">Diseño que se arma<br />y se comparte</span>
        </div>

        <figure className="dieline dieline--box">
          <img src={`${ASSET}/box-dieline.webp`} alt="Desarrollo desplegado de la caja infantil" />
          <figcaption>Troquel completo · caja infantil</figcaption>
        </figure>

        <div className="packaging-pair">
          <figure>
            <img src={`${ASSET}/box-set.webp`} alt="Caja, envase de papas y hamburguesa de Sr. Pancho" />
            <figcaption>El sistema producido</figcaption>
          </figure>
          <figure className="dieline dieline--fries">
            <img src={`${ASSET}/fries-dieline.webp`} alt="Desarrollo desplegado del envase de papas" />
            <figcaption>Troquel · envase de papas</figcaption>
          </figure>
        </div>
      </section>

      <section className="poster-section">
        <header className="case-section-heading case-section-heading--light">
          <p className="case-overline">Comunicación gastronómica</p>
          <h2>Producto en<br /><em>primer plano.</em></h2>
          <p>Una familia de afiches verticales que mantiene la voz de la marca mientras cada producto toma protagonismo.</p>
        </header>
        <div className="poster-rail">
          {posters.map(([src, alt], index) => (
            <figure key={src} className={index % 2 ? "poster poster--down" : "poster"}>
              <img src={`${ASSET}/${src}`} alt={`Afiche ${alt}`} />
              <figcaption>{String(index + 1).padStart(2, "0")} · {alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="digital-section">
        <header className="case-section-heading">
          <p className="case-overline">Pantallas & redes</p>
          <h2>Una identidad que <em>habla todos los días.</em></h2>
          <p>Contenido pensado para la decisión en el local y para sostener el vínculo cotidiano en redes.</p>
        </header>

        <div className="tv-grid">
          {tvPlates.map(([src, alt]) => (
            <figure key={src}>
              <div className="screen-frame"><img src={`${ASSET}/${src}`} alt={alt} /></div>
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>

        <div className="story-row" aria-label="Selección de stories">
          {stories.map(([src, alt]) => (
            <figure key={src}>
              <div className="phone-frame"><img src={`${ASSET}/${src}`} alt={alt} /></div>
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="delivery-section">
        <header className="case-section-heading case-section-heading--light">
          <p className="case-overline">Delivery</p>
          <h2>La marca también<br /><em>sale a la calle.</em></h2>
          <p>Mochila, bolsas y sellos mantienen la experiencia desde el local hasta la entrega.</p>
        </header>
        <div className="delivery-grid">
          <figure className="delivery-grid__bag">
            <img src={`${ASSET}/delivery-bag.webp`} alt="Mochila amarilla de delivery Sr. Pancho" />
          </figure>
          <figure className="delivery-grid__action">
            <img src={`${ASSET}/delivery-action.webp`} alt="Pedido de Sr. Pancho saliendo de la mochila" />
          </figure>
          <figure className="delivery-grid__bags">
            <img src={`${ASSET}/delivery-bags.webp`} alt="Bolsas kraft de Sr. Pancho en el local" />
          </figure>
        </div>
      </section>

      <section className="beer-section">
        <div className="beer-copy">
          <p className="case-overline">Sr. Pancho × Grünbauch</p>
          <h2>Una cerveza creada para la <em>marca.</em></h2>
          <p>
            Dos clientes del estudio trabajando juntos: Grünbauch desarrolló una
            dorada entrerriana especial y Jotape diseñó sus presentaciones en lata y botella.
          </p>
        </div>
        <figure className="beer-object beer-object--bottle">
          <img src={`${ASSET}/beer-bottle.webp`} alt="Botella de cerveza Grünbauch para Sr. Pancho" />
        </figure>
        <figure className="beer-object beer-object--can">
          <img src={`${ASSET}/beer-can.webp`} alt="Lata de cerveza Grünbauch para Sr. Pancho" />
        </figure>
        <figure className="beer-wrap">
          <img src={`${ASSET}/beer-wrap.webp`} alt="Desarrollo completo de la lata colaborativa" />
          <figcaption>Desarrollo de etiqueta</figcaption>
        </figure>
      </section>

      <section className="merch-section">
        <header className="case-section-heading">
          <p className="case-overline">Merchandising</p>
          <h2>La marca convertida en <em>objeto.</em></h2>
          <p>Una familia de piezas que alterna el amarillo dominante con aplicaciones blancas más silenciosas.</p>
        </header>
        <div className="merch-grid">
          {merch.map(([src, alt]) => (
            <figure key={src}>
              <img src={`${ASSET}/${src}`} alt={alt} />
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="space-section">
        <header className="case-section-heading case-section-heading--light">
          <p className="case-overline">Presencia física</p>
          <h2>Una firma que se hace <em>ver.</em></h2>
        </header>
        <div className="space-grid">
          <figure><img src={`${ASSET}/signage.webp`} alt="Fachada nocturna de Sr. Pancho con su cartel luminoso" /></figure>
          <figure><img src={`${ASSET}/sign-round.webp`} alt="Cartel luminoso de Sr. Pancho aplicado en la fachada del local" /></figure>
        </div>
        <div className="space-detail">
          <figure>
            <img src={`${ASSET}/sign-detail.webp`} alt="Detalle de fabricación del cartel luminoso de Sr. Pancho" />
          </figure>
          <div className="space-detail__copy">
            <p className="case-overline">Diseño + producción</p>
            <h3>La identidad también se <em>construye.</em></h3>
            <p>Desde el frente principal hasta el cartel “mereces lo que sueñas”: diseño, producción y terminación con frentes de acrílico e iluminación LED interna.</p>
          </div>
        </div>
      </section>

      <section className="social-section">
        <header className="case-section-heading">
          <p className="case-overline">La marca en uso</p>
          <h2>Diseñada para <em>compartir.</em></h2>
          <p>El sistema cobra sentido cuando el packaging sale de la mesa de trabajo y entra en la vida de las personas.</p>
        </header>
        <div className="social-mosaic">
          <figure className="social-mosaic__yellow"><img src={`${ASSET}/social-yellow.webp`} alt="Dos personas sosteniendo hamburguesas de Sr. Pancho" /></figure>
          <figure className="social-mosaic__guy social-mosaic__protected">
            <img src={`${ASSET}/social-guy.webp`} alt="Persona sosteniendo una caja de Sr. Pancho" />
            <span className="face-x face-x--guy" aria-hidden="true" />
          </figure>
          <figure className="social-mosaic__burger social-mosaic__protected">
            <img src={`${ASSET}/social-burger.webp`} alt="Persona disfrutando una hamburguesa" />
            <span className="face-x face-x--burger" aria-hidden="true" />
          </figure>
          <figure className="social-mosaic__pair social-mosaic__protected">
            <img src={`${ASSET}/social-pair.webp`} alt="Dos personas compartiendo productos de Sr. Pancho" />
            <span className="face-x face-x--pair-left" aria-hidden="true" />
            <span className="face-x face-x--pair-right" aria-hidden="true" />
          </figure>
          <figure className="social-mosaic__group social-mosaic__protected">
            <img src={`${ASSET}/social-group.webp`} alt="Grupo de personas en Sr. Pancho" />
            <span className="face-x face-x--group-left" aria-hidden="true" />
            <span className="face-x face-x--group-center" aria-hidden="true" />
            <span className="face-x face-x--group-right" aria-hidden="true" />
          </figure>
        </div>
      </section>

      <section className="next-project">
        <p>Proyecto 01 · Sr. Pancho Gourmet</p>
        <h2>Una identidad que vive mucho más allá del <em>logo.</em></h2>
        <a href="/#contacto">¿Hacemos la próxima? <span aria-hidden="true">↗</span></a>
      </section>

      <footer className="case-footer">
        <a href="/" aria-label="Volver a Jotape Creativo">
          <img src="/brand/logo-horizontal-white.svg" alt="Jotape Creativo" />
        </a>
        <p>Identidad, comunicación y piezas que se hacen ver.</p>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
