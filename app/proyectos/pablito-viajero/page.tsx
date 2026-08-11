import type { Metadata } from "next";
import Link from "next/link";

const ASSET = "/projects/editorial";

export const metadata: Metadata = {
  title: "Pablito Viajero — Diseño editorial",
  description:
    "Diseño de tapa, sistema editorial, maquetación y preparación para imprenta de los libros de Pablito Viajero.",
};

export default function PablitoViajero() {
  return (
    <main className="editorial-page" id="top">
      <header className="case-header editorial-header">
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

      <section className="editorial-hero">
        <div className="editorial-hero__copy">
          <p className="case-overline">Proyecto seleccionado · Diseño editorial</p>
          <h1>
            Historias que
            <em> viajan.</em>
          </h1>
          <p>
            Acompañar un proyecto desde el kilómetro cero también es darle forma
            a cada página, cada ritmo y cada pausa.
          </p>
          <div className="case-tags" aria-label="Áreas del proyecto">
            <span>Dirección de arte</span>
            <span>Diseño de tapa</span>
            <span>Maquetación</span>
            <span>Preprensa</span>
          </div>
        </div>
        <figure className="editorial-hero__image">
          <img
            src={`${ASSET}/book-scene.webp`}
            alt="Libro Vuelta a la Argentina en Gilera, cerrado y abierto sobre una mesa"
          />
          <figcaption>Vuelta a la Argentina en Gilera · Pablito Viajero</figcaption>
        </figure>
        <span className="editorial-hero__index" aria-hidden="true">ED</span>
      </section>

      <section className="editorial-intro">
        <div>
          <p className="case-overline">Desde el comienzo</p>
          <h2>
            Diseñar el libro también fue
            <em> acompañar el viaje.</em>
          </h2>
        </div>
        <div className="editorial-intro__copy">
          <p>
            Jotape está junto a Pablito Viajero desde el momento cero. El trabajo
            editorial convierte sus recorridos, fotografías y relatos en una
            experiencia de lectura con identidad propia.
          </p>
          <p>
            La tarea abarca el sistema completo: concepto visual, tapa,
            arquitectura de página, maquetación de cada edición y archivos
            finales listos para imprenta.
          </p>
        </div>
        <dl className="editorial-facts">
          <div><dt>Proyecto</dt><dd>Pablito Viajero</dd></div>
          <div><dt>Formato</dt><dd>Libro impreso</dd></div>
          <div><dt>Alcance</dt><dd>Diseño integral</dd></div>
          <div><dt>Continuidad</dt><dd>Desde el km 0</dd></div>
        </dl>
      </section>

      <section className="editorial-spread">
        <header className="editorial-section-heading">
          <p className="case-overline">Ritmo editorial</p>
          <h2>
            El viaje encuentra
            <em> su forma.</em>
          </h2>
          <p>
            Mapas, fotografías y relato conviven en una grilla flexible que
            orienta sin quitarle espontaneidad a la aventura.
          </p>
        </header>
        <figure className="editorial-spread__stage">
          <img
            src={`${ASSET}/spread-map.webp`}
            alt="Doble página del libro con mapa de la primera etapa y fotografías del viaje"
          />
          <figcaption>Interior · Primera etapa: Sur</figcaption>
        </figure>
      </section>

      <section className="editorial-cover">
        <figure className="editorial-cover__art">
          <img
            src={`${ASSET}/cover-clean.webp`}
            alt="Tapa y contratapa de Vuelta a la Argentina en Gilera, sin marcas de corte"
          />
          <figcaption>Tapa completa · arte final limpio</figcaption>
        </figure>
        <div className="editorial-cover__copy">
          <p className="case-overline">Tapa y sistema</p>
          <h2>
            Una identidad con
            <em> motor propio.</em>
          </h2>
          <p>
            La tapa concentra el carácter documental y afectivo del viaje. La
            preparación final respeta el diseño original y elimina del montaje
            cualquier marca técnica que no deba llegar a la pieza exhibida.
          </p>
          <blockquote>
            “Para crear, hay que creer.”
          </blockquote>
        </div>
      </section>

      <section className="editorial-people">
        <header className="editorial-section-heading editorial-section-heading--light">
          <p className="case-overline">Una historia compartida</p>
          <h2>
            Detrás del libro hay
            <em> personas.</em>
          </h2>
          <p>
            El vínculo sostenido en el tiempo es parte del proyecto: escuchar,
            editar y construir juntos cada nueva edición.
          </p>
        </header>
        <div className="editorial-people__grid">
          <figure className="editorial-people__main">
            <img
              src={`${ASSET}/pablo-gilera.webp`}
              alt="Juampe junto a Pablito Viajero y su compañera frente a una moto Gilera"
            />
            <figcaption>Jotape + Pablito Viajero · el proyecto en primera persona</figcaption>
          </figure>
          <figure>
            <img
              src={`${ASSET}/team-selfie.webp`}
              alt="Pablito Viajero, su compañera y Juampe en una fotografía compartida"
            />
            <figcaption>Una colaboración que sigue sumando capítulos</figcaption>
          </figure>
        </div>
      </section>

      <section className="editorial-next">
        <p className="case-overline">Diseño editorial</p>
        <h2>
          ¿Tenés una historia
          <em> para publicar?</em>
        </h2>
        <div>
          <Link href="/#contacto">Contame el proyecto ↗</Link>
          <Link href="/#portfolio">Ver más trabajos</Link>
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
