import type { Metadata } from "next";

const ASSET = "/projects/colonia-ayui";

export const metadata: Metadata = {
  title: "Colonia Ayuí — Identidad institucional",
  description:
    "Rediseño de identidad, sistema institucional, comunicación y aplicaciones para la Municipalidad de Colonia Ayuí.",
};

const departments = [
  ["accion-social", "Acción Social"],
  ["anaf", "ANAF"],
  ["catastro", "Catastro"],
  ["cdi", "CDI"],
  ["cultura-turismo", "Cultura y Turismo"],
  ["deportes", "Deportes"],
  ["educacion", "Educación"],
  ["produccion", "Producción"],
  ["rentas", "Rentas"],
  ["seguridad-higiene", "Seguridad e Higiene"],
  ["transito", "Tránsito"],
];

export default function ColoniaAyui() {
  return (
    <main className="case-page ayui-case" id="top">
      <header className="case-header ayui-header">
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

      <section className="ayui-hero">
        <div className="ayui-hero__copy">
          <p className="case-overline">Proyecto seleccionado · Identidad pública</p>
          <img
            className="ayui-hero__logo"
            src={`${ASSET}/logo-wordmark-tagline.svg`}
            alt="Colonia Ayuí, Tierra para quedarse"
          />
          <h1>
            Identidad para
            <em>un territorio.</em>
          </h1>
          <p>
            Una marca pública construida para representar paisaje, producción y
            comunidad; y para funcionar con claridad en cada área del municipio.
          </p>
          <div className="case-tags" aria-label="Áreas del proyecto">
            <span>Identidad</span>
            <span>Sistema institucional</span>
            <span>Campañas</span>
            <span>Producción</span>
          </div>
        </div>

        <div className="ayui-hero__mark" aria-hidden="true">
          <span className="ayui-hero__block ayui-hero__block--blue" />
          <span className="ayui-hero__block ayui-hero__block--green" />
          <span className="ayui-hero__block ayui-hero__block--yellow" />
          <span className="ayui-hero__block ayui-hero__block--orange" />
          <img src={`${ASSET}/shield-negative.svg`} alt="" />
          <b>AYUÍ</b>
        </div>
        <span className="ayui-hero__caption">Municipalidad de Colonia Ayuí · Entre Ríos</span>
      </section>

      <section className="ayui-intro">
        <div>
          <p className="case-overline">El desafío</p>
          <h2>
            Hacer visible una identidad
            <em> compartida.</em>
          </h2>
        </div>
        <div className="ayui-intro__copy">
          <p>
            El rediseño debía superar la idea de un logo aislado. La oportunidad
            era crear un lenguaje contemporáneo, cercano y flexible que pudiera
            ordenar la comunicación municipal sin borrar el carácter del lugar.
          </p>
          <p>
            El resultado es un sistema que reúne agricultura, agua, cítricos,
            arándanos y tierra en un escudo simple; una síntesis capaz de crecer
            desde una tarjeta hasta un vehículo o una intervención urbana.
          </p>
        </div>
        <dl className="ayui-facts">
          <div><dt>Cliente</dt><dd>Municipalidad de Colonia Ayuí</dd></div>
          <div><dt>Escala</dt><dd>Identidad institucional</dd></div>
          <div><dt>Sistema</dt><dd>Áreas municipales</dd></div>
          <div><dt>Alcance</dt><dd>Diseño + producción</dd></div>
        </dl>
      </section>

      <section className="ayui-construction">
        <header className="ayui-section-heading">
          <p className="case-overline">Construcción de marca</p>
          <h2>
            El paisaje convertido en
            <em> sistema.</em>
          </h2>
          <p>
            El escudo organiza signos reconocibles del territorio con una
            geometría directa, preparada para reproducirse en múltiples escalas.
          </p>
        </header>

        <div className="ayui-construction__grid">
          <figure className="ayui-sketch">
            <img src={`${ASSET}/sketch.webp`} alt="Boceto de construcción del escudo de Colonia Ayuí" />
            <figcaption>La síntesis antes del color</figcaption>
          </figure>
          <div className="ayui-shield-stage">
            <img src={`${ASSET}/shield-color.svg`} alt="Escudo color de Colonia Ayuí" />
            <span>Marca principal</span>
          </div>
        </div>

        <div className="ayui-symbols" aria-label="Significados del escudo">
          <article><i className="ayui-symbol ayui-symbol--water" /><strong>Agua</strong><span>Lago y paisaje</span></article>
          <article><i className="ayui-symbol ayui-symbol--fruit" /><strong>Producción</strong><span>Cítricos y arándanos</span></article>
          <article><i className="ayui-symbol ayui-symbol--land" /><strong>Tierra</strong><span>Campo y cultivo</span></article>
        </div>
      </section>

      <section className="ayui-palette">
        <div className="ayui-palette__copy">
          <p className="case-overline">Paleta territorial</p>
          <h2>
            Un color para cada parte del
            <em> paisaje.</em>
          </h2>
        </div>
        <div className="ayui-swatches">
          <article className="ayui-swatch ayui-swatch--blue"><span>Agua · lago · cielo</span><b>#48729C</b></article>
          <article className="ayui-swatch ayui-swatch--green"><span>Campo · hojas · naturaleza</span><b>#8DB24A</b></article>
          <article className="ayui-swatch ayui-swatch--yellow"><span>Cítricos · juventud</span><b>#E4A433</b></article>
          <article className="ayui-swatch ayui-swatch--orange"><span>Tierra · madera · pasión</span><b>#BC5930</b></article>
        </div>
      </section>

      <section className="ayui-architecture">
        <header className="ayui-section-heading ayui-section-heading--light">
          <p className="case-overline">Arquitectura institucional</p>
          <h2>
            Una voz.
            <em>Muchas áreas.</em>
          </h2>
          <p>
            El sistema identifica cada sector con la misma estructura,
            conservando jerarquía y consistencia en la comunicación cotidiana.
          </p>
        </header>
        <div className="ayui-departments">
          {departments.map(([slug, label], index) => (
            <figure key={slug}>
              <img src={`${ASSET}/sector-${slug}.webp`} alt={`Identidad del área ${label}`} />
              <figcaption>{String(index + 1).padStart(2, "0")} · {label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="ayui-concept">
        <header className="ayui-section-heading">
          <p className="case-overline">Aplicaciones conceptuales</p>
          <h2>
            Antes de producir,
            <em> probamos el sistema.</em>
          </h2>
          <p>
            Los mockups permitieron ensayar escala, contraste y convivencia de
            marca en indumentaria, objetos y piezas de comunicación.
          </p>
        </header>
        <div className="ayui-concept__grid">
          <figure className="ayui-concept__large">
            <img src={`${ASSET}/concept-tote.webp`} alt="Aplicación conceptual en remera y bolsa" />
            <figcaption>Concepto · Cultura y Turismo</figcaption>
          </figure>
          <figure>
            <img src={`${ASSET}/concept-notebook.webp`} alt="Aplicación conceptual en remera y anotador" />
            <figcaption>Concepto · Identidad institucional</figcaption>
          </figure>
          <figure>
            <img src={`${ASSET}/embroidery.webp`} alt="Escudo de Colonia Ayuí bordado en tela azul" />
            <figcaption>Adaptación monocromática</figcaption>
          </figure>
        </div>
      </section>

      <section className="ayui-rollups">
        <div className="ayui-rollups__copy">
          <p className="case-overline">Del montaje a la realidad</p>
          <h2>
            El mismo lenguaje,
            <em> fuera de pantalla.</em>
          </h2>
          <p>
            Cada soporte se pensó como parte de una familia. El diseño conceptual
            definió el sistema y la producción confirmó su presencia en escala real.
          </p>
        </div>
        <figure className="ayui-rollups__concept">
          <img src={`${ASSET}/rollup-concept.webp`} alt="Mockup conceptual de banner de Colonia Ayuí" />
          <figcaption>01 · Visualización previa</figcaption>
        </figure>
        <figure className="ayui-rollups__real">
          <img src={`${ASSET}/rollup-real.webp`} alt="Banners producidos e instalados" />
          <figcaption>02 · Pieza producida</figcaption>
        </figure>
      </section>

      <section className="ayui-movement">
        <header className="ayui-section-heading ayui-section-heading--light">
          <p className="case-overline">Identidad en movimiento</p>
          <h2>
            La marca sale a
            <em> la calle.</em>
          </h2>
          <p>
            Rotulación vehicular con criterios de lectura, seguridad y
            reconocimiento institucional.
          </p>
        </header>
        <div className="ayui-vans">
          <figure>
            <img src={`${ASSET}/van-transit.webp`} alt="Camioneta de Tránsito rotulada" />
            <figcaption>Dirección de Tránsito</figcaption>
          </figure>
          <figure>
            <img src={`${ASSET}/van-municipal.webp`} alt="Camioneta municipal rotulada" />
            <figcaption>Vehículo institucional</figcaption>
          </figure>
        </div>
      </section>

      <section className="ayui-community">
        <header className="ayui-section-heading">
          <p className="case-overline">Sistema aplicado</p>
          <h2>
            Diseño que acompaña la
            <em> vida pública.</em>
          </h2>
          <p>
            La identidad se adapta a educación ambiental, deporte y acciones
            comunitarias sin perder su carácter.
          </p>
        </header>
        <div className="ayui-community__grid">
          <figure className="ayui-community__bins">
            <img src={`${ASSET}/bins.webp`} alt="Cestos para separación de residuos rotulados" />
            <figcaption>Comunicación ambiental</figcaption>
          </figure>
          <figure className="ayui-community__shirt">
            <img src={`${ASSET}/sports-shirt.webp`} alt="Diseño de indumentaria deportiva de Colonia Ayuí" />
            <figcaption>Indumentaria deportiva · Aplicación conceptual</figcaption>
          </figure>
        </div>
      </section>

      <section className="ayui-social">
        <header className="ayui-section-heading ayui-section-heading--light">
          <p className="case-overline">Campañas y redes sociales</p>
          <h2>
            Detrás de cada historia hay
            <em> mucho diseño.</em>
          </h2>
          <p>
            El sistema institucional también organiza campañas: piezas pensadas
            para informar, convocar y sostener una identidad reconocible en redes.
          </p>
        </header>
        <div className="ayui-social__desk">
          <div className="ayui-social__note">
            <span>Un evento, miles de detalles.</span>
            <strong>La fiesta del<br />9 de Julio</strong>
            <i>Identidad · campaña · difusión</i>
          </div>
          <div className="ayui-social__stories">
            <figure>
              <img
                src={`${ASSET}/campaign-fiesta.webp`}
                alt="Campaña para la Fiesta del 9 de Julio, con piezas para redes sociales"
              />
              <figcaption>Campaña general · 5ª edición</figcaption>
            </figure>
            <figure>
              <img
                src={`${ASSET}/campaign-stories.webp`}
                alt="Historias de la Fiesta del 9 de Julio: emprendedores, animadores, mapa y programación"
              />
              <figcaption>Sistema de historias · Información y convocatoria</figcaption>
            </figure>
            <figure>
              <img
                src={`${ASSET}/campaign-process.webp`}
                alt="Proceso de diseño y aplicaciones de la campaña para la Fiesta del 9 de Julio"
              />
              <figcaption>Proceso y presentación de campaña</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="ayui-event">
        <div className="ayui-event__copy">
          <p className="case-overline">Producción especial</p>
          <h2>
            Una identidad capaz de
            <em> convertirse en espacio.</em>
          </h2>
          <p>
            Para el árbol de Navidad se diseñaron y produjeron piezas impresas
            directamente sobre PVC y una estrella corpórea con frente acrílico e
            iluminación LED interna.
          </p>
        </div>
        <figure className="ayui-event__night">
          <img src={`${ASSET}/tree-night.webp`} alt="Árbol navideño institucional iluminado" />
          <figcaption>Intervención instalada</figcaption>
        </figure>
        <figure className="ayui-event__star">
          <img src={`${ASSET}/star.webp`} alt="Estrella corpórea iluminada durante su producción" />
          <figcaption>Producción del corpóreo LED</figcaption>
        </figure>
        <figure className="ayui-event__day">
          <img src={`${ASSET}/tree-day.webp`} alt="Árbol navideño institucional durante el día" />
          <figcaption>Aplicaciones impresas sobre PVC</figcaption>
        </figure>
      </section>

      <section className="ayui-press">
        <header className="ayui-section-heading">
          <p className="case-overline">Escala institucional</p>
          <h2>
            Del archivo al
            <em> encuentro público.</em>
          </h2>
          <p>
            Diseño y producción de un fondo de prensa de gran formato, resuelto
            para convivir con banners y señalización en un mismo espacio.
          </p>
        </header>
        <div className="ayui-press__pair">
          <figure>
            <img src={`${ASSET}/press-concept.webp`} alt="Diseño conceptual del fondo de prensa" />
            <figcaption>Diseño del paño institucional</figcaption>
          </figure>
          <figure>
            <img src={`${ASSET}/press-real.webp`} alt="Fondo de prensa producido e instalado" />
            <figcaption>Producción e instalación</figcaption>
          </figure>
        </div>
      </section>

      <section className="ayui-closing">
        <img src={`${ASSET}/shield-negative.svg`} alt="" />
        <p className="case-overline">Resultado</p>
        <h2>
          Una marca pública no termina en el logo:
          <em> empieza ahí.</em>
        </h2>
        <p>
          Colonia Ayuí cuenta hoy con una identidad capaz de ordenar su
          comunicación, representar el territorio y crecer junto a la comunidad.
        </p>
        <a href="/#contacto">Construyamos tu sistema de marca <span aria-hidden="true">↗</span></a>
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
