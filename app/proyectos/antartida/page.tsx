import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Antártida — Identidad para helados artesanales",
  description:
    "Rediseño integral de Antártida, una marca familiar de helados artesanales nacida en 1960 y recuperada por Arturo y Lucre desde su receta original.",
  alternates: { canonical: "/proyectos/antartida" },
};

export default function AntartidaPage() {
  return (
    <main className="antartida-page" id="top">
      <header className="case-header antartida-header">
        <Link className="case-brand" href="/" aria-label="Jotape Creativo, inicio">
          <img src="/brand/logo-compact-color.svg" alt="Jotape Creativo" />
        </Link>
        <Link className="case-back" href="/#portfolio">
          <span aria-hidden="true">←</span> Todos los proyectos
        </Link>
        <Link className="case-contact" href="/#contacto">
          Hablemos <span aria-hidden="true">↗</span>
        </Link>
      </header>

      <section className="antartida-hero">
        <div className="antartida-hero__copy">
          <p className="case-overline">Identidad integral · Helados artesanales</p>
          <img
            className="antartida-hero__logo"
            src="/projects/antartida/logo-reverse.svg"
            alt="Antártida, helados artesanales"
          />
          <h1>
            Sabores con
            <em> historia.</em>
          </h1>
          <p>
            Una marca familiar nacida en 1960 vuelve de la mano de Arturo y Lucre,
            con la receta original y una identidad reconstruida desde cero.
          </p>
          <div className="case-tags" aria-label="Áreas del proyecto">
            <span>Identidad</span>
            <span>Packaging</span>
            <span>Cartelería</span>
            <span>Aplicaciones</span>
          </div>
        </div>
        <figure className="antartida-hero__visual">
          <span className="antartida-hero__year">DESDE 1960</span>
          <img
            src="/projects/antartida/cup.webp"
            alt="Aplicación de la identidad Antártida en una tarrina de helado"
          />
          <figcaption>Identidad aplicada al momento de consumo.</figcaption>
        </figure>
      </section>

      <section className="antartida-story">
        <div className="antartida-story__title">
          <p className="case-overline">El punto de partida</p>
          <h2>
            Volver al origen sin quedarse
            <em> en el pasado.</em>
          </h2>
        </div>
        <div className="antartida-story__copy">
          <p>
            Antártida había quedado en pausa durante varios años. El regreso no
            consistía solamente en recuperar un nombre: había que hacer visible una
            historia familiar y ponerla nuevamente en movimiento.
          </p>
          <p>
            El nuevo sistema parte de una “A” geométrica, clara y reconocible. El
            azul profundo aporta oficio y confianza; el dorado señala el valor de
            la receta original y funciona como acento en todas las escalas.
          </p>
        </div>
        <dl className="antartida-facts">
          <div><dt>Origen</dt><dd>Marca familiar</dd></div>
          <div><dt>Desde</dt><dd>1960</dd></div>
          <div><dt>Producto</dt><dd>Helado artesanal</dd></div>
          <div><dt>Alcance</dt><dd>Identidad integral</dd></div>
        </dl>
      </section>

      <section className="antartida-identity">
        <div className="antartida-identity__intro">
          <div>
            <p className="case-overline">La nueva identidad</p>
            <h2>
              Una marca simple,
              <em> propia y flexible.</em>
            </h2>
          </div>
          <p>
            La inicial se convierte en emblema, firma y patrón. Puede vivir sola o
            acompañar el nombre completo, responder en positivo o negativo y pasar
            del vidrio a un corpóreo iluminado sin perder carácter.
          </p>
        </div>
        <div className="antartida-identity__system">
          <figure className="antartida-identity__mark">
            <img src="/projects/antartida/mark-color.svg" alt="Símbolo de Antártida" />
            <figcaption>Símbolo principal</figcaption>
          </figure>
          <figure className="antartida-identity__wordmark">
            <img src="/projects/antartida/logo-reverse.svg" alt="Logotipo completo de Antártida" />
            <figcaption>Versión negativa</figcaption>
          </figure>
        </div>
        <div className="antartida-identity__places">
          <figure>
            <img
              src="/projects/antartida/storefront.webp"
              alt="Identidad Antártida aplicada en la vidriera del local"
            />
            <figcaption>Vidriera · presencia urbana</figcaption>
          </figure>
          <figure>
            <img
              src="/projects/antartida/sign.webp"
              alt="Cartel luminoso con la identidad Antártida"
            />
            <figcaption>Cartel corpóreo · luz y volumen</figcaption>
          </figure>
        </div>
      </section>

      <section className="antartida-touchpoints">
        <header>
          <p className="case-overline">Un lenguaje en circulación</p>
          <h2>
            La marca sale
            <em> del mostrador.</em>
          </h2>
          <p>
            Cada pieza conserva la misma jerarquía, paleta y tono: desde una tarjeta
            hasta el menú o el sistema de exhibición en la calle.
          </p>
        </header>
        <div className="antartida-touchpoints__grid">
          <figure className="antartida-touchpoints__real">
            <img
              src="/projects/antartida/stand-real.webp"
              alt="Flybanners y portabanner de Antártida instalados"
            />
            <figcaption>Piezas producidas e instaladas</figcaption>
          </figure>
          <figure>
            <img
              src="/projects/antartida/business-card.webp"
              alt="Tarjeta personal de Antártida"
            />
            <figcaption>Papelería comercial</figcaption>
          </figure>
          <figure>
            <img
              src="/projects/antartida/menu.webp"
              alt="Carta de sabores de Antártida"
            />
            <figcaption>Menú y toma de pedidos</figcaption>
          </figure>
          <figure className="antartida-touchpoints__filler">
            <img
              src="/projects/antartida/product.webp"
              alt="Helado artesanal Antártida"
            />
          </figure>
          <figure className="antartida-touchpoints__filler">
            <img
              src="/projects/antartida/vegan-pack.webp"
              alt="Presentación de helado vegano Antártida"
            />
          </figure>
        </div>
      </section>

      <section className="antartida-applications">
        <div className="antartida-applications__copy">
          <p className="case-overline">El sistema, en todas las escalas</p>
          <h2>
            Una identidad lista
            <em> para trabajar.</em>
          </h2>
          <p>
            El diseño se proyectó sobre las piezas que sostienen la experiencia
            cotidiana: indumentaria, equipamiento, puntos de venta y soportes para
            ferias o acciones comerciales.
          </p>
        </div>
        <div className="antartida-applications__grid">
          <figure className="antartida-applications__freezer">
            <img src="/projects/antartida/freezer.webp" alt="Freezer ploteado con la identidad Antártida" />
            <figcaption>Equipamiento de frío</figcaption>
          </figure>
          <figure className="antartida-applications__apron">
            <img src="/projects/antartida/apron.webp" alt="Delantal de trabajo Antártida" />
            <figcaption>Indumentaria de trabajo</figcaption>
          </figure>
          <figure className="antartida-applications__uniform">
            <img src="/projects/antartida/uniform-front.webp" alt="Frente del uniforme Antártida" />
            <figcaption>Uniforme · frente</figcaption>
          </figure>
          <figure className="antartida-applications__uniform">
            <img src="/projects/antartida/uniform-back.webp" alt="Dorso del uniforme Antártida" />
            <figcaption>Uniforme · dorso</figcaption>
          </figure>
          <figure className="antartida-applications__stand">
            <img src="/projects/antartida/stand-concept.webp" alt="Stand comercial Antártida" />
            <figcaption>Punto de venta portátil</figcaption>
          </figure>
        </div>
      </section>

      <section className="antartida-vegan">
        <div className="antartida-vegan__copy">
          <p className="case-overline">Extensión de línea</p>
          <h2>
            Una variante nueva,
            <em> el mismo ADN.</em>
          </h2>
          <p>
            La línea 100% vegana suma verde y un gesto vegetal a la “A”, pero
            conserva la arquitectura visual de la marca madre. Así puede señalar
            una propuesta diferente sin empezar de nuevo.
          </p>
        </div>
        <div className="antartida-vegan__gallery">
          <figure className="antartida-vegan__pack">
            <img src="/projects/antartida/vegan-pack.webp" alt="Helado vegano de palta Antártida" />
            <figcaption>Packaging de producto</figcaption>
          </figure>
          <figure>
            <img src="/projects/antartida/vegan-system.webp" alt="Sistema visual de Antártida y su línea vegana" />
            <figcaption>Marca madre + extensión vegana</figcaption>
          </figure>
          <figure>
            <img src="/projects/antartida/product.webp" alt="Helado artesanal Antártida" />
            <figcaption>Producto real</figcaption>
          </figure>
        </div>
      </section>

      <section className="antartida-closing">
        <img src="/projects/antartida/cup.webp" alt="" />
        <div className="antartida-closing__copy">
          <p className="case-overline">Antártida · Sabores con historia</p>
          <h2>
            El futuro también
            <em> puede conservar una receta.</em>
          </h2>
          <p>
            Una identidad nueva para hacer visible lo que nunca cambió:
            el oficio, la familia y las ganas de volver.
          </p>
          <div className="antartida-closing__links">
            <Link href="/#contacto">Contame tu proyecto ↗</Link>
            <Link href="/#portfolio">Ver más trabajos</Link>
          </div>
        </div>
      </section>

      <footer className="editorial-footer">
        <Link className="brand brand--footer" href="/" aria-label="Jotape Creativo, inicio">
          <img className="brand-logo brand-logo--footer" src="/brand/logo-horizontal-white.svg" alt="Jotape Creativo" />
        </Link>
        <p>Diseño gráfico · Concordia, Entre Ríos</p>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
