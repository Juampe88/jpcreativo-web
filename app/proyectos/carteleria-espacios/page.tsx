import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cartelería, señalética y espacios",
  description:
    "Diseño, producción e instalación de cartelería, corpóreos, señalética, gráfica aplicada e iluminación LED.",
  alternates: { canonical: "/proyectos/carteleria-espacios" },
};

const whatsapp =
  "https://wa.me/5493412123601?text=Hola%20Juampe%2C%20vi%20el%20apartado%20de%20carteler%C3%ADa%20y%20quiero%20contarte%20un%20proyecto.";

export default function CarteleriaEspaciosPage() {
  return (
    <main className="signage-page">
      <header className="case-header signage-header">
        <Link className="case-back" href="/#portfolio">
          <span aria-hidden="true">←</span> Proyectos
        </Link>
        <Link className="case-brand" href="/" aria-label="Jotape Creativo, inicio">
          <img src="/brand/logo-compact-color.svg" alt="Jotape Creativo" />
        </Link>
        <a className="case-contact" href={whatsapp} target="_blank" rel="noreferrer">
          Cotizar <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="signage-hero">
        <div className="signage-hero__copy">
          <p className="case-overline">Cartelería · Señalética · Producción</p>
          <h1>
            De la idea
            <em>al espacio.</em>
          </h1>
          <p>
            Diseño y producción de piezas que hacen visible una marca en el
            mundo real: corpóreos, iluminación, gráfica aplicada e instalación.
          </p>
        </div>
        <figure className="signage-hero__image">
          <img src="/projects/carteleria/hero.webp" alt="Cartel corpóreo iluminado de Marilyn Shop" />
          <figcaption>Frente acrílico · Iluminación LED</figcaption>
        </figure>
      </section>

      <section className="signage-intro">
        <p className="case-overline">Diseño que se construye</p>
        <h2>
          No termina en<br />
          <em>la pantalla.</em>
        </h2>
        <div>
          <p>
            Cada trabajo se piensa desde la identidad y se resuelve hasta su
            forma final: escala, materialidad, luz, lectura, fabricación y
            montaje.
          </p>
          <p>
            El resultado es una pieza coherente con la marca y preparada para
            convivir con la arquitectura, el tránsito y el uso cotidiano.
          </p>
        </div>
        <dl className="signage-materials">
          <div><dt>Volumen</dt><dd>Polifán · PETG 3D</dd></div>
          <div><dt>Frentes</dt><dd>Acrílico · Vinilo</dd></div>
          <div><dt>Estructura</dt><dd>Fleje de aluminio</dd></div>
          <div><dt>Luz</dt><dd>LED interior</dd></div>
          <div><dt>Entrega</dt><dd>Producción · Instalación</dd></div>
        </dl>
      </section>

      <section className="signage-dark">
        <div className="signage-section-title">
          <p className="case-overline">01 · Corpóreos e iluminación</p>
          <h2>Presencia de día.<br /><em>Carácter de noche.</em></h2>
          <p>
            Letras, cajas y marcas corpóreas resueltas según cada fachada,
            interior y distancia de lectura.
          </p>
        </div>
        <div className="signage-facade-grid">
          <figure className="signage-facade-grid__large">
            <img src="/projects/carteleria/maranhao.webp" alt="Cartel circular iluminado de Maranhão" />
            <figcaption>Caja circular · Frente acrílico</figcaption>
          </figure>
          <figure>
            <img src="/projects/carteleria/awa.webp" alt="Letras corpóreas iluminadas de AWA" />
            <figcaption>Letras corpóreas · Luz interior</figcaption>
          </figure>
          <figure>
            <img src="/projects/carteleria/gromet.webp" alt="Letras corpóreas iluminadas de Gromet" />
            <figcaption>Fachada · Sistema corpóreo</figcaption>
          </figure>
        </div>
      </section>

      <section className="signage-process">
        <div className="signage-section-title signage-section-title--ink">
          <p className="case-overline">02 · Taller e instalación</p>
          <h2>Del detalle<br /><em>a la escala.</em></h2>
          <p>
            Prototipado, fabricación y montaje forman parte del mismo proceso
            de diseño.
          </p>
        </div>
        <div className="signage-process-grid">
          <figure className="signage-process-grid__object">
            <img src="/projects/carteleria/taller-letra.webp" alt="Letra corpórea iluminada en taller" />
            <figcaption>Prueba de luz · Pieza individual</figcaption>
          </figure>
          <figure className="signage-process-grid__install">
            <img src="/projects/carteleria/instalacion.webp" alt="Instalación de cartel corpóreo en fachada" />
            <figcaption>Montaje en fachada</figcaption>
          </figure>
          <figure className="signage-process-grid__ayui">
            <img src="/projects/carteleria/ayui-corporeo.webp" alt="Cartel corpóreo de Colonia Ayuí" />
            <figcaption>Identidad corpórea · Colonia Ayuí</figcaption>
          </figure>
        </div>
      </section>

      <section className="signage-applied">
        <div className="signage-section-title">
          <p className="case-overline">03 · Gráfica aplicada</p>
          <h2>Marcas que ocupan<br /><em>su lugar.</em></h2>
          <p>
            Murales, stands, banners, rotulación y señalética para convertir
            superficies y soportes en parte del sistema visual.
          </p>
        </div>
        <div className="signage-applied-grid">
          <figure className="signage-applied-grid__mural">
            <img src="/projects/carteleria/tokyo-mural.webp" alt="Mural en vinilo mate para Tokyo Drugstore" />
            <figcaption>Tokyo Drugstore · Mural en vinilo mate</figcaption>
          </figure>
          <figure>
            <img src="/projects/carteleria/yuqueri-stand.webp" alt="Stand diseñado para Yuquerí Servicios" />
            <figcaption>Yuquerí Servicios · Diseño de stand</figcaption>
          </figure>
          <figure>
            <img src="/projects/carteleria/srpancho-banner.webp" alt="Banner y portabanner de Sr. Pancho Gourmet" />
            <figcaption>Sr. Pancho · Banner doble tensor</figcaption>
          </figure>
          <figure>
            <img src="/projects/carteleria/senaletica.webp" alt="Señalética iluminada de La Angélica" />
            <figcaption>La Angélica · Señalética LED</figcaption>
          </figure>
          <figure>
            <img src="/projects/carteleria/rotulacion.webp" alt="Vehículo rotulado de Colonia Ayuí" />
            <figcaption>Colonia Ayuí · Rotulación vehicular</figcaption>
          </figure>
        </div>
      </section>

      <section className="signage-cta">
        <p className="case-overline">¿Tu marca necesita ocupar espacio?</p>
        <h2>La pensamos.<br /><em>La hacemos visible.</em></h2>
        <div>
          <a href={whatsapp} target="_blank" rel="noreferrer">Escribir por WhatsApp ↗</a>
          <a href="mailto:juanpedrocarbonara@gmail.com">Enviar un email ↗</a>
        </div>
      </section>

      <footer className="signage-footer">
        <img src="/brand/logo-horizontal-white.svg" alt="Jotape Creativo" />
        <p>Diseño, producción e instalación · Concordia, Entre Ríos</p>
        <a href="https://www.instagram.com/jotape.creativo/" target="_blank" rel="noreferrer">@jotape.creativo ↗</a>
      </footer>
    </main>
  );
}
