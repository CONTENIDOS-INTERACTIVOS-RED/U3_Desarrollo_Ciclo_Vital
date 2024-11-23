<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Desarrollo cognitivo y del lenguaje en niños y adolescentes'" :subTitulo="'1. Desarrollo cognitivo y del lenguaje en niños y adolescentes'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-10
        p.mb-0 Esta unidad inicia con una exploración sobre el desarrollo cognitivo y del lenguaje, analizando ambos aspectos desde diversas teorías y principios fundamentales para su comprensión. El desarrollo cognitivo y del lenguaje en niños y adolescentes es un proceso clave que afecta su capacidad para aprender, comunicarse y relacionarse. Durante esta etapa, se producen cambios significativos en la forma en que los jóvenes piensan, comprenden y emplean el lenguaje.
      .d-none.d-xl-block.col-xl-2
        img(src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')


    .row.mb-5
      .col-12.col-md-6.col-xl-4.p-4.bg-azul.d-flex.flex-column.justify-content-between
        p.mb-0.px-2 Una pregunta esencial en este análisis es: <strong>¿qué es el desarrollo cognitivo?</strong> Este término abarca el crecimiento de habilidades mentales como la percepción, la atención, la memoria, el lenguaje, el pensamiento y la resolución de problemas.
        img.ms-auto(style="height: 80px ; width: 80px" src='@/assets/curso/unidad/img-4.svg', alt='Texto que describa la imagen')
      .col-12.col-md-6.col-xl-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
      .col-12.col-md-6.col-xl-4.p-4.bg-gris
        p.mb-0.px-2 Es el proceso mediante el cual aprendemos a pensar, comprender el mundo y procesar información. Como indica Bruner (2018), “el desarrollo cognitivo es un proceso tanto de afuera hacia adentro como de adentro hacia afuera” (p. 59). Este proceso inicia en la infancia y continúa hasta la adolescencia, pasando por diferentes etapas de desarrollo.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-amarillo.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-6.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.mb-0 El <strong>lenguaje juega un papel central</strong> en el desarrollo cognitivo. Desde los primeros años, <strong>los niños imitan sonidos y palabras</strong>, construyendo su vocabulario. Con el tiempo, sus <strong>habilidades lingüísticas</strong> se perfeccionan, permitiéndoles expresar pensamientos y sentimientos con mayor claridad. El <strong>desarrollo cognitivo</strong> y del lenguaje están interrelacionados y la interacción social es crucial. A través de conversaciones con adultos y pares, los jóvenes amplían su vocabulario y aprenden a usar el lenguaje en diversos contextos.

    p.mb-4 Para quienes trabajan con esta población, comprender estos procesos es esencial, pues permite crear estrategias educativas adecuadas que promuevan un ambiente de aprendizaje positivo y enriquecedor. Este conocimiento se profundiza con el estudio de la teoría de Jean Piaget sobre el desarrollo cognitivo: 

    .row.mb-5
      .col-12.col-lg-7
        AcordionA(tipo="b")
          .div(titulo="Etapas del desarrollo")
            p Piaget describe cuatro etapas del desarrollo cognitivo: sensoriomotora, preoperacional, de operaciones concretas y de operaciones formales. Cada etapa representa un cambio cualitativo en la manera en que la mente procesa la información.
          .div(titulo="Interacción con el entorno")
            p Según Piaget, el desarrollo cognitivo resulta de la interacción entre la maduración biológica y las experiencias del entorno. Esta interacción facilita la adaptación y reorganización de las estructuras cognitivas.
          .div(titulo="Funciones invariantes")
            p Piaget identificó funciones constantes, como la adaptación y la organización, que permanecen a lo largo de la vida. Estas funciones permiten al individuo adaptarse y entender su entorno.
          .div(titulo="Estructuras cognitivas variantes")
            p A medida que el niño crece, sus estructuras cognitivas evolucionan, permitiéndole procesar información de manera más compleja. Estas estructuras son las que distinguen el pensamiento infantil del pensamiento adulto.
      .col-12.col-lg-5.d-none.d-lg-block
        img.-mt-18px(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

    p.mb-4 En el desarrollo cognitivo, Piaget describe los esquemas como plantillas mentales que utilizamos para interactuar con el mundo. Estos esquemas pueden ejecutarse de diversas formas, como empujar un objeto con la mano o una barra. A medida que los individuos maduran, sus esquemas se vuelven más complejos y se combinan en estructuras cognitivas: 

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-amarillo.p-4(data-aos="fade-left")
        div.d-flex.mb-4
            i.fas.fa-baby.me-2.mt-1
            p.mb-0 <strong>Esquema.</strong> Plantilla mental que permite realizar acciones repetitivas, como empujar un objeto.
  
        div.d-flex
          i.fas.fa-baby.me-2.mt-1
          p.mb-0 <strong>Estructura.</strong> Conjunto de esquemas organizados que permite una comprensión más compleja del entorno.
    p.mb-4 Si consideramos a los esquemas como ladrillos de un edificio, las estructuras serían el edificio completo. Una estructura permite al individuo actuar de forma más eficaz y organizada.

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-azul-claro.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-9.svg', alt='Texto que describa la imagen')
          p.pe-xl-3.mb-0 Por ejemplo, el concepto de <strong>"número"</strong> es una estructura que se construye a partir de esquemas simples, como contar objetos.

    .bg-fondo-1.bg-full-width
      div.px-5.pb-md-3.py-4
    
        p.mb-4 La <strong>organización</strong> es la <strong>habilidad de coordinar y relacionar distintos esquemas y estructuras,</strong> formando un sistema coherente de conocimiento, similar a armar un rompecabezas donde cada pieza se conecta con otra. 

        .row.mb-5
          .col-12.col-xl-8.d-flex.flex-column.justify-content-center.bg-azul-1.p-4.p-xxl-5(data-aos="fade-right")
            div.d-flex.mb-4
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0  <strong>Organización.</strong> Coordinación de esquemas y estructuras para construir un sistema de conocimiento.
            div.d-flex.mb-0
              img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
              p.mb-0  <strong>Adaptación.</strong> Ajuste al entorno que se realiza mediante la asimilación y la acomodación.
          .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
            img.h-100(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')

        p.mb-4 En el proceso de adaptación, <strong>asimilación</strong> implica agregar nueva información a los esquemas ya existentes, como añadir una pieza a un rompecabezas que ya está parcialmente armado. Por otro lado, <strong>acomodación</strong> requiere modificar los esquemas previos para incluir información nueva, similar a ajustar una pieza de un rompecabezas para que encaje mejor:

        .row.mb-4
          .col-10.col-md-6.mb-4.mb-md-0.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
              div.mb-4.bg-white
                p.text-bold.text-center Asimilación
                p.text-small.px-4.text-center.pb-2 Incorporar la palabra "perro" al esquema de "animal".
          .col-10.col-md-6.mb-4.mb-md-0.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
              div.mb-4.bg-white
                p.text-bold.text-center Acomodación
                p.text-small.px-4.text-center.pb-2 Ajustar el esquema de "animal" al ver un gato por primera vez y notar diferencias.

    p.mb-4(data-aos="flip-up") Finalmente, el equilibrio representa el estado ideal en el que asimilación y acomodación están en balance. Cuando el equilibrio se interrumpe, surge un desequilibrio que impulsa al individuo a restablecer el balance mediante ajustes cognitivos, lo que facilita una comprensión cada vez más avanzada del entorno.


    .tarjeta.box-shadow.p-3.mb-5(data-aos="fade-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/link-icon-pill.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-3 Las Teorías de Piaget y de Vygotsky. 
              p.text-small Para profundizar en este tema, se sugiere leer sobre la biografía de Jean Piaget. Conocer su vida ayuda a comprender cómo su contexto y experiencias influyeron en su enfoque sobre el desarrollo infantil, así como la evolución de sus ideas y su impacto en las prácticas pedagógicas, permitiendo construir un marco teórico propio.
            .col-sm-auto
              a.download-btn.boton.color-primario(href="https://cmapspublic2.ihmc.us/rid=1TL67NQ9X-4HCHW6-3M8Q/teorias_desarrollo_cognitivo_0.pdf " target="_blank")
                span.text-small Ir al sitio
                i.fas.fa-arrow-right

    p.mb-4(data-aos="flip-up") Una vez comprendidos estos principios, continuaremos con lo que este pionero describe como las cuatro grandes etapas del desarrollo cognitivo. Cada etapa representa una forma particular de entender el mundo, y el tránsito de una a otra implica cambios cualitativos en las estructuras mentales.

    .tarjeta.box-shadow.p-3.mb-5(data-aos="fade-down")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/video-icon-pill.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-3 La Teoría del Desarrollo Cognitivo de Piaget
              p.text-small A continuación, se invita a explorar el siguiente video, que presenta una descripción detallada de las etapas del desarrollo cognitivo propuestas por Jean Piaget.
            .col-sm-auto
              a.download-btn.boton.color-primario(href="https://youtu.be/yYFhPO5pArc?si=v7Zl79k5IbWQCzfK " target="_blank")
                span.text-small Ver video
                i.fas.fa-arrow-right

    p.mb-5(data-aos="flip-down") Después de ver el video, <strong>¿qué aspectos de la teoría de Piaget le resultaron más interesantes?</strong> Para complementar el contenido presentado, a continuación se ofrece un cuadro comparativo basado en Piaget (1976) que destaca las principales características de cada etapa del desarrollo cognitivo: 

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="18.5%" y="56%" numero="+")
        .h5.mb-2 Sensoriomotora 0-2 años
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Coordinación de esquemas sensoriomotores.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 El bebé conoce el mundo a través de sus sentidos y acciones.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Desarrolla el concepto de objeto permanente: entiende que los objetos existen incluso cuando no los ve.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Adquiere la capacidad de coordinar sus acciones para alcanzar objetivos.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Desarrolla la noción de causalidad (por ejemplo, si agita un sonajero, este hace ruido).
      .tarjeta.bg-white.p-4(x="36.5%" y="19%" numero="+")
        .h5.mb-2 Preoperacional 2-7 años
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Pensamiento egocéntrico. 
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Uso de símbolos (lenguaje, juego simbólico). <br>Intuición en lugar de lógica.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Dificultad para comprender la conservación.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Creen que todos ven el mundo desde su misma perspectiva.
      .tarjeta.bg-white.p-4(x="63.5%" y="19%" numero="+")
        .h5.mb-2 Operaciones concretas 11 años
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Pensamiento lógico aplicado a situaciones concretas. 
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Comprensión de la conservación.  Clasificación y seriación.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Operaciones mentales reversibles.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Comienza a comprender las relaciones lógicas entre las cosas.
      .tarjeta.bg-white.p-4(x="81.5%" y="56%" numero="+")
        .h5.mb-2 Operaciones formales 12 años en adelante
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Pensamiento abstracto e hipotético-deductivo.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Razonamiento científico.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 Capacidad para resolver problemas complejos.
        div.d-flex.mb-4
          img.mt-2.me-2.d-flex.align-self-start(style="width: 15px" src='@/assets/template/arrow.svg', alt='Texto que describa la imagen')
          p.mb-0 El adolescente es capaz de pensar de manera abstracta, realizar experimentos mentales y considerar múltiples posibilidades. Puede razonar sobre conceptos como la justicia, la libertad y el amor.

    p.mb-4 El conocimiento no se adquiere de manera pasiva, sino que se construye activamente mediante la interacción con el entorno. Según Piaget (2007), “los niños no adquieren conocimiento de los hechos que les cuentan ni a través de las sensaciones o percepciones… Los niños aprenden haciendo” (p. 159). Esto implica que la información del mundo no se recibe directamente; en cambio, es interpretada y adquiere sentido a través de estructuras mentales que los individuos desarrollan y refinan a lo largo de su vida.

    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.col-xxl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Biografía de Jean Piaget
          p.mb-5 Para profundizar en este tema, se sugiere leer sobre la biografía de Jean Piaget. Conocer su vida ayuda a comprender cómo su contexto y experiencias influyeron en su enfoque sobre el desarrollo infantil, así como la evolución de sus ideas y su impacto en las prácticas pedagógicas, permitiendo construir un marco teórico propio.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" href="https://www.biografiasyvidas.com/biografia/p/piaget.htm " target="_blank")
            img.h-100(style="width: 49px" src='@/assets/template/link-icon-square.png', alt='Texto que describa la imagen')
            p.my-auto.p-2.px-3.text-small <strong>Sitio web.</strong> Biografía de Jean Piaget

        .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img(src='@/assets/curso/unidad/piaget_3.png', alt='Texto que describa la imagen')
          figcaption.bg-white Imagen tomada de Fernández y Tamaro. (2004) 
          
    .tarjeta.box-shadow.p-3(data-aos="fade-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/pdf-icon-pill.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-bold.mb-3 ¿Sabía que el contexto social y cultural es clave en el aprendizaje?  
              p.text-small Lev Vygotsky planteó que los niños aprenden mejor a través de la interacción con otros, especialmente con adultos y compañeros más experimentados. Este documento explora su concepto de "Zona de Desarrollo Próximo" (ZDP) y muestra cómo el aprendizaje colaborativo y el rol del docente como facilitador son esenciales para el desarrollo cognitivo, transformando la educación actual.
            .col-sm-auto
              a.download-btn.boton.bg-morado.text-white(:href="obtenerLink('/downloads/Anexos_Enfoque sociocultural de Vygotsky y su impacto en el aprendizaje.pdf')")
                span.text-small Descargar
                i.fas.fa-arrow-right



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-img-1
  position: absolute
  max-width: none
  width: calc( 100% + 96px  )
  height: calc( 100% + 96px )
  left: -48px
  top: -48px
  inline-size: auto
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
