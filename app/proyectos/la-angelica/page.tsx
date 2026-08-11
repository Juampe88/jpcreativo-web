import type { Metadata } from "next";

const ASSET = "/projects/la-angelica";

export const metadata: Metadata = {
  title: "La Angélica — Identidad para turismo rural",
  description:
    "Identidad, packaging, señalética y comunicación para Establecimiento La Angélica.",
};

const products = [
  ["jams.webp", "Familia de mermeladas artesanales"],
  ["yoghurts.webp", "Línea de yoghurts"],
  ["wines.webp", "Etiquetas para vinos"],
];

const objects = [
  ["notebook.webp", "Anotador con tapa kraft"],
  ["cap.webp", "Gorra trucker sublimada"],
  ["tote.webp", "Bolsa reutilizable"],
  ["shirt-system.webp", "Sistema de indumentaria"],
];

export default function LaAngelica() {
  return (
    <main className="case-page la-case" id="top">
      <header className="case-header la-header">
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

      <section className="la-hero">
        <div className="la-hero__image">
          <img
            src={`${ASSET}/hero.webp`}
            alt="Visitante llegando a Establecimiento La Angélica"
          />
        </div>
        <div className="la-hero__wash" aria-hidden="true" />
        <div className="la-hero__copy">
          <p className="case-overline">Proyecto seleccionado · Identidad en evolución</p>
          <img
            className="la-hero__logo"
            src={`${ASSET}/logo.svg`}
            alt="La Angélica"
          />
          <h1>
            Una marca
            <em>con raíces.</em>
          </h1>
          <p>
            Acompañar una identidad desde su nacimiento hasta verla convertirse
            en marca registrada, espacio, producto y experiencia.
          </p>
          <div className="case-tags" aria-label="Áreas del proyecto">
            <span>Identidad</span>
            <span>Packaging</span>
            <span>Señalética</span>
            <span>Comunicación</span>
          </div>
        </div>
        <div className="la-hero__year">EST. 1900</div>
      </section>

      <section className="la-intro">
        <div>
          <p className="case-overline">La historia</p>
          <h2>
            Diseñar para un lugar que
            <em> sigue creciendo.</em>
          </h2>
        </div>
        <div className="la-intro__copy">
          <p>
            La Angélica es hospitalidad rural, producción artesanal y reserva
            natural. También es Martín y Vale: dos personas que hicieron del
            establecimiento familiar una experiencia abierta a quienes quieren
            conocer el paisaje entrerriano.
          </p>
          <p>
            Jotape acompañó ese recorrido con una identidad capaz de vivir en
            alojamientos, etiquetas, carteles, objetos y acciones de conservación,
            manteniendo una misma voz a lo largo del tiempo.
          </p>
        </div>
        <dl className="la-facts">
          <div><dt>Origen</dt><dd>Concordia, Entre Ríos</dd></div>
          <div><dt>Fundación</dt><dd>EST. 1900</dd></div>
          <div><dt>Entorno</dt><dd>80 hectáreas naturales</dd></div>
          <div><dt>Alcance</dt><dd>Identidad integral</dd></div>
        </dl>
      </section>

      <section className="la-manifesto">
        <figure className="la-manifesto__palm">
          <img src={`${ASSET}/palm.webp`} alt="Palmera yatay en el paisaje de La Angélica" />
        </figure>
        <div className="la-manifesto__copy">
          <p className="case-overline">Una idea que guía</p>
          <blockquote>
            “Conocer para querer,
            <br />
            querer para <em>conservar.</em>”
          </blockquote>
          <p>
            La frase atraviesa el proyecto completo: una marca que no se limita a
            mostrar el lugar, sino que invita a comprenderlo y cuidarlo.
          </p>
        </div>
        <span className="la-manifesto__ring" aria-hidden="true" />
      </section>

      <section className="la-identity">
        <header className="la-section-heading">
          <p className="case-overline">Sistema de identidad</p>
          <h2>
            Una firma que aprendió a
            <em> habitar el paisaje.</em>
          </h2>
          <p>
            El sistema combina una construcción tipográfica singular con una
            paleta orgánica y aplicaciones que aceptan la textura de cada soporte.
          </p>
        </header>

        <div className="la-logo-stage">
          <img src={`${ASSET}/logo.svg`} alt="Logo principal de La Angélica" />
          <span>Marca principal</span>
          <b aria-hidden="true">LA</b>
        </div>

        <div className="la-bird-system">
          <div className="la-bird-system__copy">
            <p className="case-overline">Adaptación especial</p>
            <h3>El churrinche entra en escena.</h3>
            <p>
              Una versión apaisada creada para contar la enorme diversidad de aves
              que se avistan en el establecimiento, sin abandonar el código original.
            </p>
          </div>
          <div className="la-bird-system__mark">
            <img
              src={`${ASSET}/bird-lockup.svg`}
              alt="Adaptación de marca La Angélica con un churrinche"
            />
          </div>
        </div>
      </section>

      <figure className="la-editorial">
        <img
          src={`${ASSET}/editorial.webp`}
          alt="Folletos y piezas editoriales de La Angélica sobre una mesa de madera"
        />
        <figcaption>Comunicación, turismo y territorio en una misma mesa</figcaption>
      </figure>

      <section className="la-products">
        <header className="la-section-heading la-section-heading--dark">
          <p className="case-overline">Universo de producto</p>
          <h2>
            La identidad también se
            <em> puede saborear.</em>
          </h2>
          <p>
            Yoghurts, jugos, mieles, mermeladas, vinos y otras elaboraciones
            artesanales construyen una familia reconocible sin perder la
            personalidad de cada producto.
          </p>
        </header>

        <figure className="la-products__hero">
          <img src={`${ASSET}/products.webp`} alt="Familia completa de productos La Angélica" />
          <figcaption>Una marca, muchas historias de origen</figcaption>
        </figure>

        <div className="la-products__grid">
          {products.map(([src, alt], index) => (
            <figure key={src} className={index === 1 ? "la-products__offset" : ""}>
              <img src={`${ASSET}/${src}`} alt={alt} />
              <figcaption>{String(index + 1).padStart(2, "0")} · {alt}</figcaption>
            </figure>
          ))}
        </div>

        <div className="la-products__action">
          <img src={`${ASSET}/product-action.webp`} alt="Presentación de etiquetas La Angélica" />
          <p>
            <span>Diseño que llega al producto real.</span>
            Un sistema flexible, preparado para series pequeñas, nuevos sabores y
            crecimiento orgánico.
          </p>
        </div>
      </section>

      <section className="la-territory">
        <header className="la-section-heading">
          <p className="case-overline">Territorio & conservación</p>
          <h2>
            Señalética que transforma un paseo en
            <em> conocimiento.</em>
          </h2>
          <p>
            Carteles de avistamiento, interpretación y orientación integran el
            sistema visual al entorno sin competir con él.
          </p>
        </header>

        <div className="la-territory__grid">
          <figure className="la-territory__sign">
            <img src={`${ASSET}/bird-sign.webp`} alt="Cartel de avistamiento de aves en La Angélica" />
            <figcaption>Diseño, impresión y ploteo sobre chapa</figcaption>
          </figure>
          <figure className="la-territory__guide">
            <img
              src={`${ASSET}/bird-guide.webp`}
              alt="Guía observando aves junto al cartel interpretativo"
            />
            <figcaption>La pieza funcionando en el territorio</figcaption>
          </figure>
        </div>

        <div className="la-route-note">
          <div className="la-route-note__number" aria-hidden="true">03</div>
          <div>
            <p className="case-overline">Rota dos Butiazais · Red Palmar</p>
            <h3>Una red trinacional alrededor de los palmares.</h3>
          </div>
          <p>
            La Angélica forma parte de un territorio conectado con iniciativas de
            Argentina, Uruguay y Brasil que promueven el uso sustentable del butiá
            y la conservación de los ecosistemas de palmares.
          </p>
        </div>
      </section>

      <section className="la-sustainable">
        <div className="la-sustainable__copy">
          <p className="case-overline">Hospitalidad responsable</p>
          <h2>
            Diseño para hacer visible un compromiso
            <em> sustentable.</em>
          </h2>
          <p>
            La marca desarrolló su propia adaptación sustentable y obtuvo la
            Ecoetiqueta Nivel Bronce de Hoteles Más Verdes, el programa argentino
            de gestión hotelera sustentable.
          </p>
          <a
            href="https://www.hotelesmasverdes.com/quienes-somos/"
            target="_blank"
            rel="noreferrer"
          >
            Conocer el programa <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="la-sustainable__mark">
          <img src={`${ASSET}/tote.webp`} alt="Bolsa con adaptación La Angélica Sustentable" />
          <span aria-hidden="true">SUSTENTABLE</span>
        </div>
      </section>

      <section className="la-objects">
        <header className="la-section-heading">
          <p className="case-overline">Objetos & experiencias</p>
          <h2>
            Una marca que se toca,
            <em> se usa y se recuerda.</em>
          </h2>
          <p>
            Del papel kraft a la tela, del bordado al vinilo: cada material aporta
            una nueva capa sin romper la identidad.
          </p>
        </header>
        <div className="la-objects__grid">
          {objects.map(([src, alt]) => (
            <figure key={src}>
              <img src={`${ASSET}/${src}`} alt={alt} />
              <figcaption>{alt}</figcaption>
            </figure>
          ))}
        </div>
        <div className="la-flybanner">
          <div>
            <p className="case-overline">Marca en movimiento</p>
            <h3>Una bandera que respira con el paisaje.</h3>
          </div>
          <video
            src={`${ASSET}/flybanner.mp4`}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Flybanner de La Angélica moviéndose con el viento"
          />
        </div>
      </section>

      <section className="la-material">
        <figure className="la-material__sign">
          <img
            src={`${ASSET}/led-sign.webp`}
            alt="Cartel corpóreo La Angélica Vermut con iluminación LED"
          />
        </figure>
        <div className="la-material__copy">
          <p className="case-overline">De la pantalla a la materia</p>
          <h2>
            Diseñar, producir e
            <em> instalar.</em>
          </h2>
          <p>
            El proyecto también vive en piezas corpóreas: polifán, impresión 3D,
            acrílico, vinilo e iluminación LED llevados hasta su colocación final.
          </p>
        </div>
        <figure className="la-material__process">
          <img src={`${ASSET}/install.webp`} alt="Juampe instalando el cartel corpóreo de La Angélica" />
          <figcaption>Jotape en obra · instalación de corpóreo</figcaption>
        </figure>
      </section>

      <section className="la-closing">
        <figure>
          <img src={`${ASSET}/designer-shirt.webp`} alt="Juampe usando una remera diseñada para La Angélica" />
        </figure>
        <div>
          <p className="case-overline">Una relación que continúa</p>
          <h2>
            Del primer logo a una marca
            <em> viva.</em>
          </h2>
          <p>
            La Angélica demuestra lo que pasa cuando el diseño acompaña de verdad:
            las piezas cambian, el proyecto crece y la identidad sigue teniendo
            sentido.
          </p>
        </div>
      </section>

      <section className="next-project la-next">
        <p>¿Construimos una historia así?</p>
        <h2>
          Para crear,
          <br />
          hay que <em>creer.</em>
        </h2>
        <a href="/#contacto">
          Contame tu proyecto <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="case-footer">
        <a href="/" aria-label="Jotape Creativo, inicio">
          <img src="/brand/logo-horizontal-white.svg" alt="Jotape Creativo" />
        </a>
        <p>Diseño hecho en Concordia · Entre Ríos</p>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
