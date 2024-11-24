<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 3. Desarrollo socioemocional y conductual en niños y adolescentes'" :subTitulo="'1. Teoría del desarrollo psicosocial de Erikson'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-azul-claro.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") En esta sección se explora el desarrollo emocional y conductual de niños y adolescentes y se explican las características principales de la teoría del desarrollo psicosocial de Erik Erikson (1950), destacando su relevancia en el ámbito educativo.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
    
    .bg-fondo-1.bg-full-width
      div.px-5.pb-md-3.py-4
        TabsC.mb-4
          .tabs-content.border.px-4.p-md-5.py-3(titulo="Desarrollo emocional y conductual", :iconUrl="require('@/assets/curso/unidad/img-4.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
                h4 Desarrollo emocional y conductual
                p(data-aos="fade-up") Proceso fundamental para el crecimiento integral del ser humano, ya que influye en su capacidad para formar relaciones saludables, manejar emociones y comportarse adecuadamente en diferentes contextos. Incluye habilidades como la empatía, la resolución de conflictos y la regulación emocional, esenciales para el bienestar psicológico y social.
          .tabs-content.border.px-4.p-md-5.py-3(titulo="Factores que influyen", :iconUrl="require('@/assets/curso/unidad/img-4.svg')")
            .row
              .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
              .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
                h4 Factores que influyen
                p(data-aos="fade-up") Presión social, expectativas académicas, intervención temprana y apoyo familiar, los cuales ayudan a los jóvenes a enfrentar los desafíos del desarrollo emocional y conductual.

        p.mb-4 En las unidades anteriores se exploraron las teorías de Jean Piaget (1920-1960) y Lev Vygotsky (1920-1930), quienes también abordaron el desarrollo infantil:

        .row.mb-0
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Jean Piaget
                p.text-small.px-4.text-center.pb-2 Destaca el desarrollo cognitivo mediante la construcción activa de la comprensión del mundo por parte de los niños a través de la interacción con su entorno.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Lev Vygotsky
                p.text-small.px-4.text-center.pb-2 Con su teoría sociocultural, resalta el papel del lenguaje y la interacción social en el desarrollo cognitivo y emocional.

    .row.mb-4
      .col-12.col-lg-6(data-aos="fade-right")
        p.mb-0 Además de los enfoques ya discutidos, otros teóricos han realizado aportes significativos en la comprensión del desarrollo socioemocional, cada uno centrado en aspectos fundamentales para entender cómo se forman las relaciones afectivas y la autoconciencia. Estos enfoques subrayan la importancia de los vínculos primarios y las habilidades emocionales en la construcción de una identidad saludable y resiliente.
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')

    TabsC.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="John Bowlby", :iconUrl="require('@/assets/curso/unidad/img-4.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 John Bowlby
            p(data-aos="fade-up") Apego <br>La teoría del apego de Bowlby sostiene que la necesidad de establecer vínculos afectivos sólidos y duraderos con los cuidadores primarios es crucial para el desarrollo socioemocional, ya que estos lazos proporcionan seguridad emocional y una base para la exploración y aprendizaje.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Howard Gardner", :iconUrl="require('@/assets/curso/unidad/img-4.svg')")
        .row
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Howard Gardner
            p(data-aos="fade-up") Inteligencias múltiples <br>Gardner introduce la inteligencia emocional como una de las múltiples inteligencias, destacando la autoconciencia y la empatía como habilidades esenciales en el desarrollo socioemocional, lo cual permite a los individuos comprender y gestionar sus propias emociones, así como conectarse emocionalmente con los demás.

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Teoría de Erik Erikson


    .row.mb-4
      .col-12.col-lg-8.col-xl-7
        p.mb-4 Erik Erikson fue un psicoanalista infantil formado bajo los principios del neurólogo y psiquiatra Sigmund Freud. Según Bordignon (2005), su principal trabajo fue extender los estudios del psicoanálisis del desarrollo psicosexual hacia el contexto del desarrollo psicosocial del ciclo de vida completo de la persona (p. 50).
        p.text-bold.mb-4 Etapas del desarrollo psicosocial de Erikson (primeras 5 etapas):
        .bg-azul-claro.p-4
          .d-flex.flex-row.mb-3(data-aos="fade-up")
            img.h-100(style="width: 60px" src='@/assets/curso/unidad/img-12.svg', alt='Texto que describa la imagen')
            p.bg-verde.ms-3.p-3.mb-0.text-white.w-100 <strong>Infancia</strong> (Confianza vs. Desconfianza)
          .d-flex.flex-row.mb-3(data-aos="fade-up")
            img.h-100(style="width: 60px" src='@/assets/curso/unidad/img-13.svg', alt='Texto que describa la imagen')
            p.bg-verde.ms-3.p-3.mb-0.text-white.w-100 <strong>Niñez temprana</strong> (Autonomía vs. Vergüenza y duda)
          .d-flex.flex-row.mb-3(data-aos="fade-up")
            img.h-100(style="width: 60px" src='@/assets/curso/unidad/img-14.svg', alt='Texto que describa la imagen')
            p.bg-verde.ms-3.p-3.mb-0.text-white.w-100 <strong> Edad preescolar</strong> (Iniciativa vs. Culpa)
          .d-flex.flex-row.mb-3(data-aos="fade-up")
            img.h-100(style="width: 60px" src='@/assets/curso/unidad/img-15.svg', alt='Texto que describa la imagen')
            p.bg-verde.ms-3.p-3.mb-0.text-white.w-100 <strong> Edad escolar</strong> (Laboriosidad vs. Inferioridad)
          .d-flex.flex-row.mb-3(data-aos="fade-up")
            img.h-100(style="width: 60px" src='@/assets/curso/unidad/img-16.svg', alt='Texto que describa la imagen')
            p.bg-verde.ms-3.p-3.mb-0.text-white.w-100 <strong> Adolescencia</strong> (Identidad vs. Confusión de roles)


      .col-12.col-lg-4.col-xl-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

    .row.bg-azul-1.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2 8 etapas del desarrollo de Erik Erikson
          p.mb-5 Hagamos una pausa y pensemos: todos hemos vivido momentos clave que nos han marcado. ¿Sabías que estos pueden estar relacionados con las etapas del desarrollo psicosocial? Te invitamos a ver este video, que explica cómo las teorías de Erikson ayudan a encontrar sentido en nuestra propia historia.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer.pe-lg-5(data-aos="zoom-in" href="https://www.youtube.com/watch?v=C8TBqpu4T2I " target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/video-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Video.</strong> Teorías de Erikson
             
    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Etapas del desarrollo socioemocional

    .row.mb-4
      .col-12.col-lg-8.col-xl-7
        p.mb-4 Además de los aportes de Erikson y Freud, otros teóricos han ampliado la comprensión del desarrollo socioemocional, abordando aspectos clave como los vínculos afectivos y la inteligencia emocional. John Bowlby destaca la importancia del apego seguro con los cuidadores primarios como base del bienestar emocional, mientras que Howard Gardner, con su teoría de las inteligencias múltiples, subraya la relevancia de la autoconciencia y la empatía para un desarrollo socioemocional equilibrado.
        .bg-azul-1.p-4
          p.mb-3 Para conocer estas etapas lo invitamos a consultar el PDF Etapas del desarrollo socioemocional
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer.pe-lg-4.w-fit(data-aos="zoom-in" href="https://www.youtube.com/watch?v=C8TBqpu4T2I " target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/video-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Video.</strong> Etapas del desarrollo socioemocional
      .col-12.col-lg-4.col-xl-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="18.5%" y="83%" numero="+")
        .h5.mb-2 Identidad psicosexual
        p Se forma a través del desarrollo de la confianza y la lealtad en relaciones personales, especialmente en relaciones de pareja. Aquí, los adolescentes aprenden a expresar y compartir afecto, sentando las bases para relaciones emocionales significativas y saludables en la vida adulta.
      .tarjeta.bg-white.p-4(x="34.5%" y="83%" numero="+")
        .h5.mb-2 Identificación ideológica
        p Involucra la adopción de un sistema de valores y creencias, ya sea político, social o filosófico, que comienza a formar parte de la identidad. Esto se refleja en la identificación con movimientos o ideologías, como el activismo social o la promoción de causas que resuenan con sus valores personales.
      .tarjeta.bg-white.p-4(x="49.5%" y="83%" numero="+")
        .h5.mb-2 Identidad psicosocial
        p Implica la participación en grupos o asociaciones que les ayudan a definir su sentido de comunidad y pertenencia. Los adolescentes pueden unirse a actividades comunitarias, grupos de voluntariado o movimientos que les permiten expresar y desarrollar su rol en la sociedad.
      .tarjeta.bg-white.p-4(x="65%" y="83%" numero="+")
        .h5.mb-2 Identidad profesional
        p Surge a medida que los adolescentes reflexionan sobre sus talentos y habilidades para elegir una carrera o profesión. Esta identidad les permite canalizar sus aspiraciones y habilidades hacia un propósito, como el adolescente que decide estudiar medicina con la motivación de ayudar a los demás.
      .tarjeta.bg-white.p-4(x="80.5%" y="83%" numero="+")
        .h5.mb-2 Identidad cultural y religiosa
        p Se desarrolla a partir de la inmersión en la experiencia cultural y religiosa de su entorno, consolidando su sentido de pertenencia espiritual y cultural. Esto incluye participar en actividades que refuercen sus creencias y valores, como prácticas religiosas, festividades culturales o rituales familiares.


    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Syed y McLean (2017) explican que Erikson fue el primero en utilizar el término crisis de identidad, describiendo la confusión y búsqueda de sentido que atraviesan los adolescentes. Bordignon (2005) complementa este concepto señalando que la integración de la identidad en sus múltiples aspectos permite al adolescente superar la confusión de roles, encontrar su lugar en el mundo y formar relaciones basadas en la confianza y la lealtad.

    p.mb-4 En conclusión, el desarrollo socioemocional durante estas etapas es fundamental, ya que establece las bases para el bienestar emocional y social en la vida adulta. Padres, educadores y cuidadores desempeñan un papel crucial al brindar un entorno de apoyo y comprensión, que permita a los jóvenes convertirse en adultos resilientes y seguros de sí mismos.

    .row.mb-0
      .col-12.col-lg-6.pe-lg-2.mb-3.mb-lg-0.d-flex(data-aos="fade-right")
        .bg-azul-1.p-4.d-flex.flex-column.justify-content-between
          p.text-bold.mb-3 Biografía de Erik Erikson
          p.mb-3 Conoce la vida de Erik Erikson y el contexto en el que surgieron sus influyentes teorías sobre el desarrollo humano. 
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer.pe-lg-4.w-fit(data-aos="zoom-in" href="https://www.biografiasyvidas.com/biografia/e/erikson.htm" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/link-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Sitio web.</strong> Etapas del desarrollo socioemocional
      .col-12.col-lg-6.ps-lg-2.d-flex(data-aos="fade-left")
        .bg-azul-1.p-4
          p.text-bold.mb-3 Impacto del desarrollo psicosocial en adolescentes
          p.mb-3 Explora cómo el desarrollo psicosocial afecta las conductas de los adolescentes en este estudio realizado en la Costa Caribe colombiana.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer.pe-lg-4.w-fit(data-aos="zoom-in" href="https://www.redalyc.org/journal/5177/517777358003/" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/link-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Sitio web.</strong> Conductas de los adolescentes 


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
